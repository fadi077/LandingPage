import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking a link
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4 md:px-16">
        {/* Top Navbar Row */}
        <div className="flex justify-between items-center gap-x-6 w-full h-[8vh]">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-extrabold text-gray-900 text-xl md:text-2xl lg:text-3xl">
              Webicient
            </span>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-6 md:space-x-8 text-[100%]">
            <a href="#!" className="text-gray-700 hover:text-gray-900">
              Våra tjänster
            </a>
            <a href="#!" className="text-gray-700 hover:text-gray-900">
              Exempeljobb
            </a>
            <a href="#!" className="text-gray-700 hover:text-gray-900">
              Affärsmodell
            </a>
            <a href="#!" className="text-gray-700 hover:text-gray-900">
              Resurser
            </a>
            <a href="service" className="text-gray-700 hover:text-gray-900">
              Service
            </a>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden md:flex space-x-3 lg:space-x-4 text-[100%]  ">
            <button className="bg-teal-300 text-black px-6 md:px-8 lg:px-10 py-2 rounded-md hover:bg-teal-400">
              Boka möte
            </button>

            <button className="border border-gray-500 text-[#122229] px-4 md:px-5 py-2 rounded-md hover:bg-gray-100">
              Logga in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Hamburger icon (open/close) */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 text-base sm:text-lg">
            {[
              "Våra tjänster",
              "Exempeljobb",
              "Affärsmodell",
              "Resurser",
              "Service",
            ].map((item, index) => (
              <a
                key={index}
                href="#!"
                onClick={handleMenuClick}
                className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}

            <div className="text-[10%]">
              <button
                onClick={handleMenuClick}
                className="block w-full text-left bg-teal-300 text-black px-3 py-2 rounded-md hover:bg-teal-400"
              >
                Boka möte
              </button>
              <button
                onClick={handleMenuClick}
                className="block w-full text-left border border-gray-500 text-[#122229] px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Logga in
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}