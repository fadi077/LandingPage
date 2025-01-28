export default function Visionsection() {
  return (
    <section className="py-20 bg-white mt-20 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-1">
        {/* Top: Image (Left) + Heading & Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="">
            <img
              src="/Vision.png"
              alt="App and website preview"
              className="w-full"
            />
          </div>

          {/* Right Text */}
          <div className="">
            <div className="inline-block bg-black text-[#7CF5D5] text-sm font-semibold px-6 py-2">
              DIN VISION, VÅR KOD
            </div>
            <h2 className="text-4xl font-bold leading-tight my-5">
              Innovativ Webb- och <br />
              Apputveckling för Din <br />
              Framgång
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Våra webb- och apputvecklingstjänster levererar 
              högkvalitativa digitala lösningar som uppfyller dina 
              specifika behov och mål.
            </p>
            <p className="text-gray-600 text-base leading-relaxed my-5">
              Med fokus på både funktionalitet och prestanda, utvecklar 
              vi applikationer som är skalbara och användarvänliga. Vi 
              arbetar nära med dig för att förstå dina krav och leverera 
              skräddarsydda lösningar som överträffar dina förväntningar.
            </p>
            <button className="bg-[#7CF5D5] text-black font-semibold hover:bg-[#63dac1] px-8 py-3 text-lg">
              Kom igång
            </button>
          </div>
        </div>

        {/* Bottom: Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Fullstack Utveckling</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Utveckling av kompletta webb- och mobilösningar från 
              frontend till backend med modern teknik.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Mobilapp Utveckling</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Utveckling av högpresterande mobilapplikationer för både iOS och Android.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">API Integration</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Sömlös integration av tredjeparts-AP:er för att utöka 
              funktionaliteten på dina webb- och mobilösningar.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">E-handelslösningar</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Utveckling av skräddarsydda ehandelsplattformar som driver 
              försäljning och förbättrar kundupplevelsen.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-[#7CF5D5] rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Webbapplikationer</h3>
            <p className="text-black text-base leading-relaxed">
              Skapande av webbaserade applikationer som erbjuder avancerad 
              funktionalitet och sömlös användarupplevelse.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Underhåll och Support</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Kontinuerligt underhåll och teknisk support för att 
              säkerställa att dina applikationer fungerar optimalt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}