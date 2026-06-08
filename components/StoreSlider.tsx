"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imagens = [
  "/loja/fachada1.jpg",
  "/loja/interior1.jpg",
  "/loja/pet-shop1.jpg",
  "/loja/agro1.jpg",
  "/loja/stihl1.jpg",
  "/loja/jardinagem1.jpg",
];

export default function StoreSlider() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual((prev) =>
        prev === imagens.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-4xl font-black text-[#c40000]">
          📸 Conheça Nossa Loja
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src={imagens[atual]}
                alt="Lara Dias Agropecuária"
                fill
                className="object-cover transition-all duration-700"
              />
            </div>

            <div className="flex justify-center gap-2 py-4">
              {imagens.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setAtual(index)}
                  className={`h-3 w-3 rounded-full transition ${
                    atual === index
                      ? "bg-[#c40000]"
                      : "bg-zinc-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-[#c40000]">
              Estrutura completa
            </span>

            <h3 className="mt-4 text-4xl font-black text-zinc-900">
              Tudo o que você precisa em um só lugar
            </h3>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              A Lara Dias Agropecuária oferece uma estrutura
              completa para atender produtores rurais,
              tutores de pets e apaixonados por jardinagem.
            </p>

            <div className="mt-8 space-y-4">
              <div>✅ Loja física em Betim</div>
              <div>✅ Produtos para pets e agropecuária</div>
              <div>✅ Equipamentos STIHL</div>
              <div>✅ Atendimento especializado</div>
            </div>

            <a
              href="https://wa.me/553135349488"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-[#c40000] px-6 py-3 font-semibold text-white transition hover:bg-[#a80000]"
            >
              Falar no WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}