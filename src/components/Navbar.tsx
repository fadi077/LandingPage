 
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4">
        {/* Top Navbar Row */}
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              Webicient
            </span>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
          <div className="hidden md:flex space-x-4">
            <button className="bg-teal-300 text-black px-4 py-2 rounded hover:bg-teal-400">
              Boka möte
            </button>
            <button className="border border-gray-500 text-[#122229] px-4 py-2 rounded hover:bg-gray-100">
              Logga in
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {/* Hamburger icon (open/close) */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Menu open (X) */}
                <path
                  className={menuOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                {/* Menu closed (Hamburger) */}
                <path
                  className={menuOpen ? "hidden" : "block"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#!"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Våra tjänster
            </a>
            <a
              href="#!"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Exempeljobb
            </a>
            <a
              href="#!"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Affärsmodell
            </a>
            <a
              href="#!"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Resurser
            </a>
            <a
              href="/Service"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Service
            </a>

            <button className="block w-full text-left hover:bg-teal-400 text-black px-3 py-2 rounded-md">
              Boka möte
            </button>
            <button className="block w-full text-left hover:bg-teal-400 text-[#122229] px-3 py-2 rounded-md hover:bg-gray-100">
              Logga in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
