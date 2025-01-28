export default function HeroSection() {
  return (
    <section className="bg-[#F3FBFF]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex items-center">
          <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0 px-6 md:px-12 py-12 lg:py-32">
            <div className="inline-flex items-center gap-2 mb-3">
              <p className="text-[#7CF5D5] bg-black px-4 py-1.5 text-xs tracking-wider font-medium uppercase rounded-xl">
                On-demand design & tech
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black leading-tight">
              Tech & design
              <br />– på dina villkor
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
              Oavsett om du behöver hjälp med ett enskilt projekt, en långsiktig
              partner eller en enskild expert som blir en del av ditt team, så
              har vi lösningarna.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="bg-[#7CF5D5] hover:bg-[#63dac1] text-black font-semibold px-8 py-3 rounded-lg text-base transition-all">
                Kom igång
              </button>
              <div className="flex items-center gap-2">
                <img src="/google_rating.png" alt="Google" className="h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-[#D6E7F0] flex items-center">
          <div className="w-full flex justify-center items-center">
            <img
              src="/herosection.png"
              alt="Laptop showing development environment"
              className="w-[85%] lg:w-[90%] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}