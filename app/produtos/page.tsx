import CatalogoProdutos from "@/components/CatalogoProdutos";

export default function ProdutosPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold text-[#c40000]">
        Produtos
      </h1>

      <p className="mt-4 mb-8 text-zinc-600">
        Consulte nosso catálogo de produtos.
      </p>

      <CatalogoProdutos />
    </main>
  );
}