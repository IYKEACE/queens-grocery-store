"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/Gallery";
import { LuSparkle } from "react-icons/lu";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".gallery-card");
      if (card instanceof HTMLElement) {
        const index = Math.round(
          scrollRef.current.scrollLeft / (card.offsetWidth + 24),
        );
        setActiveIndex(index);
      }
    }
  };

  return (
    <section className="px-6 md:px-12 py-20 bg-white">
      {/* 1. Gallery Heading */}
      <div className="mb-12">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-2">
          Thoughtful, Planet-Prioritizing Ideas
        </p>
        <h2 className="text-4xl md:text-6xl font-serif flex flex-col md:flex-row md:items-center leading-none">
          <span className="text-gray-200 lowercase">and Inspiration</span>
          <span className="inline-flex items-center gap-2 italic font-light text-black md:ml-4">
            <LuSparkle className="text-gray-300 w-6 h-6 rotate-12" />
            <span className="lowercase">Gallery</span>
          </span>
        </h2>
      </div>

      {/* 2. The Mosaic Scrolling Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory items-end"
      >
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-card relative flex-shrink-0 snap-start group overflow-hidden rounded-[2rem] 
              ${index % 3 === 1 ? "w-[80%] md:w-[400px] aspect-[4/5]" : "w-[60%] md:w-[300px] aspect-square"} 
            `}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Dark Overlay for Text */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-500" />

            {/* The Floating Label (Bottom Left) */}
            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-sm font-serif italic mb-1">{item.name}</p>
              <div className="w-8 h-[1px] bg-white/50" />{" "}
              {/* Decorative line */}
            </div>
          </div>
        ))}
      </div>
      {/* 3. Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            className={`transition-all duration-500 rounded-full h-1.5 ${
              activeIndex === i ? "w-8 bg-black" : "w-1.5 bg-gray-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
