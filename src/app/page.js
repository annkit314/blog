import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white">
      
      {/* 🔹 Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">MyBlog</h1>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Blogs</a>
          <a href="#" className="hover:text-blue-500">About</a>
        </div>
      </nav>

      {/* 🔹 Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Discover Stories, Ideas & Inspiration
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            A modern blog platform where you can explore articles about tech,
            design, startups and more.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Start Reading
          </button>
        </div>

        <Image
          src="/next.svg"
          alt="hero"
          width={400}
          height={300}
          className="mx-auto"
        />
      </section>

      {/* 🔹 Featured Blogs */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-8">Featured Posts</h3>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">
              Building Modern Web Apps
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Learn how to build scalable web apps using Next.js and modern tools.
            </p>
            <button className="text-blue-500 text-sm font-medium">
              Read More →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">
              UI/UX Design Trends 2026
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Explore the latest UI trends that are shaping digital products.
            </p>
            <button className="text-blue-500 text-sm font-medium">
              Read More →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-5 hover:shadow-lg transition">
            <h4 className="text-lg font-semibold mb-2">
              Startup Growth Strategies
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Practical tips to grow your startup in a competitive market.
            </p>
            <button className="text-blue-500 text-sm font-medium">
              Read More →
            </button>
          </div>

        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12 py-6 text-center text-sm text-zinc-500">
        © 2026 MyBlog. All rights reserved.
      </footer>

    </div>
  );
}