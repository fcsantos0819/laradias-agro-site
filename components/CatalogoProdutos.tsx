"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

type Produto = {
  codigo: string;
  produto: string;
  categoria: string;
  marca: string;
  preco?: string;
  estoque?: string;
};

export default function CatalogoProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [busca, setBusca] = useState("");
  const [pedido, setPedido] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("/produtos.csv")
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          delimiter: ";",
          skipEmptyLines: true,
          complete: (result) => {
            const dados = (result.data as any[]).map((item) => ({
              codigo: item["Codigo"],
              produto: item["Produto"],
              categoria: item["Categoria"],
              marca: item["Marca"],
              preco: item["Preço"],
              estoque: item["Estoque"],
            }));

            setProdutos(dados);
          },
        });
      });
  }, []);

  const adicionarAoPedido = (produto: Produto) => {
    setPedido((atual) => [...atual, produto]);
  };

  const removerDoPedido = (index: number) => {
    setPedido((atual) => atual.filter((_, i) => i !== index));
  };
  
  const limparPedido = () => {
    setPedido([]);
  };

  const enviarWhatsApp = (tipo: "orcamento" | "pedido") => {
  const itens = pedido
    .map((item, index) => `${index + 1}. ${item.produto}`)
    .join("\n");

  const mensagem =
    tipo === "orcamento"
      ? `Olá!

Gostaria de solicitar orçamento para os seguintes produtos:

${itens}

Nome:
Telefone:`
      : `Olá!

Gostaria de fazer um pedido para entrega dos seguintes produtos:

${itens}

Nome:
Telefone:
Endereço:`;

  const numero = "553135349488";

  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
};

  const produtosFiltrados = useMemo(() => {
    if (!busca.trim()) return [];

    const termo = busca.toLowerCase();

    return produtos
      .filter(
        (produto) =>
          produto.produto?.toLowerCase().includes(termo) ||
          produto.marca?.toLowerCase().includes(termo) ||
          produto.categoria?.toLowerCase().includes(termo)
      )
      .slice(0, 50);
  }, [busca, produtos]);

  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Pesquisar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full rounded-xl border p-3"
      />

      {pedido.length > 0 && (
        <div className="rounded-xl border bg-zinc-50 p-4">
          <h2 className="text-lg font-bold">
            🛒 Meu Pedido ({pedido.length})
          </h2>

          <ul className="mt-3 space-y-2">
            {pedido.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between"
              >
                <span>{item.produto}</span>

                <button
                  onClick={() => removerDoPedido(index)}
                  className="rounded bg-red-600 px-2 py-1 text-sm text-white"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

            <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={limparPedido}
            className="rounded bg-zinc-700 px-4 py-2 text-white"
          >
            Limpar Pedido
          </button>

          <button
            onClick={() => enviarWhatsApp("orcamento")}
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            📋 Solicitar Orçamento
          </button>

          <button
            onClick={() => enviarWhatsApp("pedido")}
            className="rounded bg-[#c40000] px-4 py-2 text-white"
          >
            🚚 Fazer Pedido
          </button>
        </div>
        </div>
      )}

      {!busca && (
        <div className="text-center text-zinc-500">
          Digite um produto para pesquisar...
        </div>
      )}

      <div className="grid gap-4">
        {produtosFiltrados.map((produto, index) => (
          <div
            key={`${produto.codigo}-${index}`}
            className="rounded-xl border p-4 shadow-sm"
          >
            <h2 className="font-semibold">
              {produto.produto}
            </h2>

            <p className="text-sm text-zinc-500">
              Marca: {produto.marca}
            </p>

            <p className="text-sm text-zinc-500">
              Categoria: {produto.categoria}
            </p>

            <button
              onClick={() => adicionarAoPedido(produto)}
              className="mt-3 rounded-lg bg-[#c40000] px-4 py-2 text-white"
            >
              ➕ Adicionar ao Pedido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}