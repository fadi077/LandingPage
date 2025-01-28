function Logo() {
  return (
    <div>
      <section className="bg-white mt-20 mb-20 py-12x px-4 ">
        <p className="text-center text-gray-800 mb-6">
          Vi har hjälpt över 200 snabbväxande företag med deras tekniska och
          kreativa behov
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 ">
          <img src="/Norteam.png" alt="Norteam" className="h-14" />
          <img src="/VattenFall.png" alt="Vattenfall" className="h-14 hidden md:inline-flex" />
          <img src="/AirForestry.png" alt="AirForestry" className="h-14 hidden md:inline-flex" />
          <img src="/Lakrits.png" alt="Lakrits" className="h-14 hidden md:inline-flex" />
        </div>
      </section>
    </div>
  )
}

export default Logo