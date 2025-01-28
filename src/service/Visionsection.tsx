export default function Visionsection() {
  return (
    <section className="py-20 bg-white mt-20 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 md:px-1">

        {/* Top: Image (Left) + Heading & Text (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Vision.png"
              alt="App and website preview"
              className="w-2/3 md:w-1/2 h-auto object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="space-y-2">
            <span className="inline-block bg-black text-[#7CF5D5] text-xs font-semibold tracking-wider px-6 py-2">
              DIN VISION, VÅR KOD
            </span>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug">
              Innovativ Webb- och <br />
              Apputveckling för Din <br />
              Framgång
            </h2>
            <p className="text-gray-600 text-sm md:text-xs  leading-normal">
              Våra webb- och apputvecklingstjänster levererar 
              högkvalitativa digitala lösningar som uppfyller dina 
              specifika behov och mål.
              <br /><br />
              Med fokus på både funktionalitet och prestanda, utvecklar 
              vi applikationer som är skalbara och användarvänliga. Vi 
              arbetar nära med dig för att förstå dina krav och leverera 
              skräddarsydda lösningar som överträffar dina förväntningar.
            </p>
            <button className="bg-[#7CF5D5] text-black font-semibold hover:bg-[#63dac1] px-6 py-1 ">
              Kom igång
            </button>
          </div>
        </div>

        {/* Bottom: Services Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Card 1 */}
          <div className="p-7  shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-white">
            <h3 className="text-base font-semibold mb-1">Fullstack Utveckling</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utveckling av kompletta webb- och mobilösningar från 
              frontend till backend med modern teknik.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-white">
            <h3 className="text-base font-semibold mb-1">Mobilapp Utveckling</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utveckling av högpresterande mobilapplikationer för både iOS och Android.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-white">
            <h3 className="text-base font-semibold mb-1">API Integration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sömlös integration av tredjeparts-AP:er för att utöka 
              funktionaliteten på dina webb- och mobilösningar.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-white">
            <h3 className="text-base font-semibold mb-1">E-handelslösningar</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Utveckling av skräddarsydda ehandelsplattformar som driver 
              försäljning och förbättrar kundupplevelsen.
            </p>
          </div>

          {/* Card 5 (Teal Highlight) */}
          <div className="p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-[#7CF5D5] text-black">
            <h3 className="text-base font-semibold mb-1">Webbapplikationer</h3>
            <p className="text-sm leading-relaxed">
              Skapande av webbaserade applikationer som erbjuder avancerad 
              funktionalitet och sömlös användarupplevelse.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-7 shadow hover:shadow-lg hover:-translate-y-1 transition-transform bg-white">
            <h3 className="text-base font-semibold mb-1">Underhåll och Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kontinuerligt underhåll och teknisk support för att 
              säkerställa att dina applikationer fungerar optimalt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
