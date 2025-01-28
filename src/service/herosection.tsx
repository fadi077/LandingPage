import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[70vh]">
      {/* Left Section: Text & Button */}
      <div className="bg-[#F3FBFF] flex flex-col justify-center px-6 md:px-12 pl-30 lg:px-30 max-w-2xl mx-auto py-12">
        <p className="text-[#7CF5D5] inline-block bg-black px-4 py-1.5 mb-3 text-xs tracking-wider font-medium uppercase w-fit">
          Hem / Våra tjänster / Webb- & Apputveckling
        </p>
        <h1 className="text-3xl md:text-3xl font-extrabold text-black leading-tight">
          Webb- & Apputveckling
        </h1>
        <p className="text-gray-700 text-xs leading-relaxed mt-4">
          Förvandla dina idéer till funktionella och användarvänliga digitala lösningar med vår expertis inom webb- och apputveckling. Genom vår prenumeration 
          stjänst får du tillgång till alla våra utvecklingstjänster, snabbt och smidigt.
        </p>
        <button className="bg-[#7CF5D5] hover:bg-[#63dac1] text-black font-semibold px-6 py-3 mt-6 w-fit
          transition duration-300 text-sm shadow-md">
          Kom igång
        </button>
      </div>

      {/* Right Section: Image with Full Background */}
      <div className="relative flex justify-start pl-20 items-center bg-[#D6E7F0]">
        <img
          src="/Laptop_service.png"
          alt="Laptop showing development environment"
          className="relative max-w-md w-1/2 h-auto z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;