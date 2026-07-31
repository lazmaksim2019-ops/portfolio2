import { ProxyAgent } from "undici";

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
    return await fetch(url, { ...init, dispatcher: proxyAgent } as RequestInit);
  } catch {
    return fetch(url, init);
  }
}
