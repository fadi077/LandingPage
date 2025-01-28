import { ReactNode, ButtonHTMLAttributes } from "react";

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
    className={`px-8 py-2 mt-2 text-sm font-semibold transition-colors ${className}`}
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
      className={`
        flex flex-col lg:flex-row 
        ${imagePosition === "right" ? "lg:flex-row-reverse" : ""}
        items-start mb-6 w-full max-w-5xl mx-auto
      `}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-start items-center pr-2">
        <img
          src={imageSrc}
          alt={title}
          className="shadow-lg object-cover max-h-60 w-3/4"
        />
      </div>

      {/* Text / Buttons */}
      <div className="w-full lg:w-1/2 flex flex-col pl-2">
        <p className="text-xs text-black font-medium mt-2 mb-1">
          {header}
        </p>
        <h3 className="text-sm font-extrabold mt-0 mb-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mt-1 mb-1">
          {description}
        </p>

        {/* Tag-like Buttons */}
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs border border-gray-300 text-gray-700 bg-[#D6E7F0] p-2">
            Webinarpresentation
          </span>
          <span className="text-xs border border-gray-300 text-gray-700 bg-[#D6E7F0] p-2">
            Sales Decks
          </span>
          <span className="text-xs border border-gray-300 text-gray-700 bg-[#D6E7F0] p-2 hidden md:inline-flex">
            Webinarpresentation
          </span>
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
    <section className="py-8 bg-white">
      <div className="md:rounded mx-auto px-4 py-8 bg-[#F6F6F6]">
        {/* Top Heading */}
        <div className="text-center mb-6">
          <span className="inline-block bg-black text-[#7CF5D5] text-xs font-semibold uppercase px-5 py-2 mt-14 mb-4">
            E x e m p e l j o b b
          </span>
          <h2 className="text-3xl font-bold mb-2">
            Våra Lösningar i Praktiken
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Vi har gjort mer än vi kan visa – men NDA:er håller oss tysta. Här är ett
            urval av vad vi kan dela.
          </p>
        </div>

        {/* Cards */}
        <div>
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-6">
          <Button className="bg-[#7CF5D5] hover:bg-[#63dac1] border-0 text-black">
            Ladda in fler
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExampleJob;
