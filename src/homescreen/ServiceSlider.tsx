import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ServiceSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  console.log(scrollContainerRef.current); // Debugging log

  const services = [
    { id: 1, src: "/ebook_design.png", alt: "E-bok design" },
    { id: 2, src: "/illustration.png", alt: "3D Illustration" },
    { id: 3, src: "/Laptop.png", alt: "Coding & Development" },
    { id: 4, src: "/UiUx.png", alt: "Design & Layout" },
    { id: 5, src: "/Dashboard.png", alt: "Tablet Demo" },
  ];

  return (
    <div>
      <section className="py-10 px-4 bg-white mb-6">
        <div className="text-center mb-8">
          <span className="inline-block bg-[#1A2B3B] text-[#7CF5D5] text-xs font-medium tracking-wide px-4 py-1 mb-4">
            VÅRA TJÄNSTER
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Ett spektrum av kreativa & tekniska lösningar
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black text-white rounded-full p-2 shadow-md hover:bg-[#2DD3AD] transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 no-scrollbar"
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[250px] h-[400px] snap-start overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <img
                  src={service.src}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#3FF0C7] rounded-full p-2 shadow-md hover:bg-[#2DD3AD] transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceSlider;
