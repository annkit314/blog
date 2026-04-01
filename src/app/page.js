"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const posts = Array(9).fill({
  title: "The Impact of Technology on the Workplace: How Technology is Changing",
  category: "Technology",
  author: "Tracey Wilson",
  date: "August 20, 2022",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
});

const heroData = [
  {
    title: "How AI is Transforming the Future of Work",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Top Travel Destinations You Must Visit in 2026",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Building a Successful Startup from Scratch",
    category: "Business",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  {
    title: "Healthy Lifestyle Tips for a Better Life",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
];

export default function BlogPage() {
  const [current, setCurrent] = useState(0);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f7f7f7] text-[#1a1a1a] mt-[100px]">

      {/* 🔥 HERO SLIDER */}
      <section className="w-full mx-auto px-4 md:px-6 mt-[5px]">
        <div className="relative overflow-hidden rounded-lg">

          {/* SLIDES */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {heroData.map((item, i) => (
              <div key={i} className="min-w-full relative">
                <Image
                  src={item.image}
                  alt=""
                  width={1200}
                  height={600}
                  className="w-full h-[250px] md:h-[400px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10 text-white">

                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full w-fit mb-3">
                    {item.category}
                  </span>

                  <h2 className="text-lg md:text-3xl font-semibold max-w-xl leading-snug">
                    {item.title}
                  </h2>

                  <p className="text-sm mt-2 opacity-80">
                    Featured • 2026
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 🔷 DOT INDICATORS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {heroData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${current === i ? "bg-white scale-110" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 BLOG GRID */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300 group"
            >
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt=""
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-xs text-blue-600 mt-3 mb-1">
                {post.category}
              </p>

              <h3 className="font-semibold text-sm md:text-base mb-2 leading-snug group-hover:text-blue-600 transition">
                {post.title}
              </h3>

              <p className="text-xs text-gray-500">
                {post.author} • {post.date}
              </p>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <Link
          href="/blogs"
          className="flex justify-center mt-10"
        >
          <span className="bg-white px-6 py-2 rounded-full text-sm shadow hover:shadow-md transition cursor-pointer">
            View More
          </span>
        </Link>
      </section>

      {/* 🔥 AD BANNER */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-500 py-8 rounded-2xl text-center text-sm shadow-inner">
          Advertisement • 750x100
        </div>
      </section>

    </div>
  );
}