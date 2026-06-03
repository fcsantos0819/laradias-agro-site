import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f5] text-zinc-900">
      <Header />
      <Hero />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}