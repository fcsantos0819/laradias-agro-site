import { PawPrint, Tractor, Trees, Wrench } from "lucide-react";

const categories = [
  {
    title: "Pet Shop",
    icon: PawPrint,
    description: "Rações, medicamentos, acessórios e higiene para cães, gatos e outros pets.",
  },
  {
    title: "Agropecuária",
    icon: Tractor,
    description: "Produtos para bovinos, equinos, aves e apoio ao produtor rural.",
  },
  {
    title: "Jardinagem",
    icon: Trees,
    description: "Sementes, adubos, ferramentas e itens para jardim e horta.",
  },
  {
    title: "Equipamentos STIHL",
    icon: Wrench,
    description: "Roçadeiras, motosserras e acessórios para uso profissional e doméstico.",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c40000]">Categorias</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
          Tudo o que a loja entrega em um só lugar
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          Uma vitrine clara e elegante para apresentar o mix de produtos da loja e facilitar a navegação do cliente.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-[#efd4d4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c40000] text-white shadow-md">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}