import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />

      <section className="mx-auto mt-16 max-w-7xl px-6">
        <h2 className="mb-6 text-3xl font-bold text-[#c40000]">
          ⭐ Produtos em Destaque
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          <a
            href="/produtos?grupo=Special Dog Adulto"
            
            className="rounded-xl border p-4 shadow transition hover:border-[#c40000] hover:shadow-xl"
          >
            <img
              src="/produtos/special-dog-adulto.jpg"
              alt="Special Dog Adulto"
             className="mx-auto h-48 w-full object-contain"
            />

            <h3 className="mt-3 text-center font-semibold">
              Special Dog Adulto
            </h3>
          </a>

          <a
            href="/produtos?grupo=Quatree Gourmet Adulto"
           
            className="rounded-xl border p-4 shadow transition hover:border-[#c40000] hover:shadow-xl"
          >
            <img
              src="/produtos/quatree-gourmet-adulto.jpg"
              alt="Quatree Gourmet Adulto"
              className="mx-auto h-48 w-full object-contain"
            />

            <h3 className="mt-3 text-center font-semibold">
              Quatree Gourmet Adulto
            </h3>
          </a>

        </div>
      </section>

      <About />

<section className="mx-auto mt-16 max-w-7xl px-6">
  <h2 className="mb-6 text-3xl font-bold text-[#c40000]">
    🔥 Promoções
  </h2>

  <div className="grid gap-6 md:grid-cols-4">

    <a
      href="https://wa.me/553135349488?text=Olá! Tenho interesse na promoção Quatree Gourmet Adulto."
      target="_blank"
      className="rounded-xl border-2 border-red-500 p-4 shadow hover:shadow-xl"
    >
      <img
        src="/produtos/quatree-gourmet-adulto.jpg"
        alt="Quatree Gourmet Adulto"
        className="mx-auto h-40 object-contain"
      />

      <h3 className="mt-3 text-center font-semibold">
        Quatree Gourmet Adulto
      </h3>

      {/* PREÇO PROMOCIONAL
      <p className="text-center text-xl font-bold text-red-600">
        R$ 89,90
      </p>

      <p className="text-center text-sm text-zinc-500 line-through">
        R$ 109,90
      </p>
      */}

    </a>

  </div>
</section>

      <Contact />
    </>
  );
}