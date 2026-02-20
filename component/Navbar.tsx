"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 text-white">
      <div className="md:hidden">
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <ul className="hidden md:flex gap-8 font-light">
        <li className="hover:opacity-70 cursor-pointer">Shop</li>
        <li className="hover:opacity-70 cursor-pointer">Bestsellers</li>
        <li className="hover:opacity-70 cursor-pointer">Gallery</li>
        <li className="hover:opacity-70 cursor-pointer">About</li>
      </ul>
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-serif italic tracking-tight">
          Homedine
        </h1>
      </div>

      {/* RIGHT SECTION: Search & Icons */}
      <div className="flex items-center gap-3 md:gap-6">
        {/* Search Input: Hidden on mobile, shows only as icon */}
        <div className="relative hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search Product..."
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-2 px-6 pr-10 text-sm placeholder:text-white/70 outline-none w-48 lg:w-64 focus:w-80 transition-all"
          />
          <FiSearch className="absolute right-3 w-4 h-4 text-white/70" />
        </div>

        {/* Mobile Search Icon (Only visible on small screens) */}
        <FiSearch className="md:hidden text-xl" />

        <FiUser className="w-5 h-5 hidden md:block cursor-pointer hover:opacity-70" />

        <div className="relative">
          <FiShoppingBag className="w-5 h-5 cursor-pointer hover:opacity-70" />
          <span className="absolute -top-1 -right-1 bg-green-500 w-2 h-2 rounded-full"></span>
        </div>
      </div>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div
        className={`fixed inset-0 bg-black z-[100] flex flex-col p-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <FiX
          className="text-3xl self-end cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        <ul className="flex flex-col gap-8 mt-12 text-2xl font-serif italic">
          <li>Shop</li>
          <li>Bestsellers</li>
          <li>Gallery</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
