import React from "react";
import { LuSparkle } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";

const ProductHeader = () => {
  return (
    <div className="flex flex-col md:flex-row mt-16 justify-between items-end px-6 md:px-12 gap-4 mb-12">
      <div>
        <p className="text-gray-500 uppercase tracking-widest text-xs mb-2">
          Eco Essentials Planet-Friendly
        </p>
        <h2 className="text-3xl md:text-4xl font-serif flex items-center gap-3">
          Bestselling
          <span className="inline-flex items-center gap-2 italic font-light">
            <LuSparkle className="text-yellow-600 w-5 h-5" />
            Products
          </span>
        </h2>
      </div>
      <div className="group cursor-pointer flex items-center gap-2 border-b border-black pb-1">
        <span className="text-sm font-medium">More products</span>
        <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  );
};

export default ProductHeader;
