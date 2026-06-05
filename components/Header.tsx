"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[#efd7d7] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[#efd7d7] bg-white">
            
            <Image src="/logo.jpg" alt="Lara Dias Agropecuária" fill sizes="48px" className="object-cover" />
            
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c40000]">
              Lara Dias
            </p>
            <p className="text-xs text-zinc-500">Agropecuária</p>
          </div>
        </div>

      <>
  <nav className="hidden gap-6 text-sm font-medium text-zinc-700 md:flex">
    <Link href="#categorias">Categorias</Link>
    <Link href="#sobre">Sobre</Link>
    <Link href="#contato">Contato</Link>
    <Link href="/produtos">Produtos</Link>
  </nav>

  <button
    onClick={() => setMenuAberto(!menuAberto)}
    className="text-2xl md:hidden"
  >
    ☰
  </button>
</>

        <Link
          href="https://wa.me/553135349488"
          target="_blank"
          className="rounded-2xl bg-[#c40000] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          WhatsApp
        </Link>
      </div>

{menuAberto && (
  <div className="border-t bg-white md:hidden">
    <nav className="flex flex-col gap-4 p-4 text-sm font-medium">
      <Link
        href="#categorias"
        onClick={() => setMenuAberto(false)}
      >
        Categorias
      </Link>

      <Link
        href="#sobre"
        onClick={() => setMenuAberto(false)}
      >
        Sobre
      </Link>

      <Link
        href="#contato"
        onClick={() => setMenuAberto(false)}
      >
        Contato
      </Link>

      <Link
        href="/produtos"
        onClick={() => setMenuAberto(false)}
      >
        Produtos
      </Link>
    </nav>
  </div>
)}

    </header>
  );
}