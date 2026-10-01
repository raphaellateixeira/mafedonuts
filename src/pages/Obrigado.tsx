import { CONFIG } from "../config";
import { useFontes } from "../lib/mafe";

const passos = [
  { n: "1", titulo: "Entra no grupo", texto: "É só aviso: link da aula, lembretes e bônus." },
  { n: "2", titulo: "Ativa o lembrete da live", texto: `No meu Instagram, ${CONFIG.instagram}. Dias 19 e 20, às 20h.` },
];

export default function Obrigado() {
  useFontes();
  return (
    <div className="min-h-screen bg-[#FFF4F7] text-[#2B1620] font-['DM_Sans',system-ui,sans-serif] text-lg leading-relaxed">
      <div className="h-2.5 bg-[#2B1620]" />

      <section className="px-6 pb-14 pt-[72px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 text-center">
          <p className="rounded-full bg-[#FFE1EA] px-3.5 py-2 text-sm font-bold uppercase tracking-[0.04em] text-[#B0124F]">Falta só um passo</p>
          <h1 className="font-['Bricolage_Grotesque',sans-serif] text-[clamp(36px,5.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.02em]">
            Sua vaga está quase garantida!
          </h1>
          <p className="max-w-[36ch] text-xl text-[#4A2A36]">
            Entra agora no grupo do WhatsApp. É lá que eu vou mandar o link das aulas e uns bônus antes do dia 19.
          </p>
          <a href={CONFIG.linkGrupoWhatsApp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-[14px] bg-[#D1185E] px-9 py-5 text-lg font-bold text-white no-underline transition hover:bg-[#B0124F]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.4A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
            ENTRAR NO GRUPO DO WHATSAPP
          </a>
          <p className="text-sm text-[#6B4C58]">Sem o grupo, você pode perder o link da aula.</p>
        </div>
      </section>

      <section className="px-6 pb-[72px]">
        <div className="mx-auto grid max-w-[960px] gap-5 md:grid-cols-3">
          {passos.map((p) => (
            <div key={p.n} className="flex flex-col gap-2.5 rounded-[20px] bg-white p-7">
              <p className="font-['Bricolage_Grotesque',sans-serif] text-[40px] font-extrabold leading-none text-[#B0124F]">{p.n}</p>
              <p className="font-bold">{p.titulo}</p>
              <p className="text-base text-[#4A2A36]">{p.texto}</p>
            </div>
          ))}
          <div className="flex flex-col gap-2.5 rounded-[20px] bg-white p-7">
            <p className="font-['Bricolage_Grotesque',sans-serif] text-[40px] font-extrabold leading-none text-[#B0124F]">3</p>
            <p className="font-bold">Me conta sobre você</p>
            <p className="text-base text-[#4A2A36]">
              Responde a pesquisa rapidinha, pra eu preparar a aula pensando em você.{" "}
              <a href={CONFIG.linkPesquisa} target="_blank" rel="noopener noreferrer" className="font-bold text-[#B0124F] underline">
                Responder agora
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFE1EA] px-6 py-14">
        <div className="mx-auto flex max-w-[720px] flex-col gap-3 text-center">
          <p className="font-bold">Pra acompanhar a Aula 1, deixa separado:</p>
          <p className="text-[#4A2A36]">batedeira comum, farinha de trigo, ovos, fermento biológico, açúcar e óleo.</p>
        </div>
      </section>
    </div>
  );
}
