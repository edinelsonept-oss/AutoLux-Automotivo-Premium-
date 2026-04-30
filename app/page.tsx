import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Catalog />
      <About />
      <Footer />
    </main>
  );
}
