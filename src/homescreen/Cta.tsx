
function Cta() {
  return (
    <div>
      <section className="bg-[#3FF0C7] mt-20 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Redo att ta nästa steg?</h2>
          <p className="text-gray-700 mb-8">
            Vill du veta hur våra kreativa och tekniska resurser kan hjälpa dig?
            Boka ett möte med oss – tillsammans hittar vi rätt lösning för dina
            behov.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-white text-gray-900 px-6 py-2 font-medium">
              Kom igång
            </button>
            <div className="flex items-center gap-2">
              <img src="/google_rating.png" alt="Google" className="h-5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cta
