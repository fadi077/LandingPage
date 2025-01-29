import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="mx-auto px-4 lg:px-16">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-bold text-xl text-gray-900">
              Webicient
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1">
            <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900" onClick={handleMenuClose}>
                Våra tjänster
              </Link>
              <Link to="/exempeljobb" className="text-gray-600 hover:text-gray-900" onClick={handleMenuClose}>
                Exempeljobb
              </Link>
              <Link to="/affarsmodell" className="text-gray-600 hover:text-gray-900" onClick={handleMenuClose}>
                Affärsmodell
              </Link>
              <Link to="/resurser" className="text-gray-600 hover:text-gray-900" onClick={handleMenuClose}>
                Resurser
              </Link>
              <Link to="/service" className="text-gray-600 hover:text-gray-900" onClick={handleMenuClose}>
                Service
              </Link>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <button className="bg-[#98f8e1] text-[#122229] px-6 py-2 rounded-md hover:bg-[#7de6cf] text-sm font-medium">
                Boka möte
              </button>
              <button className="text-[#122229] border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 text-sm font-medium">
                Logga in
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              aria-label="Toggle menu"
            >
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
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-2 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={handleMenuClose}>
              Våra tjänster
            </Link>
            <Link to="/exempeljobb" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={handleMenuClose}>
              Exempeljobb
            </Link>
            <Link to="/affarsmodell" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={handleMenuClose}>
              Affärsmodell
            </Link>
            <Link to="/resurser" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={handleMenuClose}>
              Resurser
            </Link>
            <Link to="/service" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md" onClick={handleMenuClose}>
              Service
            </Link>
            <div className="space-y-2 pt-2">
              <button className="w-full bg-[#98f8e1] text-black px-3 py-2 rounded-md hover:bg-[#7de6cf] text-sm font-medium text-left" onClick={handleMenuClose}>
                Boka möte
              </button>
              <button className="w-full border border-gray-300 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 text-sm font-medium text-left" onClick={handleMenuClose}>
                Logga in
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
