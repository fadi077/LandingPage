import { ReactNode, ButtonHTMLAttributes } from "react";

// BlogCardProps Interface

// ButtonProps Interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

// SolutionCardProps Interface
interface SolutionCardProps {
  imagePosition: "left" | "right";
  imageSrc: string;
  header: string;
  title: string;
  description: string;
}

/* ---------------------------
   Reusable Button Component
--------------------------- */
const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    className={`px-4 py-2 rounded text-sm font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* ---------------------------
   SolutionCard Component
--------------------------- */
const SolutionCard = ({
  imagePosition,
  imageSrc,
  header,
  title,
  description,
}: SolutionCardProps) => {
  return (
    <div
      className={`w-[90%] md:w-[80%] flex flex-col lg:flex-row ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      } items-start mb-12`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 lg:pl-5">
        <img
          src={imageSrc}
          alt={title}
          className="shadow-lg object-cover max-h-64"
        />
      </div>

      {/* Text / Buttons */}
      <div className="lg:pl-5">
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-medium">
          {header}
        </p>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-3">
          {/* Buttons */}
          <Button className="border border-gray-300 text-gray-700 bg-[#D6E7F0] hover:bg-gray-100">
            Webinarpresentation
          </Button>
          <Button className="border border-gray-300 text-gray-700 bg-[#D6E7F0] hover:bg-gray-100">
            Sales Decks
          </Button>
          <Button className="border border-gray-300 text-gray-700 bg-[#D6E7F0] hover:bg-gray-100 hidden md:inline-flex">
            Webinarpresentation
          </Button>
        </div>
      </div>
    </div>
  );
};

// Solutions array for "Example Job" section
const solutions: SolutionCardProps[] = [
  {
    imagePosition: "left",
    imageSrc: "/example_job_1.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentationsmaterial fångar publikens uppmärksamhet och förstärker ditt budskap.",
  },
  {
    imagePosition: "right",
    imageSrc: "/example_job_2.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentationsmaterial fångar publikens uppmärksamhet och förstärker ditt budskap.",
  },
  {
    imagePosition: "left",
    imageSrc: "/example_job_3.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentationsmaterial fångar publikens uppmärksamhet och förstärker ditt budskap.",
  },
  {
    imagePosition: "right",
    imageSrc: "/example_job_4.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentationsmaterial fångar publikens uppmärksamhet och förstärker ditt budskap.",
  },
];

function ExampleJob() {
  return (
    <div>
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 bg-[#F6F6F6]">
          {/* Top Heading */}
          <div className="text-center mb-10">
            <h3 className="text-sm font-semibold bg-black text-[#7CF5D5] uppercase mb-5 p-2 inline-block">
              Exempeljobb
            </h3>
            <h2 className="text-4xl font-bold mb-2">
              Våra Lösningar i Praktiken
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Vi har gjort mer än vi kan visa – men NDA:er håller oss tysta. Här
              är ett urval av vad vi kan dela.
            </p>
          </div>

          {/* Cards */}

          <div className="flex flex-col items-center">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <Button className="px-8 py-3 text-lg font-semibold bg-[#7CF5D5] hover:bg-[#63dac1] transition-colors">
              Ladda in fler
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExampleJob;