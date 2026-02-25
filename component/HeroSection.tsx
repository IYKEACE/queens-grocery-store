import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[820px] overflow-hidden bg-gray-900">
      <Image
        src="/green-kitchen2.jpg"
        alt="Green Kitchenware"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 pt-20 md:pt-12">
        <h2 className="text-4xl md:text-6xl text-white font-serif max-w-sm md:max-w-2xl leading-[1.1]">
          Eco-Friendly <span className="italic">Kitchenware</span> for
          <br className="hidden md:block" /> a greener home
        </h2>
        <p className="hidden sm:block text-base md:text-xl text-white/90 font-serif mt-6 max-w-md leading-relaxed">
          The Eco-friendly kitchen niche with a sense of urgency. Much like the
          original banner.
        </p>
        <button className="mt-8  flex  gap-2 bg-white text-black px-10 py-4 rounded-full w-full md:w-fit font-semibold hover:bg-opacity-90 transition-all uppercase text-sm tracking-widest group ">
          <span className="text-sm font-medium">Shop Now</span>
          <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
      <div className="hidden md:flex absolute bottom-45 right-12 lg:right-24 backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl text-white w-45 flex-col gap-4">
        <div className="justify-between items-start">
          <div className="text-[8px] uppercase tracking-[0.2em] leading-relaxed opacity-70">
            <p>Natural.</p>
            <p>Sustainable.</p>
            <p>Eco-conscious.</p>
          </div>
          <div className="text-6xl font-extralight leading-none mt-4">
            96<span className="text-xl font-thin">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
