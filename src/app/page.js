import Image from "next/image";

const posts = Array(9).fill({
  title: "The Impact of Technology on the Workplace: How Technology is Changing",
  category: "Technology",
  author: "Tracey Wilson",
  date: "August 20, 2022",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
});

export default function BlogPage() {
  return (
    <div className="bg-[#f7f7f7] text-[#1a1a1a]">

      {/* 🔷 NAVBAR */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">MetaBlog</h1>

          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a>Home</a>
            <a className="text-black font-medium">Blog</a>
            <a>Single Post</a>
            <a>Pages</a>
            <a>Contact</a>
          </nav>

          <input
            placeholder="Search"
            className="border px-3 py-1 text-sm rounded-md"
          />
        </div>
      </header>

      {/* 🔷 PAGE TITLE */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Page Title</h2>
        <p className="text-sm text-gray-500 mt-2">Home • Link One</p>
      </section>

      {/* 🔷 HERO */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt=""
            width={1000}
            height={500}
            className="w-full h-[300px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
            <span className="text-xs bg-blue-600 px-2 py-1 w-fit rounded mb-2">
              Technology
            </span>

            <h3 className="text-xl md:text-2xl font-semibold max-w-lg">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h3>

            <p className="text-sm mt-2 opacity-80">
              Tracey Wilson • August 20, 2022
            </p>
          </div>
        </div>
      </section>

      {/* 🔷 BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition">

              <Image
                src={post.image}
                alt=""
                width={400}
                height={250}
                className="rounded-lg w-full h-[180px] object-cover mb-4"
              />

              <p className="text-xs text-blue-600 mb-1">
                {post.category}
              </p>

              <h3 className="font-semibold text-sm mb-2 leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-gray-500">
                {post.author} • {post.date}
              </p>
            </div>
          ))}

        </div>

        {/* LOAD MORE */}
        <div className="flex justify-center mt-10">
          <button className="border px-6 py-2 rounded-md text-sm hover:bg-gray-100">
            Load More
          </button>
        </div>
      </section>

      {/* 🔷 AD BANNER */}
      <section className="max-w-3xl mx-auto text-center py-6">
        <div className="bg-gray-200 text-gray-500 py-6 rounded-md text-sm">
          Advertisement <br /> You can place ads <br /> 750x100
        </div>
      </section>

      {/* 🔷 FOOTER */}
      <footer className="bg-white mt-16 border-t">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10 text-sm">

          {/* ABOUT */}
          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <p className="text-gray-600 mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-500 text-xs">
              Email: info@jstemplate.net <br />
              Phone: 880123456789
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="font-semibold mb-3">Quick Link</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* CATEGORY */}
          <div>
            <h4 className="font-semibold mb-3">Category</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Lifestyle</li>
              <li>Technology</li>
              <li>Travel</li>
              <li>Business</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-3">Weekly Newsletter</h4>
            <p className="text-gray-600 text-xs mb-3">
              Get blog articles and offers via email
            </p>

            <input
              placeholder="Your Email"
              className="w-full border px-3 py-2 mb-2 text-sm rounded"
            />

            <button className="w-full bg-blue-600 text-white py-2 text-sm rounded">
              Subscribe
            </button>
          </div>

        </div>

        <div className="text-center text-xs text-gray-500 pb-6">
          © JS Template 2023. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}