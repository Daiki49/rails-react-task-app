const BASE = import.meta.env.VITE_API_BASE_URL;

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  if (res.status === 204) return null as T;
  return res.json() as Promise<T>;
}
