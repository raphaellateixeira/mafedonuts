import { type FormEvent, type ReactNode, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CONFIG } from "../config";
import { eventoLead, lerUtms } from "../lib";

const publico = [
  'Você quer uma renda extra, mas trava no "vender o quê?".',
  "Você nunca fez donut, nem doce nenhum, e quer aprender do zero.",
  "Você tem pouco tempo e não dá pra ficar na cozinha todo dia.",
  "Você quer um produto diferente, que quase ninguém vende na sua rua.",
];

function Check() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-primary-hover">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.6 2.6L16 9.5" />
    </svg>
  );
}

const inputCls =
  "w-full rounded-xl border-[1.5px] border-border bg-field px-4 py-3.5 text-base text-foreground placeholder:text-placeholder focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20";

function Eyebrow({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <p className={`text-sm font-bold uppercase tracking-[0.08em] ${claro ? "text-highlight" : "text-primary-hover"}`}>{children}</p>
  );
}

export default function Captura() {
  const navigate = useNavigate();
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    const dados = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!dados.nome || !dados.whatsapp || !dados.email) {
      setErro("Preenche todos os campos pra garantir sua vaga.");
      return;
    }
    setEnviando(true);
    try {
      if (CONFIG.webhookLeads) {
        await fetch(CONFIG.webhookLeads, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...dados, ...lerUtms(), origem: "captura-aula-donuts", data: new Date().toISOString() }),
        });
      }
    } catch {
      // segue para a página de obrigado mesmo se o webhook falhar
    }
    eventoLead();
    await navigate({ to: "/obrigado" });
  }

  return (
    <div className="min-h-screen bg-fundo text-lg leading-relaxed">
      <header className="bg-tinta px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-fundo">
        Aula ao vivo e gratuita · 19 e 20 de outubro · 20h · no Instagram
      </header>

      {/* HERO */}
      <section className="px-6 pb-[72px] pt-16">
        <div className="mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <p className="self-start rounded-full bg-rosaClaro px-3.5 py-2 text-sm font-bold uppercase tracking-[0.04em] text-rosaEscuro">
              Com a Mafê, da Mafê Donuts
            </p>
            <h1 className="font-display text-[clamp(40px,6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Da cozinha de casa para R$ 2 mil por mês
            </h1>
            <p className="max-w-[34ch] text-xl text-tintaSuave">
              Aula ao vivo e gratuita: o passo a passo do donut que custa centavos e vende a R$ 15, mesmo que você nunca tenha feito um doce.
            </p>

            <form id="inscricao" onSubmit={enviar} className="flex max-w-[460px] scroll-mt-6 flex-col gap-3.5 rounded-[20px] bg-white p-7 shadow-[0_18px_40px_rgba(43,22,32,0.10)]">
              <p className="text-lg font-bold">Garanta sua vaga gratuita</p>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Seu nome
                <input name="nome" type="text" autoComplete="given-name" placeholder="Como você quer ser chamada" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Seu WhatsApp
                <input name="whatsapp" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" className={inputCls} />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-medium">
                Seu melhor e-mail
                <input name="email" type="email" autoComplete="email" placeholder="voce@email.com" className={inputCls} />
              </label>
              {erro && <p className="text-sm font-medium text-rosaEscuro">{erro}</p>}
              <button type="submit" disabled={enviando} className="rounded-[14px] bg-rosa px-5 py-[18px] text-[17px] font-bold tracking-[0.02em] text-white transition hover:bg-rosaEscuro disabled:opacity-70">
                {enviando ? "ENVIANDO..." : "QUERO MINHA VAGA GRATUITA"}
              </button>
              <p className="text-center text-[13px] text-cinzaRosa">
                Depois do cadastro, você entra no grupo do WhatsApp onde vai receber o link da aula.
              </p>
            </form>
          </div>

          <div className="relative flex justify-center">
            <img src="/images/donuts-rosa.jpg" alt="Donuts com cobertura rosa e confeitos coloridos" className="aspect-[4/5] w-full max-w-[480px] rounded-[28px] object-cover" />
            <div className="absolute bottom-7 left-0 flex flex-col gap-0.5 rounded-2xl bg-white px-[18px] py-3.5 shadow-[0_12px_28px_rgba(43,22,32,0.14)]">
              <span className="font-display text-[26px] font-extrabold text-rosaEscuro">Centavos → R$ 15</span>
              <span className="text-[13px] text-cinzaRosa">o custo da massa e o preço de venda</span>
            </div>
          </div>
        </div>
      </section>

      {/* AS DUAS NOITES */}
      <section className="bg-card px-6 py-[72px]">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-10">
          <div className="flex max-w-[720px] flex-col gap-2.5">
            <Eyebrow>O que você vai ver nas duas noites</Eyebrow>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.08]">
              A massa no primeiro dia. O donut pronto no segundo.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3.5 rounded-[22px] bg-fundo p-8">
              <p className="font-bold text-rosaEscuro">Dia 1 · Segunda, 19/10, 20h</p>
              <h3 className="font-display text-[26px] font-extrabold leading-tight">A massa do zero, com o que você já tem em casa</h3>
              <p className="text-tintaSuave">Batedeira comum, panela e fogão. Eu faço a massa ao vivo, explico o ponto, a fermentação, e congelo na sua frente.</p>
            </div>
            <div className="flex flex-col gap-3.5 rounded-[22px] bg-fundo p-8">
              <p className="font-bold text-rosaEscuro">Dia 2 · Terça, 20/10, 20h</p>
              <h3 className="font-display text-[26px] font-extrabold leading-tight">Do freezer para a vitrine, e como vender</h3>
              <p className="text-tintaSuave">A massa sai do freezer e vira donut recheado, ao vivo. E eu te mostro como vender pelo WhatsApp e pelo Instagram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="px-6 py-[72px]">
        <div className="mx-auto grid max-w-[1160px] items-start gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <Eyebrow>Pra quem é</Eyebrow>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.08]">Essa aula é pra você se...</h2>
          </div>
          <div className="flex flex-col gap-4">
            {publico.map((t) => (
              <div key={t} className="flex items-start gap-3.5 rounded-2xl bg-white px-5 py-[18px]">
                <Check />
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE A MAFÊ */}
      <section className="bg-tinta px-6 py-20 text-fundo">
        <div className="mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <figure className="flex flex-col gap-2">
              <img src="/images/primeiros-donuts.jpg" alt="Os primeiros donuts da Mafê, feitos na cozinha de casa" className="aspect-[3/4] w-full rounded-[18px] object-cover" />
              <figcaption className="text-[13px] text-borda">Meus primeiros donuts, na cozinha de casa</figcaption>
            </figure>
            <figure className="flex flex-col gap-2">
              {/* TROCAR por uma foto atual da Mafê na loja */}
              <img src="/images/mafe-avental.jpg" alt="Mafê de avental rosa da Mafê Donuts" className="aspect-[3/4] w-full rounded-[18px] object-cover" />
              <figcaption className="text-[13px] text-borda">A Mafê hoje</figcaption>
            </figure>
          </div>
          <div className="flex flex-col gap-[18px]">
            <Eyebrow claro>Quem vai te ensinar</Eyebrow>
            <h2 className="font-display text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.08]">Oi, eu sou a Mafê. Eu comecei exatamente onde você está.</h2>
                <p className="text-on-dark-muted">
              Há seis anos, eu fiz meus primeiros donuts com uma batedeira comum, na cozinha da minha casa. Hoje esse doce é o meu negócio: a Mafê Donuts vende pelo WhatsApp e pelo Instagram, e mais de 400 mil pessoas acompanham meu trabalho.
            </p>
            <p className="text-on-dark-muted">Nessa aula eu vou te mostrar o caminho que eu fiz, sem enrolação.</p>
          </div>
        </div>
      </section>

      {/* PROVA */}
      <section className="px-6 py-[72px]">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-[22px] text-center">
          <Eyebrow>Quem já aprendeu comigo</Eyebrow>
          <blockquote className="font-display text-[clamp(24px,3vw,32px)] font-semibold leading-tight">
            "Já tinha comprado outros cursos e não deu certo. A sua receita deu de primeira. Fiz e vendi no mesmo dia."
          </blockquote>
          {/* Trocar pelo nome do aluno, se autorizado */}
          <p className="text-[15px] text-cinzaRosa">Aluno da Mafê</p>
          {/* Espaço para prints de alunos: troque por <img src="/images/print-aluno.jpg" ... /> */}
          <div className="flex aspect-video w-full max-w-[560px] items-center justify-center rounded-[18px] border-2 border-dashed border-borda bg-card text-[15px] text-placeholder">
            [PRINTS DE ALUNOS VENDENDO: PEDIDOS, FORNADAS]
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-rosaClaro px-6 py-20">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-[22px] text-center">
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.05]">
            Na sua cozinha já tem tudo que você precisa pra começar.
          </h2>
          <p className="text-xl text-tintaSuave">Aula ao vivo e gratuita · 19 e 20 de outubro, às 20h, no Instagram.</p>
          <a href="#inscricao" className="rounded-[14px] bg-rosa px-9 py-5 text-lg font-bold text-white no-underline transition hover:bg-rosaEscuro">
            QUERO MINHA VAGA GRATUITA
          </a>
          <p className="text-sm text-cinzaRosa">Gratuito. Vagas no grupo do WhatsApp sujeitas à capacidade.</p>
        </div>
      </section>

      <footer className="px-6 py-7 text-center text-[13px] text-cinzaRosa">
        Mafê Donuts · José Bonifácio, SP · <a href="#" className="text-rosaEscuro underline">Política de privacidade</a>
      </footer>
    </div>
  );
}
