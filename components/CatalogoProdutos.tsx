"use client";

import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import Image from "next/image";
import { useRef } from "react";
/*import { useSearchParams } from "next/navigation";*/

type Produto = {
  codigo: string;
  produto: string;
  categoria: string;
  grupo: string;
  tamanho: string;
  marca: string;
  preco?: string;
  estoque?: string;
  imagem?: string;
};

type ItemPedido = {
  produto: Produto;
  quantidade: number;
};

export default function CatalogoProdutos({
  grupoInicial = "",
}: {
  grupoInicial?: string;
}) {
  /*const searchParams = useSearchParams();*/
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);
  const buscaRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (grupoInicial) {
    setBusca(grupoInicial);
  }
}, [grupoInicial]);

 /*useEffect(() => {
  const grupo = searchParams.get("grupo");

  if (grupo) {
    setBusca(grupo);
    setSugestoes([]);
  }
}, [searchParams]);*/

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      buscaRef.current &&
      !buscaRef.current.contains(event.target as Node)
    ) {
      setSugestoes([]);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

useEffect(() => {
  if (!busca.trim()) {
    setSugestoes([]);
    return;
  }

  const gruposUnicos = [
    ...new Map(
      produtos
        .filter((produto) =>
          produto.grupo
            ?.toLowerCase()
            .includes(busca.toLowerCase())
        )
        .map((produto) => [
          produto.grupo,
          produto,
        ])
    ).values(),
  ];

  /*const grupoUrl = searchParams.get("grupo");

if (
  grupoUrl &&
  grupoUrl.toLowerCase() === busca.toLowerCase()
) {
  setSugestoes([]);
} else {
  setSugestoes(gruposUnicos.slice(0, 8));
}
  */

}, [busca, produtos]);

  useEffect(() => {
    setMarcaSelecionada("");
  }, [categoriaSelecionada]);
  
  type ItemPedido = {
  produto: Produto;
  quantidade: number;
};
const [pedido, setPedido] = useState<ItemPedido[]>([]);

  useEffect(() => {
    fetch("/produtos.csv")
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          delimiter: ";",
          skipEmptyLines: true,
            complete: (result) => {
  
  const dados = result.data as Produto[];

  console.log(dados[0]);
  console.log(dados[1]);

              setProdutos(dados);
          },
        });
      });
  }, []);

  const adicionarAoPedido = (produto: Produto) => {
  setPedido((atual) => {
    const existente = atual.find(
      (item) => item.produto.codigo === produto.codigo
    );

    if (existente) {
      return atual.map((item) =>
        item.produto.codigo === produto.codigo
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      );
    }

    return [
      ...atual,
      {
        produto,
        quantidade: 1,
      },
    ];
  });
};

  const removerDoPedido = (index: number) => {
    setPedido((atual) => atual.filter((_, i) => i !== index));
  };
  
  const aumentarQuantidade = (codigo: string) => {
  setPedido((atual) =>
    atual.map((item) =>
      item.produto.codigo === codigo
        ? {
            ...item,
            quantidade: item.quantidade + 1,
          }
        : item
    )
  );
};

const diminuirQuantidade = (codigo: string) => {
  setPedido((atual) =>
    atual
      .map((item) =>
        item.produto.codigo === codigo
          ? {
              ...item,
              quantidade: item.quantidade - 1,
            }
          : item
      )
      .filter((item) => item.quantidade > 0)
  );
};

  const limparPedido = () => {
    setPedido([]);
  };

  const enviarWhatsApp = (tipo: "orcamento" | "pedido") => {
  
const itens = pedido
  .map(
    (item, index) =>
      `${index + 1}. ${item.produto.produto} - Quantidade: ${item.quantidade}`
  )
  .join("\n");

  const mensagem =
    tipo === "orcamento"
      ? `Olá!

Gostaria de solicitar orçamento para os seguintes produtos:

${itens}

Nome:
Telefone:
Endereço:
Retirada ( ) ou Entrega ( )`
      : `Olá!

Gostaria de fazer um pedido para entrega dos seguintes produtos:

${itens}

Nome:
Telefone:
Endereço:
Retirada ( ) ou Entrega ( )`;

  const numero = "553135349488";

  window.open(
    `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
};

  const categorias = [...new Set(produtos.map((p) => p.categoria))]
    .filter(Boolean)
    .sort();

const marcas = [
  ...new Set(
    produtos
      .filter((produto) =>
        !categoriaSelecionada
          ? true
          : produto.categoria?.trim() ===
            categoriaSelecionada.trim()
      )
      .map((produto) => produto.marca?.trim())
  ),
]
  .filter(Boolean)
  .sort();

    const produtosFiltrados = useMemo(() => {
          
      const termo = busca.toLowerCase();

    return produtos
      .filter((produto) => {
        const buscaOk =
          !busca ||
          produto.grupo?.toLowerCase().includes(termo) ||
          produto.marca?.toLowerCase().includes(termo) ||
          produto.categoria?.toLowerCase().includes(termo);

        const categoriaOk =
          !categoriaSelecionada ||
          produto.categoria === categoriaSelecionada;

        const marcaOk =
          !marcaSelecionada ||
          produto.marca === marcaSelecionada;

        return buscaOk && categoriaOk && marcaOk;
      })

      .sort((a, b) =>
        a.produto.localeCompare(b.produto)
      )

      .slice(0, 20);
      }, [
    busca,
    produtos,
    categoriaSelecionada,
    marcaSelecionada,
  ]);

   const produtosAgrupados = useMemo(() => {
  const grupos: Record<string, Produto[]> = {};

  produtosFiltrados.forEach((produto) => {
    const chave = produto.grupo || produto.produto;

    if (!grupos[chave]) {
      grupos[chave] = [];
    }

    grupos[chave].push(produto);
  });

  return Object.entries(grupos);
}, [produtosFiltrados]);

      const termo = busca.toLowerCase();

      const totalItens = pedido.reduce(
        (total, item) => total + item.quantidade,
        0
      );

  return (
    <div className="space-y-6">
      
      <div className="grid gap-3 md:grid-cols-2">
  <select
    value={categoriaSelecionada}
    onChange={(e) =>
      setCategoriaSelecionada(e.target.value)
    }
    className="rounded-xl border p-3"
  >
    <option value="">
      Todas as Categorias
    </option>

    {categorias.map((categoria) => (
      <option
        key={categoria}
        value={categoria}
      >
        {categoria}
      </option>
    ))}
  </select>

  <select
    value={marcaSelecionada}
    onChange={(e) =>
      setMarcaSelecionada(e.target.value)
    }
    className="rounded-xl border p-3"
  >
    <option value="">
      Todas as Marcas
    </option>

    {marcas.map((marca) => (
      <option
        key={marca}
        value={marca}
      >
        {marca}
      </option>
    ))}
  </select>
</div>

{busca && (
  <p className="text-sm text-zinc-500">
    {produtosFiltrados.length} grupo(s) encontrado(s)
  </p>
)}

<div ref={buscaRef} className="relative">
  <input
    type="text"
    placeholder="Pesquisar produto..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}
    className="w-full rounded-xl border p-3"
 
onKeyDown={(e) => {
  if (e.key === "Enter") {
    setSugestoes([]);
  }

}}

  />

  {sugestoes.length > 0 && (
    <div className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg">
      {sugestoes.map((produto) => (

<button
          key={produto.codigo}
          onClick={() => {
            setBusca(produto.grupo);
            setSugestoes([]);
          }}
          className="block w-full border-b p-3 text-left hover:bg-zinc-100"
        >
          {produto.grupo}
        </button>
      ))}
    </div>
  )}
</div>

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
                <div>
  <strong>
  {item.produto.grupo} - {item.produto.tamanho}
</strong>

 {/*<div className="text-sm font-semibold text-[#c40000]">
  R$ {produto.preco}
</div> */}

  <div className="mt-2 flex items-center gap-2">
    <button
      onClick={() =>
        diminuirQuantidade(item.produto.codigo)
      }
      className="rounded bg-zinc-300 px-2"
    >
      -
    </button>

    <span>{item.quantidade}</span>

    <button
      onClick={() =>
        aumentarQuantidade(item.produto.codigo)
      }
      className="rounded bg-zinc-300 px-2"
    >
      +
    </button>
  </div>
</div>

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

{busca.trim() && (
  <div className="grid gap-4">
 
{produtosAgrupados.map(([grupo, itens]) => (
  <div
    key={grupo}
    className="rounded-xl border p-4 shadow-sm hover:border-[#c40000] hover:shadow-md transition"
  >
    <div className="flex gap-4">

      <div className="relative h-32 w-32 flex-shrink-0">
        <Image
          src={itens[0].imagem || "/produtos/sem-imagem.jpg"}
          alt={grupo}
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <h2 className="font-semibold text-xl">
          {grupo}
        </h2>

        <p className="mb-3 text-sm text-zinc-500">
          Marca: {itens[0].marca}
        </p>

        <div className="space-y-2">
          
{itens.map((produto) => {
  const quantidadeNoCarrinho =
    pedido.find(
      (item) => item.produto.codigo === produto.codigo
    )?.quantidade || 0;

  return (

            <div
              key={produto.codigo}
              className="flex items-center justify-between rounded border p-2"
            >
              <div>
  <div>
  <strong>{produto.tamanho}</strong>

  <div className="text-sm text-zinc-500">
    Estoque: {produto.estoque}
  </div>

  {quantidadeNoCarrinho > 0 && (
    <div className="text-sm font-semibold text-green-600">
      No carrinho: {quantidadeNoCarrinho}
    </div>
  )}
</div>

              </div>

              <button
                disabled={Number(produto.estoque || 0) <= 0}
                onClick={() => adicionarAoPedido(produto)}
                className={`rounded-lg px-3 py-2 text-white ${
                  Number(produto.estoque || 0) > 0
                    ? "bg-[#c40000]"
                    : "bg-zinc-400 cursor-not-allowed"
                }`}
              >
                {Number(produto.estoque || 0) > 0
                  ? "➕ Adicionar"
                  : "❌ Sem Estoque"}
              </button>
            </div>
  );  
})}
        </div>
      </div>

    </div>
  </div>
))}

  </div>
)}
    </div>
  );
}