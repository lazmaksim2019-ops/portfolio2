import { fetchViaProxy } from "@/lib/proxy";

export const runtime = "nodejs";

const FALLBACK_KEY = "87aaeb35-cdf6-4ae2-9073-e930c3c5fcfb";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "Заполните все поля" });
  }

  const accessKey = process.env.WEB3FORMS_KEY ?? FALLBACK_KEY;

  try {
    const res = await fetchViaProxy("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `Портфолио — ${name}`,
        from_name: "Портфолио сайта",
      }),
    });

    const data = await res.json();
    if (!data.success) {
      return Response.json({ ok: false, error: "Ошибка отправки, попробуйте позже" });
    }
    return Response.json({ ok: true, error: null });
  } catch {
    return Response.json({ ok: false, error: "Нет соединения, попробуйте позже" });
  }
}
