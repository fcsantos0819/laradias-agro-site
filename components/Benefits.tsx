export default function Benefits() {
  const itens = [
    {
      icon: "🚚",
      titulo: "Entrega Rápida",
      descricao: "Atendemos Betim e região",
    },
    {
      icon: "💳",
      titulo: "Parcelamento",
      descricao: "Facilidade no pagamento",
    },
    {
      icon: "🏆",
      titulo: "Qualidade",
      descricao: "Produtos das melhores marcas",
    },
    {
      icon: "📱",
      titulo: "WhatsApp",
      descricao: "Atendimento rápido",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        {itens.map((item) => (
          <div
            key={item.titulo}
            /*className="rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >*/

            className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
            ">

            <div className="text-4xl">{item.icon}</div>

            <h3 className="mt-3 font-bold">
              {item.titulo}
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              {item.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}