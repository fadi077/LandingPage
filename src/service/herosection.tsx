import React from 'react';
import Logo from "../components/Logo";

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className="bg-[#F8FCFF] pt-4 pb-6">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Column */}
            <div>
            <p className="text-[#31CFB4] inline-block bg-black px-4 py-1.5 mb-2 text-xs tracking-wider font-medium uppercase">
              HEM / VÅRA TJÄNSTER / WEBB- & APPUTVECKLING
            </p>
              <h1 className="text-3xl md:text-4xl font-bold mt-3 text-black">
                Webb- & Apputveckling
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-4 max-w-xl w-[90%]">
                Förvandla dina idéer till funktionella och användarvänliga digitala lösningar 
                med vår expertis inom webb- och apputveckling. Genom vår prenumeration
                tjänst får du tillgång till alla våra utvecklingstjänster, snabbt och smidigt.
              </p>
              <button className="bg-[#31CFB4] hover:bg-[#26B19A] text-black font-medium px-6 py-2 rounded-md 
                transition duration-300 text-sm">
                Kom igång
              </button>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="relative w-[350px] max-w-full">
                <img
                  src="/Laptop_service.png"
                  alt="Laptop showing development environment"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Logo />
    </div>
  );
};

export default HeroSection;