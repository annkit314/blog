import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const posts = [
  {
    title: "The Architecture of Stillness: Finding Space in Chaos",
    desc: "Exploring how minimalist spaces influence our internal psychological state.",
    category: "Art & Design",
    read: "12 min read",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Wabi-Sabi and the Modern Maker",
    desc: "Why imperfection is becoming the new luxury.",
    category: "Craftsmanship",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    title: "The Lost Art of Deep Reading",
    desc: "Reclaiming focus in the age of scrolling.",
    category: "Literature",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Postcards from Naoshima",
    desc: "A journey through Japan’s art island.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "The Quiet Intelligence of Plants",
    desc: "Exploring plant communication systems.",
    category: "Science",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c]">

      {/* 🔷 NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <h1 className="font-serif text-xl italic">Coinlooty</h1>

          <nav className="hidden md:flex gap-10 text-sm font-serif">
            <a className="border-b border-black pb-1">Home</a>
            <a className="text-zinc-500 hover:text-black">Categories</a>
            <a className="text-zinc-500 hover:text-black">About</a>
          </nav>

          <CiSearch/>
        </div>
      </header>

      <main className="pt-24">

        {/* 🔷 HERO */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
              Editorial Vol. 01
            </span>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
              Welcome to <span className="italic">The Silent Editor</span>: Curated stories for the curious mind
            </h1>

            <p className="text-zinc-600 mb-8 max-w-md">
              A digital monograph exploring art, culture, and slow living.
            </p>

            <button className="bg-[#16342d] text-white px-6 py-3 text-sm rounded">
              Explore Featured
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={posts[0].image}
                alt=""
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white p-6 shadow text-sm italic font-serif max-w-xs">
              “The beauty of silence is that it allows the story to speak.”
            </div>
          </div>
        </section>

        {/* 🔷 ARCHIVE */}
        <section className="bg-[#f3f3f3] py-20 px-8">
          <div className="max-w-7xl mx-auto">

            <div className="flex justify-between mb-12">
              <div>
                <h2 className="font-serif text-2xl">The Archive</h2>
                <p className="text-zinc-500 text-sm">Selected writings</p>
              </div>
              <a className="text-xs uppercase tracking-widest">View All →</a>
            </div>

            <div className="grid md:grid-cols-12 gap-8">

              {/* BIG POST */}
              <div className="md:col-span-8 bg-white rounded-lg overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video">
                  <Image
                    src={posts[0].image}
                    alt=""
                    width={800}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="p-8">
                  <p className="text-xs uppercase text-zinc-500 mb-2">
                    {posts[0].category} • {posts[0].read}
                  </p>

                  <h3 className="font-serif text-3xl mb-4">
                    {posts[0].title}
                  </h3>

                  <p className="text-zinc-600 mb-6">
                    {posts[0].desc}
                  </p>

                  <span className="border-b text-sm">Read More</span>
                </div>
              </div>

              {/* SIDE */}
              <div className="md:col-span-4 flex flex-col gap-8">
                {posts.slice(1, 2).map((post, i) => (
                  <div key={i} className="bg-white rounded-lg overflow-hidden">
                    <div className="aspect-square">
                      <Image src={post.image} alt="" width={400} height={400} className="object-cover w-full h-full" />
                    </div>

                    <div className="p-6">
                      <p className="text-xs uppercase text-zinc-500 mb-2">
                        {post.category}
                      </p>

                      <h3 className="font-serif text-xl mb-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-zinc-600">
                        {post.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* SMALL GRID */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {posts.slice(2).map((post, i) => (
                <div key={i} className="bg-white p-4 rounded-lg">
                  <div className="aspect-[4/3] mb-4 overflow-hidden">
                    <Image src={post.image} alt="" width={400} height={300} className="object-cover w-full h-full" />
                  </div>

                  <p className="text-xs uppercase text-zinc-500 mb-2">
                    {post.category}
                  </p>

                  <h3 className="font-serif text-lg mb-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-zinc-600">
                    {post.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 🔷 NEWSLETTER */}
        <section className="bg-[#16342d] text-white py-20 text-center px-8">
          <h2 className="font-serif text-3xl mb-4">
            The Saturday Letter
          </h2>

          <p className="text-sm text-zinc-300 mb-8">
            Weekly curated insights delivered to your inbox.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input className="flex-1 px-4 py-3 text-black" placeholder="Email address" />
            <button className="bg-white text-black px-6 py-3 text-sm">
              Subscribe
            </button>
          </div>
        </section>

      </main>

      {/* 🔷 FOOTER */}
      <footer className="bg-white border-t py-10 text-center text-sm text-zinc-500">
        © 2024 The Silent Editor
      </footer>
    </div>
  );
}