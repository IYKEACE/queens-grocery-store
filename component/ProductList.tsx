import React from "react";
import ProductCards from "./ProductCards";
import { PRODUCTS } from "@/data/Products";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ProductList = () => {
  return (
    <div className="relative px-6 md:px-12 py-12 group">
      <button className="absolute left-8 top-[35%] z-30 ... cursor-pointer bg-white p-2 rounded-full opacity-80 hover:opacity-100 transition">
        <FiChevronLeft />
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((item) => (
          <ProductCards key={item.id} product={item} />
        ))}
      </div>
      <button className="absolute right-8 top-[35%] z-30 ... cursor-pointer bg-white p-2 rounded-full opacity-80 hover:opacity-100 transition">
        <FiChevronRight />
      </button>
    </div>
  );
};

export default ProductList;
