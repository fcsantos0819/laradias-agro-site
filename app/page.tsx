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
      <Contact />
    </>
  );
}