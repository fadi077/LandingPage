export default function CTASection() {
  return (
    <section className="bg-[#7CF5D5] py-16 mt-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        {/* Heading - Different for mobile/desktop */}
        <h2 className="block md:hidden text-2xl font-bold mb-4 text-black">
          Redo att ta nästa steg?
        </h2>
        <h2 className="hidden md:block text-3xl font-bold mb-4 text-black">
          Förvandla Din Digitala Närvaro Med <br />
          Våra Utvecklingslösningar
        </h2>

        {/* Description - Different for mobile/desktop */}
        <p className="block md:hidden text-black text-sm mb-7 leading-relaxed">
          Vill du veta hur våra kreativa och tekniska resurser kan hjälpa dig? 
          Boka ett möte med oss - tillsammans hittar vi rätt lösning för dina behov.
        </p>
        <p className="hidden md:block text-black text-base mb-7 leading-relaxed">
          Få omedelbar tillgång till professionella utvecklingstjänster 
          via vår plattform. Med hjälp av ett dedikerat team kan du enkelt 
          skala ditt varumärke med flexibla lösningar anpassade efter dina behov.
        </p>

        {/* Email + Button - Different layouts for mobile/desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto relative">
          <input
            type="email"
            placeholder="Fyll i företagsmejl..."
            className="w-full px-4 py-3 focus:outline-none focus:border-[#7CF5D5] bg-white md:pr-28"
          />
          {/* Mobile button (full width) */}
          <button className="w-full md:hidden bg-black text-white py-3 px-5 font-medium">
            Kom igång
          </button>
          {/* Desktop button (absolute positioned) */}
          <button className="hidden md:block absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#7CF5D5] text-black py-2 px-5 font-medium hover:bg-[#6ad4b8] transition">
            Kom igång
          </button>
        </div>

        {/* Google rating */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-black">
          <img
            src="/google_rating.png"
            alt="Google 5.0"
            className="h-6"
          />
        </div>
      </div>
    </section>
  );
}