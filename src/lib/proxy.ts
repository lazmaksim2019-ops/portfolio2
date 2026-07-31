import { ProxyAgent, fetch as proxiedFetch } from "undici";

function buildProxyUrl(): string | null {
  const host = process.env.PROXY_HOST;
  if (!host) return null;
  const port = process.env.PROXY_PORT ?? "";
  const user = process.env.PROXY_USER;
  const pass = process.env.PROXY_PASS ?? "";
  const auth = user ? `${encodeURIComponent(user)}:${encodeURIComponent(pass)}@` : "";
  return `http://${auth}${host}${port ? `:${port}` : ""}`;
}

let proxyAgent: ProxyAgent | null = null;

export async function fetchViaProxy(
  url: string,
  init?: RequestInit
): Promise<Response> {
  const proxyUrl = buildProxyUrl();
  if (!proxyUrl) return fetch(url, init);
  if (!proxyAgent) proxyAgent = new ProxyAgent(proxyUrl);
  try {
    const res = await proxiedFetch(
      url,
      { ...init, dispatcher: proxyAgent } as unknown as Parameters<typeof proxiedFetch>[1]
    );
    return res as unknown as Response;
  } catch {
    return fetch(url, init);
  }
}
