"use client";

import { useParams } from "next/navigation";

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

export default function BlogDetails() {
    const params = useParams();
    const id = Number(params.id);

    const blog = blogs.find((b) => b.id === id);

    if (!blog) return <p className="p-10">Blog not found</p>;

    return (
        <div className="bg-gray-50 min-h-screen pt-[80px] pb-20">

            {/* 🔷 CONTAINER */}
            <div className="max-w-4xl mx-auto px-6">

                {/* 🔷 CATEGORY + DATE */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {blog.category || "Blog"}
                    </span>
                    <span>•</span>
                    <span>{blog.date || "March 2026"}</span>
                </div>

                {/* 🔷 TITLE */}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    {blog.title}
                </h1>

                {/* 🔷 DESCRIPTION */}
                <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                    {blog.desc}
                </p>

                {/* 🔷 FEATURE IMAGE */}
                <div className="w-full h-[280px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg mb-12">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        alt="blog"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* 🔷 ARTICLE CONTENT */}
                <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>

                    <h2>Why This Topic Matters</h2>

                    <p>
                        Understanding this topic helps you build a strong foundation and apply
                        practical knowledge in real-world situations.
                    </p>

                    {/* 🔷 INLINE IMAGE */}
                    <div className="my-8">
                        <img
                            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
                            className="rounded-2xl shadow-md"
                            alt="content"
                        />
                        <p className="text-sm text-gray-400 mt-2 text-center">
                            A visual representation of the concept
                        </p>
                    </div>

                    <p>
                        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
                        turpis et commodo pharetra.
                    </p>

                    <h2>Key Takeaways</h2>

                    <ul>
                        <li>Understand the fundamentals clearly</li>
                        <li>Apply practical examples</li>
                        <li>Stay consistent and keep learning</li>
                        <li>Focus on simplicity</li>
                    </ul>

                    <p>
                        Final thoughts: Always keep improving and adapting to new trends.
                    </p>
                </div>

                {/* 🔷 AUTHOR CARD */}
                <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                    <img
                        src="https://i.pravatar.cc/100"
                        className="w-14 h-14 rounded-full"
                        alt="author"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-900">John Doe</h4>
                        <p className="text-sm text-gray-500">
                            Writer & Content Creator
                        </p>
                    </div>
                </div>

                {/* 🔷 BACK BUTTON */}
                <div className="mt-12">
                    <a
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                    >
                        ← Back to Blogs
                    </a>
                </div>

            </div>
        </div>
    );
}