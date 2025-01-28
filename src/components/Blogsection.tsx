interface BlogCardProps {
  image: string;
  category: string; // e.g. "BLOGG • ARVIN SAADATI"
  readTime: string; // e.g. "4 MIN LÄSTID"
  title: string;
}

function BlogCard({ image, category, readTime, title }: BlogCardProps) {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[4/3] object-cover rounded-lg"
      />
      <div className="mt-3">
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
          <span>{category}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-base font-medium leading-snug">{title}</h3>
      </div>
    </div>
  );
}

function Blogsection() {
  return (
    <section className="bg-[#F6F6F6] py-16 ">
      <div className=" max-w-6xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[#7CF5D5] text-black text-xs font-bold tracking-wide px-4 py-1 mb-4">
            AFFÄRSMODELL
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tre sätt vi jobbar på
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Skräddarsydda projekt, löpande arbete eller en konsult som blir en 
            del av ditt team. Välj det som passar dig bäst.
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid md:grid-cols-3 gap-8">
          <BlogCard
            image="/Blog_1.png"
            category="BLOGG • ARVIN SAADATI"
            readTime="4 MIN LÄSTID"
            title="8 verktyg marknadsavdelningen inte får missa 2025"
          />
          <BlogCard
            image="/Blog_2.png"
            category="BLOGG • ARVIN SAADATI"
            readTime="4 MIN LÄSTID"
            title="7 vanliga misstag vid digitalisering"
          />
          <BlogCard
            image="/blog_3.png"
            category="BLOGG • ARVIN SAADATI"
            readTime="4 MIN LÄSTID"
            title="Frigör 55+ timmar/mån med 7 kraftfulla automationer + [Automationskalkylator]"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-[#7CF5D5] text-black font-medium px-8 py-3 hover:bg-[#5BE3C0] transition-colors">
            Kom igång
          </button>
        </div>

      </div>
    </section>
  );
}

export default Blogsection;
