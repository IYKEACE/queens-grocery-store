import React from "react";
import { FiWind, FiGlobe, FiTarget } from "react-icons/fi";

const Materials = () => {
  const features = [
    { icon: <FiWind />, title: "Natural", subtitle: "Finish" },
    { icon: <FiGlobe />, title: "Eco", subtitle: "Innovation" },
    { icon: <FiTarget />, title: "Sustainable", subtitle: "Materials" },
  ];
  return (
    <div className="px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#F3F3F1] rounded-[2rem] p-8 flex items-center justify-center gap-4 transition-transform hover:scale-[1.02] cursor-default"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0A4235] text-xl shadow-sm">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-medium leading-tight">
                {item.title}
              </span>
              <span className="text-gray-500 italic text-sm font-serif">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materials;
