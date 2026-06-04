import { ShieldCheck, Star } from "lucide-react";

const benefits = [
  "Atendimento próximo e especializado",
  "Loja completa para pet, agro e jardinagem",
  "Pronta para evoluir para catálogo online",
  "Visual responsivo para celular e computador",
];

export default function About() {
  return (
    <section id="sobre" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c40000]">Sobre a loja</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
            Uma marca forte, confiável e pronta para a internet
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            A identidade visual segue o vermelho da marca, com contraste forte, leitura fácil e foco em conversão. O site já nasce seguro e preparado para evoluir depois para catálogo e vendas online.
          </p>

          <ul className="mt-8 grid gap-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#f2dddd] bg-[#fff8f8] p-4">
                <Star className="mt-0.5 h-5 w-5 text-[#c40000]" />
                <span className="text-sm leading-6 text-zinc-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[#f0d6d6] bg-[#fff7f7] p-6 shadow-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c40000] text-white shadow-md">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h3 className="mt-6 text-2xl font-black text-[#a40000]">    Horário de funcionamento:</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600"></p>
            Segunda a sábado: 07:30 às 18:00
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Domingo: 08:00 às 12:00
          </p>
        </div>
      </div>
    </section>
  );
}