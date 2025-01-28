import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const services = [
    { id: 1, src: "/ebook_design.png", alt: "E-bok design" },
    { id: 2, src: "/illustration.png", alt: "3D Illustration" },
    { id: 3, src: "/Laptop.png", alt: "Coding & Development" },
    { id: 4, src: "/UiUx.png", alt: "Design & Layout" },
    { id: 5, src: "/Dashboard.png", alt: "Tablet Demo" },
  ];

  return (
    <div className="w-full">
      <section className="py-6 px-4 bg-white mb-10">
        <div className="text-center mb-6">
          <span className="inline-block bg-[#1A2B3B] text-[#7CF5D5] text-xs font-medium tracking-wide px-4 py-1 mb-3 rounded">
            VÅRA TJÄNSTER
          </span>
          <h2 className="text-xl font-bold text-gray-900 px-4">
            Ett spektrum av kreativa & tekniska lösningar
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 text-white rounded-full p-1.5 shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 no-scrollbar"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[280px] h-[360px] snap-start rounded-lg bg-white shadow-md"
              >
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3FF0C7] rounded-full p-1.5 shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceSlider;