"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PawPrint, Tractor, Trees, Wrench } from "lucide-react";

const categories = [
  {
    title: "Pet Shop",
    icon: PawPrint,
    images: [
      "/categorias/pet-shop-1.jpg",
      "/categorias/pet-shop-2.jpg",
      "/categorias/pet-shop-3.jpg",
      "/categorias/pet-shop-4.jpg",
      "/categorias/pet-shop-5.jpg",
    ],
    description: "Rações, medicamentos, acessórios e higiene.",
  },
  {
    title: "Agropecuária",
    icon: Tractor,
    images: [
      "/categorias/agro-1.jpg",
      "/categorias/agro-2.jpg",
      "/categorias/agro-3.jpg",
      "/categorias/agro-4.jpg",
      "/categorias/agro-5.jpg",
    ],
    description: "Produtos para bovinos, equinos e aves.",
  },
  {
    title: "Jardinagem",
    icon: Trees,
    images: [
      "/categorias/jardinagem-1.jpg",
      "/categorias/jardinagem-2.jpg",
      "/categorias/jardinagem-3.jpg",
      "/categorias/jardinagem-4.jpg",
      "/categorias/jardinagem-5.jpg",
    ],
    description: "Sementes, adubos, ferramentas e mais.",
  },
  {
    title: "Equipamentos STIHL",
    icon: Wrench,
    images: [
      "/categorias/stihl-1.jpg",
      "/categorias/stihl-2.jpg",
      "/categorias/stihl-3.jpg",
      "/categorias/stihl-4.jpg",
      "/categorias/stihl-5.jpg",
    ],
    description: "Roçadeiras, motosserras e acessórios.",
  },
];

export default function Categories() {
  const [currentImages, setCurrentImages] = useState(
    categories.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((imgIndex, categoryIndex) => {
          const total = categories[categoryIndex].images.length;
          return (imgIndex + 1) % total;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="categorias" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-[#efd4d4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.images[currentImages[index]]}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-1000"
                />
              </div>

              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c40000] text-white shadow-md">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}