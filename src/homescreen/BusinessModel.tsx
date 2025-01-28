function BusinessModel() {
  return (
    <div>
      <section className="py-16 px-4 bg-white border-t border-gray-300">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1A2B3B] text-[#7CF5D5] text-xs font-medium tracking-wide px-4 py-1 mb-4">
              AFFÄRSMODELL
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tre sätt vi jobbar på
            </h2>
            <p className="text-gray-600">
              Skräddarsydda projekt, löpande arbete eller en konsult som blir en
              del av ditt team. Valet är ditt.
            </p>
          </div>

          {/* First Row: Projekt & Prenumeration */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Projekt */}
            <div className="flex flex-col h-full p-4 border-white rounded-md">
              {/* Top Section */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-center md:text-left">
                  Projekt
                </h3>
                <p className="text-gray-600 mb-4 text-center md:text-left">
                  Behöver ni hjälp med ett specifikt projekt? Vi tar hand om allt
                  från start till leverans – enkelt, smidigt och helt anpassat
                  efter era behov.
                </p>
                {/* Buttons */}
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="bg-[#7CF5D5] hover:bg-[#5BE3C0] text-black font-medium px-6 py-2 rounded transition duration-300">
                    Kom igång
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-black font-medium px-6 py-2 rounded transition duration-300">
                    Läs mer
                  </button>
                </div>
              </div>
              {/* Image at bottom */}
              <div className="mt-auto">
                <img
                  src="/webprojekt.png"
                  alt="Project Dashboard"
                  className="w-full h-auto mt-4"
                />
              </div>
            </div>

            {/* Card 2: Prenumeration */}
            <div className="flex flex-col h-full p-4 rounded-md">
              {/* Top Section */}
              <div>
                <h3 className="text-xl font-bold mb-2 text-center md:text-left">
                  Prenumeration
                </h3>
                <p className="text-gray-600 mb-4 text-center md:text-left">
                  Flexibelt samarbete med en timbank som täcker både kreativa och
                  tekniska behov – perfekt för företag som vill ha ett nära,
                  snabbt och effektivt samarbete.
                </p>
                {/* Buttons */}
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="bg-[#7CF5D5] hover:bg-[#5BE3C0] text-black font-medium px-6 py-2 rounded transition duration-300">
                    Kom igång
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-black font-medium px-6 py-2 rounded transition duration-300">
                    Läs mer
                  </button>
                </div>
              </div>
              {/* Image at bottom */}
              <div className="mt-auto">
                <img
                  src="/subscription_dashboard.png"
                  alt="Subscription Dashboard"
                  className="w-full h-auto mt-4"
                />
              </div>
            </div>
          </div>

          {/* Second Row: Now treat Konsulter as TWO cards for equal height */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch">
            {/* Card 3: Konsulter (Text) */}
            <div className="flex flex-col items-center md:items-start justify-center h-full p-6 bg-[#FFFFFF] rounded-md">
              <h3 className="text-xl font-bold mb-4">Konsulter</h3>
              <p className="text-gray-600 mb-6 text-center md:text-start">
                Stärk ert team med experter på era villkor – tekniska eller
                kreativa konsulter som matchar er perfekt och levererar
                resultat direkt.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#7CF5D5] hover:bg-[#5BE3C0] text-black font-medium px-6 py-2 rounded transition duration-300">
                  Kom igång
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-black font-medium px-6 py-2 rounded transition duration-300">
                  Läs mer
                </button>
              </div>
            </div>

            {/* Card 4: Konsulter (Image) */}
            <div className="flex flex-col h-full p-6 rounded-md">
             
              <img
                src="/team_avatar.png"
                alt="Team Avatars"
                className="w-full h-auto mt-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessModel;
