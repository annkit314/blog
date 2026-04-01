"use client";

import { useState } from "react";
import { useEffect } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);



  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* 🔷 LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-lg font-bold">
              M
            </div>
            <span className="font-semibold text-lg tracking-tight">
              MetaBlog
            </span>
          </div>

          {/* 🔷 DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            {["Home", "Blog", "Pages", "Contact"].map((item, i) => (
              <a
                key={i}
                className="relative group cursor-pointer transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* 🔷 RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">

            {/* SEARCH */}
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full focus-within:ring-2 focus-within:ring-blue-500 transition">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                placeholder="Search articles..."
                className="bg-transparent outline-none text-sm w-40"
              />
            </div>

            {/* CTA BUTTON */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition shadow-sm">
              Subscribe
            </button>
          </div>

          {/* 🔷 MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-700"
          >
            <FiMenu size={24} />
          </button>
        </div>




      </header>

      <div
        className={`fixed inset-0 z-[999] w-full h-[100vh] ${open ? "visible" : "invisible"
          }`}
      >
        {/* 🔷 OVERLAY */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 w-full h-[100vh] bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"
            }`}
        />

        <div
          className={`fixed top-0 left-0 w-full h-[100dvh] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${open ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          {/* 🔷 HEADER */}
          <div className="flex items-center justify-between px-5 py-5">
            <div>
              <p className="text-xs text-gray-400">Navigation</p>
              <h2 className="font-semibold text-lg text-gray-800">Menu</h2>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* 🔷 CONTENT */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">

            {/* NAV LINKS (CARD STYLE) */}
            <div className="bg-gray-50 rounded-2xl p-2 space-y-1 shadow-sm">
              {["Home", "Blog", "Pages", "Contact"].map((item, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-4 py-1 rounded-xl cursor-pointer transition hover:bg-white hover:shadow-sm"
                >
                  <span className="font-medium text-gray-700 group-hover:text-blue-600">
                    {item}
                  </span>

                  <span className="text-gray-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              ))}
            </div>

            {/* 🔷 SEARCH */}
            <div className="bg-gray-50 p-3 rounded-2xl shadow-sm">
              <div className="flex items-center bg-white px-4 py-3 rounded-xl focus-within:ring-2 focus-within:ring-blue-500">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                  placeholder="Search articles..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>

            {/* 🔷 EXPLORE (NO BORDER, JUST SPACING) */}
            <div>
              <p className="text-xs text-gray-400 uppercase mb-3">Explore</p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition">
                  Trending
                </div>
                <div className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition">
                  Categories
                </div>
                <div className="px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition">
                  Authors
                </div>
              </div>
            </div>
          </div>

          {/* 🔷 FOOTER CTA (FLOAT STYLE) */}
          <div className="p-5">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-medium transition shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}