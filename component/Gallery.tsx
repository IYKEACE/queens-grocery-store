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
      <div className="mb-5">
        <p className="text-gray-400 text-xl mb-2">
          Thoughtful, Planet-Prioritizing Ideas
        </p>
        <h2 className="text-4xl md:text-4xl font-serif flex flex-col md:flex-row md:items-center gap-x-4 leading-none">
          <span className="text-gray-400">and Inspiration</span>
          <span className="inline-flex items-center gap-2 italic font-light text-black">
            <LuSparkle className="text-black-300 w-6 h-6 rotate-12" />
            <span>Gallery</span>
          </span>
        </h2>
      </div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory items-start"
      >
        {GALLERY_ITEMS.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-card relative flex-shrink-0 snap-start group overflow-hidden rounded-[2.5rem] transition-all duration-700
              ${
                index === 0 || index === 2
                  ? "w-[65%] md:w-[300px] h-[300px] md:h-[350px]" // 1st and 3rd are shorter
                  : "w-[80%] md:w-[420px] h-[400px] md:h-[550px]" // 2nd (and others) are taller
              } 
            `}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Minimalist Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Bottom-aligned text for that Gallery look */}
            <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-sm font-serif italic tracking-wide">
                {item.name}
              </p>
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
