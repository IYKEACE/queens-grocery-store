import Image from "next/image";
import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import Footer from "@/component/Footer";
import Product from "@/component/Product";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <Product />
        <Footer />
      </main>
    </div>
  );
}
