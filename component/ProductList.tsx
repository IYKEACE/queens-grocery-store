"use client";
import React, { useRef, useState } from "react";
import ProductCards from "./ProductCards";
import { PRODUCTS } from "@/data/Products";

const ProductList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(
        ".product-card-wrapper",
      ) as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth + 32; 
        const index = Math.round(scrollRef.current.scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(
        ".product-card-wrapper",
      ) as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        scrollRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="relative px-6 md:px-12 py-12">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
      >
        {PRODUCTS.map((item) => (
          <div
            key={item.id}
            className="product-card-wrapper flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[23%] snap-start"
          >
            <ProductCards product={item} />
          </div>
        ))}
      </div>

      {/* 3. The 3 Rounded Circles (Pagination Dots) */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`transition-all duration-500 rounded-full h-2 ${
              activeIndex === i
                ? "w-10 bg-black"
                : "w-2 bg-gray-200 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
