import React from "react";
import Image from "next/image";

const Kitchen = () => {
  return (
    <div className="px-6 md:px-12 py-10">
      <div className="relative w-full h-[60vh] md:h-[600px] overflow-hidden rounded-[1.5rem] md:rounded-[4rem]">
        <Image
          src="/kitchenss.jpeg"
          alt="Modern Green Kitchen Inspiration"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-20">
          <h2 className="text-2xl md:text-4xl text-white font-serif max-w-3xl leading-[1.3] tracking-tight">
            We Craft <span className="italic">Kitchenware</span> you can trust
            for years to <br className="hidden md:block" /> come — through
            everyday meal and <span className="italic">evolving</span>
            <br className="hidden md:block" />
            <span className="italic">lifestyles</span>. Each piece is
            thoughtfully made with <br className="hidden md:block" />
            <span className="italic font-light">sustainable materials</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
