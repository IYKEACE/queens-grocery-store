import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { CATEGORIES } from "@/data/Categories";
import { LuSparkle } from "react-icons/lu";

const Category = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-white">
      <div className="mb-4">
        <p className="text-gray-500 tracking-widest text-xl mb-2">
          Explore our thoughtful and
        </p>
        <h2 className="text-xl md:text-2xl font-serif flex items-center gap-3">
          <span className="text-gray-500">Planet-first</span>
          <span className="inline-flex items-center gap-2 italic font-light">
            <LuSparkle className="text-black-600 w-5 h-5" />
            Categories
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden cursor-pointer"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white">
              <p className="text-xs uppercase tracking-widest opacity-80 mb-2">
                Explore
              </p>
              <h3 className="text-2xl font-serif mb-6 italic tracking-wide">
                {cat.name}
              </h3>
              <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-tighter hover:bg-[#0A4235] hover:text-white transition-all duration-300">
                Shop{" "}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
