import React from "react";
import Image from "next/image";

const Kitchen = () => {
  return (
    <div className="w-full px-6 md:px-12 py-10">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
        <Image
          src="/kitchen.jpg"
          alt="Modern Green Kitchen Inspiration"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>
    </div>
  );
};

export default Kitchen;
