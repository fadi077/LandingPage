 export default function herosection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#F8FDFF] p-8 md:p-16 flex flex-col justify-center">
          <span className="inline-block bg-black text-[#a4f9d2] rounded-full px-4 py-1 text-sm font-medium tracking-wide mb-4 w-fit">
            ON-DEMAND DESIGN & TECH
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Tech & design
            <br />
            – på dina villkor
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Oavsett om du behöver hjälp med ett enskilt projekt,
            en långsiktig partner eller en enskild expert som blir en del
            av ditt team, så har vi lösningarna.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#3FF0C7] text-gray-900 font-medium px-6 py-2 rounded-lg hover:opacity-90 transition">
              Kom igång
            </button>
            <div className="flex items-center gap-2">
              <img src="/google_rating.png" alt="Google" className="h-5" />
            </div>
          </div>
        </div>

        <div className="bg-[#E2F0F8] p-8 md:p-16 flex items-center justify-center">
          <img
            src="/herosection.png"
            alt="Preview of multiple design screens"
            className="w-full max-w-lg drop-shadow-xl"
          />
        </div>
      </section>
    </div>
  )
}
