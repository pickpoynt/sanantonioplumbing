import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency plumbing in Dallas 24/7?",
    answer: "Yes, we provide round-the-clock emergency service for Dallas and surrounding areas. Whether it's a burst pipe at 2 AM or a weekend leak, our rapid response team is always ready."
  },
  {
    question: "Will you provide a price before starting the work?",
    answer: "Absolutely. We believe in transparency. Our technicians will diagnose the issue and provide a clear, upfront, flat-rate quote before any work begins."
  },
  {
    question: "Are you licensed to handle Dallas slab leaks?",
    answer: "Yes, we are fully licensed by the State of Texas and carry specialized insurance. We have extensive experience dealing with the specific foundation and slab leak challenges caused by Dallas's expansive clay soil."
  },
  {
    question: "How do I know if my water heater needs to be replaced?",
    answer: "If your unit is over 10 years old, shows signs of rust, makes rumbling noises, or isn't providing enough hot water, it's time for an inspection. We can help you decide if a repair or a more efficient tankless upgrade is best."
  },
  {
    question: "Do you service older homes in Highland Park and University Park?",
    answer: "Yes, we specialize in the unique plumbing needs of Dallas's historic neighborhoods. We can safely rehabilitate aging cast iron, galvanized steel, and copper piping systems common in these older estates."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Dallas Plumbing <span className="text-blue-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to your questions about emergency plumbing and residential services in the Dallas Metroplex.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
