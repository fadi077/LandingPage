import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Faq() {
  // Sample FAQ data — adjust or localize the text as you see fit.
  const faqs: FAQItem[] = [
    {
      question: "Vad ingår i er webb- och apputvecklingstjänst?",
      answer: "Vi erbjuder allt från design och frontendutveckling till backend och testning. Vi skräddarsyr våra lösningar för att möta dina specifika behov."
    },
    {
      question: "Hur lång tid tar det att utveckla en webbplats eller app?",
      answer: "Tidsramen beror på projektets komplexitet, men vanligtvis tar det mellan 8 till 12 veckor."
    },
    {
      question: "Erbjuder ni anpassade utvecklingslösningar?",
      answer: "Ja! Varje lösning är unik och planeras i nära samarbete med dig för att uppfylla dina mål och krav."
    },
    {
      question: "Hur säkerställer ni hög kvalitet i utvecklingen?",
      answer: "Vi arbetar med kodgranskning, kontinuerliga tester och modern teknik för att garantera stabil prestanda och kvalitet."
    },
    {
      question: "Kan jag uppdatera min applikation själv efter lanseringen?",
      answer: "Absolut! Vi kan bygga lösningen så att du själv enkelt kan göra uppdateringar och ändringar, eller erbjuda underhållstjänster om du föredrar det."
    },
    {
      question: "Vad gör er webb- och apputvecklingstjänst unik?",
      answer: "Vi sätter alltid dina affärsmål och användarupplevelsen i fokus. Dessutom värnar vi om långsiktiga samarbeten och förblir en nära partner även efter lansering."
    }
  ];

  // Track which FAQ items are open. Here, we default the second item (index 1) to open.
  const [openFAQ, setOpenFAQ] = useState<boolean[]>(
    faqs.map((_, i) => i === 1) // => [false, true, false, false, false, false]
  );

  // Toggle a specific FAQ open/closed
  const toggleFAQ = (index: number) => {
    setOpenFAQ((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto px-4">

        {/* Label */}
        <div className="text-center mb-6">
          <span className="inline-block bg-[#7CF5D5] text-black text-xs font-bold tracking-wide px-4 py-1 mb-4">
            VANLIGA FRÅGOR & SVAR
          </span>
          <h3 className="text-2xl md:text-2xl font-bold mb-2">
            VANLIGA FRÅGOR & SVAR
          </h3>
          <p className="text-gray-600 text-sm md:text-sm max-w-xl mx-auto">
            Här hittar du svar på några av de vanligaste frågorna om våra webb- 
            och apputvecklingstjänster. Vi strävar efter att göra processen 
            så tydlig och enkel som möjligt för dig.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ[index];

            return (
              <div key={index}>
                {/* Question Row */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`flex items-center justify-between cursor-pointer p-4 rounded-md transition-colors
                    ${isOpen ? "bg-[#7CF5D5] text-black" : "bg-white"}
                  `}
                >
                  <span className="font-small text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold">
                    {isOpen ? "–" : "+"}
                  </span>
                </div>
                
                {/* Answer (only visible if open) */}
                {isOpen && (
                  <div className="bg-transparent px-4 pb-3 mt-4 text-sm text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
