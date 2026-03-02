import Image from "next/image";
import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import Footer from "@/component/Footer";
import Product from "@/component/Product";
import ProductCards from "@/component/ProductList";
import Kitchen from "@/component/Kitchen";
import Materials from "@/component/Materials";
import Category from "@/component/Category";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <HeroSection />
        <Product />
        <ProductCards/>
        <Kitchen />
        <Materials />
        <Category />
        <Footer />
      </main>
    </div>
  );
}
