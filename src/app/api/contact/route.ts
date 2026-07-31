import { fetchViaProxy } from "@/lib/proxy";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Заполните все поля" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return Response.json({ ok: false, error: "Сервер не настроен" });
  }

  const text = [
    "Новое сообщение с портфолио",
    "",
    `Имя: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n");

  try {
    const res = await fetchViaProxy(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    const data = await res.json();
    if (!res.ok || !data.ok) {
      return Response.json({ ok: false, error: "Ошибка отправки, попробуйте позже" });
    }
    return Response.json({ ok: true, error: null });
  } catch {
    return Response.json({ ok: false, error: "Нет соединения, попробуйте позже" });
  }
}
