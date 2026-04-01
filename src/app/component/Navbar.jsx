"use client";

import { useState } from "react";
import { useEffect } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Newsletters", path: "/newsletters" },
    { name: "About", path: "/about" },
  ];



  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">

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
            <Link
              href="/"
              className={`relative group transition ${pathname === "/" ? "text-blue-600" : ""
                }`}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>

            <Link
              href="/blogs"
              className={`relative group transition ${pathname === "/blogs" ? "text-blue-600" : ""
                }`}
            >
              Blogs
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${pathname === "/blogs" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>

            <Link
              href="/newsletters"
              className={`relative group transition ${pathname === "/newsletters" ? "text-blue-600" : ""
                }`}
            >
              Newsletters
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${pathname === "/newsletters" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>

            <Link
              href="/about"
              className={`relative group transition ${pathname === "/about" ? "text-blue-600" : ""
                }`}
            >
              About us
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
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
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between px-4 py-3 rounded-xl transition ${pathname === item.path
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-700 hover:bg-white hover:shadow-sm"
                    }`}
                >
                  <span className="font-medium">
                    {item.name}
                  </span>

                  <span className="text-gray-400 group-hover:translate-x-1 transition">
                    →
                  </span>
                </Link>
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