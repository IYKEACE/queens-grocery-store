"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CATEGORIES } from "@/data/Categories";
import { LuSparkle } from "react-icons/lu";

const Category = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - 350 : scrollLeft + 350;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="px-6 md:px-12 py-16 bg-white relative group/section">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-gray-500 tracking-widest text-xl mb-2">
            Explore our thoughtful and
          </p>
          <h2 className="text-2xl md:text-4xl font-serif flex flex-col md:flex-row md:items-center gap-x-4 leading-none">
            <span className="text-gray-500">planet-first</span>
            <span className="inline-flex items-center gap-2 italic font-light">
              <LuSparkle className="text-black-600 w-5 h-5" />
              <span className="text-black-600"> Categories</span>
            </span>
          </h2>
        </div>

        {/* The Pagination Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white transition-all"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white transition-all"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* 2. The Scrolling Container */}
      {/* We change 'grid' to 'flex' and add 'overflow-x-auto' */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="relative flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[23.5%] aspect-[3/4.5] rounded-[3rem] overflow-hidden cursor-pointer scroll-snap-align-start"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] font-light mb-1">
                Explore
              </span>
              <h3 className="text-2xl font-serif italic mb-6">{cat.name}</h3>
              <button className="bg-[#FEFCE8] text-black px-5 py-2 rounded-full flex items-center gap-2 text-[10px] uppercase font-bold tracking-tighter">
                Shop <FiArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
