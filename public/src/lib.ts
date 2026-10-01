// Captura UTMs da URL para enviar junto com o lead
export function lerUtms(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const chaves = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];
  const utms: Record<string, string> = {};
  chaves.forEach((k) => {
    const v = params.get(k);
    if (v) utms[k] = v;
  });
  return utms;
}

// Dispara o evento Lead do Meta Pixel, se o Pixel estiver instalado no index.html
export function eventoLead() {
  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  if (typeof w.fbq === "function") w.fbq("track", "Lead");
}
