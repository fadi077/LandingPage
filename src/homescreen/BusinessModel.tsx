function BusinessModel() {
  return (
    <div>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <span className="inline-block bg-[#1A2B3B] text-[#7CF5D5] text-xs font-medium tracking-wide  px-4 py-1 mb-4">
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projekt */}
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
                <button className="bg-[#3FF0C7] text-gray-900 px-6 py-2 font-medium">
                  Kom igång
                </button>
                <button className="border 1px border-gray-300 px-6 py-2 font-medium">
                  Läs mer
                </button>
              </div>
              {/* Image */}
              <div className="mt-4 flex items-end">
                <img
                  src="/webprojekt.png"
                  alt="Project Dashboard"
                  className="w-full"
                />
              </div>
            </div>

            {/* Prenumeration */}
            <div>
              <h3 className="text-xl font-bold mb-2 text-center md:text-left">
                Prenumeration
              </h3>
              <p className="text-gray-600 mb-4 text-center md:text-left">
                Flexibelt samarbete med en timbunk som täcker både kreativa och
                tekniska behov – perfekt för företag som vill ha ett nära,
                snabbt och effektivt samarbete.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-[#3FF0C7] text-gray-900 px-6 py-2 font-medium">
                  Kom igång
                </button>
                <button className="border border-gray-300 px-6 py-2 font-medium">
                  Läs mer
                </button>
              </div>
              <div className="mt-4 flex items-end">
                <img
                  src="/subscription_dashboard.png"
                  alt="Subscription Dashboard"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Konsulter */}
          <div className="mt-8">
            <div className="md:flex md:justify-between md:items-center">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-4">Konsulter</h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto md:mx-0">
                  Stärk ert team med experter på era villkor – tekniska eller
                  kreativa konsulter som matchar er perfekt och levererar
                  resultat direkt.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="bg-[#3FF0C7] text-gray-900 px-6 py-2 font-medium">
                    Kom igång
                  </button>
                  <button className="border border-gray-300 px-6 py-2 font-medium">
                    Läs mer
                  </button>
                </div>
              </div>
              <img
                src="/team_avatar.png"
                alt="Team Avatars"
                className="mt-8 md:mt-0 md:w-140 mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BusinessModel;
