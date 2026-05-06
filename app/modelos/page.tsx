import { Navbar } from "@/components/Navbar";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";

export default function ModelosPage() {
  return (
    <main className="bg-luxury-black min-h-screen text-white font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      <div className="pt-20">
        <Catalog />
      </div>
      <Footer />
    </main>
  );
}
