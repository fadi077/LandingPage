import React from "react";
import { Link } from "react-router-dom"; // Import Link for React Router
import { Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F6F6F6] px-4 pt-16 pb-8 mt-14 relative">
      <div className="max-w-7xl mx-auto">
        {/* Top row: Brand + Social Icons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          {/* Brand */}
          <h2
            className="
              text-6xl
              font-extrabold
              text-gray-200
              tracking-wide
              uppercase
              underline
              decoration-4
              decoration-gray-200
              underline-offset-8
            "
          >
            WEBICIENT
          </h2>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <Link
              to="#"
              className="bg-black p-3 text-white flex items-center justify-center"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-black p-3 text-white text-sm flex items-center justify-center font-bold"
              aria-label="X"
            >
              X
            </Link>
            <Link
              to="#"
              className="bg-[#3FF0C7] p-3 text-white flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-black p-3 text-white flex items-center justify-center"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Kreativa tjänster</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="#" className="underline font-medium">
                  Webb- & Appdesign (UI/UX)
                </Link>
              </li>
              <li>Presentation</li>
              <li>Branding</li>
              <li>Sociala medier</li>
              <li>E-bok design</li>
              <li>Grafisk design</li>
              <li>Merch & förpackning</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Tekniska tjänster</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="#" className="underline font-medium">
                  Webb- & Apputveckling
                </Link>
              </li>
              <li>AI Lösningar</li>
              <li>Integration</li>
              <li>Teknisk rådgivning</li>
              <li>Support & hosting</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Övriga tjänster</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="#" className="underline font-medium">
                  Exempeljobb
                </Link>
              </li>
              <li>Om oss</li>
              <li>Resurser</li>
              <li>Digitaliseringsskolan</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            © WEBICIENT 2025 All Rights Reserved
          </p>
          <Link to="#" className="text-sm px-16 text-gray-600 hover:underline">
            Integritetspolicy
          </Link>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
