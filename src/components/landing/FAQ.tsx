const faqs = [
  {
    question: "What exactly is 'Toxic Black Mold' (Stachybotrys)?",
    answer: "Stachybotrys chartarum is a greenish-black mold that grows on moisture-damaged materials with high cellulose content. It is unique because it produces mycotoxins, which are secondary toxic metabolites that can cause serious respiratory and neurological symptoms."
  },
  {
    question: "Why does my Ambler home have black mold but not my neighbor's?",
    answer: "Ambler's historic architecture often features stone foundations or old crawlspaces that trap humidity. Factors like localized pipe leaks, poor basement ventilation, or hidden roof leaks can create the unique stagnant 'micro-climate' black mold needs to thrive."
  },
  {
    question: "Is it safe to stay in the house during toxic mold removal?",
    answer: "During active remediation, we use 6-mil poly-containment and negative air pressure to keep spores isolated. However, if the contamination is extensive or affects the HVAC system, we may recommend temporary relocation until post-remediation lab tests are cleared."
  },
  {
    question: "How do you 'kill' black mold so it doesn't come back?",
    answer: "We don't just 'kill' it; we physically remove it. Dead spores are still toxic. We perform abrasive cleaning of surfaces, followed by HEPA vacuuming and antimicrobial fogging, while simultaneously addressing the moisture source to prevent regrowth."
  },
  {
    question: "Will my insurance cover toxic black mold removal?",
    answer: "Generally, if the mold is caused by a sudden water event (like a burst pipe), insurance often covers the remediation. We provide full documentation, infrared moisture maps, and lab results to assist you with your Montgomery County area insurance claim."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Ambler Toxic Mold FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Scientific answers to common questions about black mold remediation in Montgomery County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-red-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-700 transition-colors flex items-start gap-3">
                  <span className="text-red-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-red-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
