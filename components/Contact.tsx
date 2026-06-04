import { MapPinned, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-[1.75rem] bg-[#c40000] p-6 text-white shadow-lg sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/75">Contato rápido</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight">Fale com a loja pelo canal mais rápido</h2>
          <p className="mt-4 text-base leading-7 text-white/90">
            Um CTA forte para WhatsApp ajuda muito na conversão, porque o cliente já entra direto no atendimento sem perder tempo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5531996859285"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#a40000] transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/laradiasagropecuaria/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <span>📷</span>
              Instagram
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Ant%C3%B4nio+Gabriel+de+Resende%2C+541%2C+Tereza+Cristina%2C+S%C3%A3o+Joaquim+de+Bicas+-+MG"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MapPinned className="h-5 w-5" />
              Mapa
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[#ecd7d7] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-500">Telefone / WhatsApp</p>
          <p className="mt-1 text-lg font-bold text-zinc-900">(31) 3534-9488</p>
        </div>
        <div className="rounded-2xl border border-[#ecd7d7] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-500">Instagram</p>
          <p className="mt-1 text-lg font-bold text-zinc-900">@laradiasagropecuaria</p>
        </div>
        <div className="rounded-2xl border border-[#ecd7d7] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-zinc-500">Email</p>
          <p className="mt-1 text-lg font-bold text-zinc-900">laradiasagropecuaria@hotmail.com</p>
        </div>
      </div>
    </section>
  );
}