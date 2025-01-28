import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

interface SolutionCardProps {
  imagePosition: "left" | "right";
  imageSrc: string;
  header: string;
  title: string;
  description: string;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    className={`px-8 py-2 text-sm font-semibold transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
);

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
        flex flex-col ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}
        items-center gap-12 mb-20 w-full max-w-6xl mx-auto px-4 lg:px-8
      `}
    >
      {/* Image Container */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <div className="">
          <img
            src={imageSrc}
            alt={title}
            className=""
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col">
        <span className="text-sm text-gray-900 mb-2">
          {header}
        </span>
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-[#E8F4F9] text-gray-700 rounded-md text-sm">
            Webinarpresentation
          </span>
          <span className="px-4 py-2 bg-[#E8F4F9] text-gray-700 rounded-md text-sm">
            Sales Decks
          </span>
          <span className="px-4 py-2 bg-[#E8F4F9] text-gray-700 rounded-md text-sm hidden md:inline-flex">
            Webinarpresentation
          </span>
        </div>
      </div>
    </div>
  );
};

const solutions: SolutionCardProps[] = [
  {
    imagePosition: "left",
    imageSrc: "/example_job_1.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentations material fångar publikens uppmärksamhet och förstärker ditt budskap. Vi samarbetar med dig för att förstå dina behov och skapa anpassade lösningar som överträffar dina förväntningar.",
  },
  {
    imagePosition: "right",
    imageSrc: "/example_job_2.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentations material fångar publikens uppmärksamhet och förstärker ditt budskap. Vi samarbetar med dig för att förstå dina behov och skapa anpassade lösningar som överträffar dina förväntningar.",
  },
  {
    imagePosition: "left",
    imageSrc: "/example_job_3.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentations material fångar publikens uppmärksamhet och förstärker ditt budskap. Vi samarbetar med dig för att förstå dina behov och skapa anpassade lösningar som överträffar dina förväntningar.",
  },
  {
    imagePosition: "right",
    imageSrc: "/example_job_4.png",
    header: "Din Berättelse, Vår Design",
    title: "Professionellt Designade Presentationer för Varje Tillfälle",
    description:
      "Med vår erfarenhet och kreativa designmetoder säkerställer vi att ditt presentations material fångar publikens uppmärksamhet och förstärker ditt budskap. Vi samarbetar med dig för att förstå dina behov och skapa anpassade lösningar som överträffar dina förväntningar.",
  },
];

function ExampleJob() {
  return (
    <section className="py-16 bg-[#F6F6F6] mt-16">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <span className="inline-block bg-black text-[#7CF5D5] text-sm font-medium tracking-wider px-6 py-2 mb-6">
            EXEMPELJOBB
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Våra Lösningar i Praktiken
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi har gjort mer än vi kan visa – men NDA:er håller oss tysta. Här är ett urval av vad vi kan dela.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Button 
            className="bg-[#7CF5D5] hover:bg-[#6CE4C4] text-[#122229]"
            onClick={() => console.log('Load more clicked')}
          >
            Ladda in fler
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExampleJob;