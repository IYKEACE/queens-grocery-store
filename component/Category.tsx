"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { CATEGORIES } from "@/data/Categories";
import { LuSparkle } from "react-icons/lu";

const Category = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleScroll = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth + 24; // Width + gap
        const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector("div");
      if (card) {
        const cardWidth = card.offsetWidth + 24;
        scrollRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="px-6 md:px-12 py-16 bg-white relative">
      <div className="mb-5">
        <p className="text-gray-400 text-xl mb-2">
          Explore our thoughtful and
        </p>
        <h2 className="text-4xl md:text-4xl font-serif flex flex-col md:flex-row md:items-center gap-x-4 leading-none">
          <span className="text-gray-400">planet-first</span>
          <span className="inline-flex items-center gap-2 italic font-light text-black">
            <LuSparkle className="text-black-300 w-6 h-6 rotate-12" />
            <span className="lowercase">Categories</span>
          </span>
        </h2>
      </div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
      >
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="relative flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[23.5%] aspect-[3/4.5] rounded-[3rem] overflow-hidden cursor-pointer snap-start"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] font-light mb-1 opacity-80">
                Explore
              </span>
              <h3 className="text-2xl font-serif italic mb-6">{cat.name}</h3>
              <button className="bg-[#FEFCE8] text-black px-5 py-2 rounded-full flex items-center gap-2 text-[10px] uppercase font-bold tracking-tighter hover:bg-[#0A4235] hover:text-white transition-all">
                Shop <FiArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. The 3 Rounded Circles (Pagination Dots) */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {/* We map 3 dots as requested */}
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`transition-all duration-500 rounded-full h-2 ${
              activeIndex === i
                ? "w-10 bg-black" // Active pill
                : "w-2 bg-gray-200 hover:bg-gray-400" // Inactive dot
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
