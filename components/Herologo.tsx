import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#be0000] via-[#d10000] to-[#8f0000] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-2 lg:items-center lg:py-16">
        <div>
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
            Loja completa para pet, agro e jardinagem
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Lara Dias
            <span className="block text-white/95">Agropecuária</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Atendimento próximo, produtos para o campo e para o seu pet, e uma presença digital pronta para crescer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5531996859285"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-[#a40000] shadow-lg transition hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/laradiasagropecuaria/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Abrir Instagram
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl">
          <div className="flex aspect-[4/3] items-center justify-center bg-white p-6">
            <div className="relative h-full w-full">
              <Image
                src="/logo.jpg"
                alt="Logo Lara Dias Agropecuária"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm font-semibold text-white/80">Contato / WhatsApp</p>
              <p className="mt-1 text-lg font-bold">(31) 3534-9488</p>
              <p className="mt-1 text-lg font-bold">(31) 99685-9285</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm font-semibold text-white/80">Instagram</p>
              <p className="mt-1 text-lg font-bold">@laradiasagropecuaria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}