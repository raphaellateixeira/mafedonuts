import { useEffect } from "react";

// Carrega as fontes da página (Bricolage Grotesque e DM Sans)
export function useFontes() {
  useEffect(() => {
    const id = "fontes-mafe";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=DM+Sans:wght@400;500;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

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
