"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "10 Healthy Morning Habits to Start Your Day",
        desc: "Boost your energy and productivity with simple morning routines backed by science.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        category: "Health",
        date: "March 20, 2026",
    },
    {
        id: 2,
        title: "Easy 15-Minute Recipes for Busy People",
        desc: "Quick and delicious meals you can prepare even on your busiest days.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
        category: "Food",
        date: "March 18, 2026",
    },
    {
        id: 3,
        title: "Top Travel Destinations for 2026",
        desc: "Discover the most beautiful and trending travel spots around the world.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        category: "Travel",
        date: "March 15, 2026",
    },
    {
        id: 4,
        title: "How to Save Money Effectively",
        desc: "Smart strategies to build savings without sacrificing your lifestyle.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        category: "Finance",
        date: "March 12, 2026",
    },
    {
        id: 5,
        title: "Meditation for Beginners",
        desc: "A simple guide to start meditation and improve mental clarity.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        category: "Wellness",
        date: "March 10, 2026",
    },
    {
        id: 6,
        title: "Best Street Foods Around the World",
        desc: "Explore delicious street foods that define cultures globally.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        category: "Food",
        date: "March 8, 2026",
    },
    {
        id: 7,
        title: "Work From Home Productivity Tips",
        desc: "Stay focused and productive while working remotely.",
        image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
        category: "Productivity",
        date: "March 5, 2026",
    },
    {
        id: 8,
        title: "Fitness Myths You Should Stop Believing",
        desc: "Debunking common fitness misconceptions with real facts.",
        image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1",
        category: "Fitness",
        date: "March 2, 2026",
    },
    {
        id: 9,
        title: "Minimalist Living: A Complete Guide",
        desc: "Simplify your life and focus on what truly matters.",
        image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
        category: "Lifestyle",
        date: "February 28, 2026",
    },
    {
        id: 10,
        title: "How to Build Better Relationships",
        desc: "Improve communication and strengthen your connections.",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
        category: "Relationships",
        date: "February 26, 2026",
    },
    {
        id: 11,
        title: "Top Superfoods You Should Add to Your Diet",
        desc: "Nutrient-rich foods that can improve your overall health.",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        category: "Health",
        date: "February 24, 2026",
    },
    {
        id: 12,
        title: "Solo Travel Tips for Beginners",
        desc: "Everything you need to know before your first solo trip.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        category: "Travel",
        date: "February 22, 2026",
    },
    {
        id: 13,
        title: "Side Hustle Ideas to Earn Extra Income",
        desc: "Explore creative ways to make money outside your main job.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        category: "Finance",
        date: "February 20, 2026",
    },
    {
        id: 14,
        title: "The Science of Good Sleep",
        desc: "Learn how to improve your sleep quality and wake up refreshed.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        category: "Health",
        date: "February 18, 2026",
    },
    {
        id: 15,
        title: "Declutter Your Home in 7 Days",
        desc: "A step-by-step plan to organize and simplify your space.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        category: "Lifestyle",
        date: "February 15, 2026",
    },
];

export default function BlogsPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 mt-[70px]">

            {/* 🔷 HEADER */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Latest Blogs
                </h1>
                <p className="text-gray-500 mt-2">
                    Explore insights, tutorials, and trends
                </p>
            </div>

            {/* 🔷 GRID */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
                    >

                        {/* IMAGE */}
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 space-y-3">

                            {/* CATEGORY */}
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {blog.category}
                            </span>

                            {/* TITLE */}
                            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {blog.title}
                            </h2>

                            {/* DESC */}
                            <p className="text-sm text-gray-500 line-clamp-2">
                                {blog.desc}
                            </p>

                            {/* FOOTER */}
                            <div className="flex items-center justify-between pt-3">
                                <span className="text-xs text-gray-400">
                                    {blog.date}
                                </span>

                                <Link href={`/blogs/${blog.id}`}>
                                    <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                                        Read more →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}