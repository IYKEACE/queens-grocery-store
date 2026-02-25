import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { Product } from "../data/Products";
interface ProductCardProps {
  product: Product;
}

const ProductCards = ({ product }: ProductCardProps) => {
  return (
    <div className="group flex flex-col gap-3 mb-">
      <div className="relative aspect-[4/5] bg-[#F3F3F1] rounded-2xl overflow-hidden p-8">
        {product.tag && (
          <span className="absolute z-10 top-4 left-4 bg-white/12 backdrop-blur-sm text-[10px] uppercase px-3 py-1 rounded-full font-medium border border-black/60 cursor-pointer text-black">
            {product.tag}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 mb-1">
          {product.colors.map((color: string, index: number) => (
            <div
              key={index}
              className="w-2.5 h-2.5 rounded-full border border-black/10"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        {/* <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </h3> */}
        <h3 className="text-sm font-medium text-gray-800 whitespace-pre-line">
          {product.name}
        </h3>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-lg">${product.price}</p>
          <button className="bg-[#0A4235] text-white p-2 px-5 rounded-full hover:bg-opacity-90 transition cursor-pointer flex gap-1">
            <span className="mt-1">
              <FiPlus />
            </span>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
