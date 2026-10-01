import { createFileRoute } from "@tanstack/react-router";
import Obrigado from "../pages/Obrigado";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Entre no grupo | Mafê Donuts" },
      { name: "description", content: "Entre no grupo do WhatsApp para receber os links e bônus da aula gratuita." },
      { property: "og:title", content: "Sua vaga está quase garantida | Mafê Donuts" },
      { property: "og:description", content: "Entre no grupo do WhatsApp para concluir sua inscrição." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Obrigado,
});