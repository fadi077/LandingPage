 interface BlogCardProps {
   image: string;
   category: string;
   readTime: string;
   title: string;
 }
function BlogCard({ image, category, readTime, title }: BlogCardProps) {
    
  return (
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[4/3] object-cover rounded-lg"
      />
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>{category}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
    </div>
  );
}
function Blogsection() {
  return (
    <div>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#7CF5D5] text-black text-xs font-bold tracking-wide rounded-lg px-4 py-1 mb-4">
              AFFÄRSMODELL
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tre sätt vi jobbar på
            </h2>
            <p className="text-gray-600">
              Skräddarsydda projekt, löpande arbete eller en konsult som blir en
              del av ditt team. Välj det som passar dig bäst.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              image="/Blog_1.png"
              category="BLOGG • ARVIN SABAHAT"
              readTime="4 MIN LÄSTO"
              title="8 verktyg marknadsavdelnin gen inte får missa 2025"
            />
            <BlogCard
              image="/Blog_2.png"
              category="BLOGG • ARVIN SABAHAT"
              readTime="4 MIN LÄSTO"
              title="7 vanliga misstag vid digita lisering"
            />
            <BlogCard
              image="/blog_3.png"
              category="BLOGG • ARVIN SABAHAT"
              readTime="4 MIN LÄSTO"
              title="Frigör 55+ timmar/mån med 7 kraftfulla automationer + [Automationskalkylator]"
            />
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#3FF0C7] text-gray-900 px-6 py-2 font-medium">
              Kom igång
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogsection
