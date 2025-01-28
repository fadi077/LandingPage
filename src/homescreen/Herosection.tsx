export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_45%] w-full min-h-[92vh] gap-0">
      {/* Left Section */}
      <div className="bg-[#F3FBFF] flex flex-col justify-center items-start px-6 md:px-12 py-6"> {/* Adjusted py-10 to py-6 */}
        <div>
          <p className="text-[#7CF5D5] inline-block bg-black px-4 py-1.5 mb-3 text-xs md:text-sm tracking-wider font-medium uppercase w-fit rounded-md">
            On-demand design & tech
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-[7vh] font-extrabold text-black leading-tight">
            Tech & design <br />– på dina villkor
          </h1>
          <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed mt-4 max-w-[90%] md:max-w-[75%] lg:max-w-[60%]">
            Oavsett om du behöver hjälp med ett enskilt projekt, en långsiktig
            partner eller en enskild expert som blir en del av ditt team, så har
            vi lösningarna.
          </p>
          <button className="bg-[#7CF5D5] hover:bg-[#63dac1] text-black font-semibold px-6 md:px-8 py-2 md:py-3 mt-6 rounded-lg text-sm md:text-md shadow-md transition-all">
            Kom igång
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center items-center bg-[#D6E7F0] relative py-4"> {/* Adjusted py-8 to py-4 */}
        <img
          src="/herosection.png"
          alt="Laptop showing development environment"
          className="w-[80%] sm:w-[70%] lg:w-[90%] xl:w-[85%] hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}