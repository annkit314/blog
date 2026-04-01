export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300">
      
      {/* 🔷 MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* 🔷 ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold">
              M
            </div>
            <span className="text-white font-semibold text-lg">MetaBlog</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Discover insights on technology, lifestyle, and business.  
            Stay updated with the latest trends and ideas.
          </p>

          <p className="text-xs text-gray-500">
            info@metablog.com <br />
            +91 9876543210
          </p>
        </div>

        {/* 🔷 LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Blog", "Contact"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔷 CATEGORY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-3 text-sm">
            {["Lifestyle", "Technology", "Travel", "Business"].map((item, i) => (
              <li
                key={i}
                className="hover:text-white transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔷 NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">
            Get the latest articles and updates straight to your inbox.
          </p>

          <div className="bg-white/5 backdrop-blur-md p-2 rounded-2xl flex items-center">
            <input
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-white placeholder-gray-400"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* 🔷 BOTTOM AREA */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-xs text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()} MetaBlog. All rights reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex gap-4 text-gray-400 text-sm">
          <span className="hover:text-white cursor-pointer">Twitter</span>
          <span className="hover:text-white cursor-pointer">LinkedIn</span>
          <span className="hover:text-white cursor-pointer">GitHub</span>
        </div>
      </div>
    </footer>
  );
}