import { createFileRoute } from "@tanstack/react-router";
import Captura from "../pages/Captura";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aula gratuita de donuts | Mafê Donuts" },
      { name: "description", content: "Aprenda ao vivo a fazer e vender donuts nos dias 19 e 20 de outubro." },
      { property: "og:title", content: "Da cozinha de casa para R$ 2 mil por mês" },
      { property: "og:description", content: "Aula ao vivo e gratuita com a Mafê Donuts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Captura,
});
