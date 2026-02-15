import { ShieldCheck, Calendar, MapPin, DollarSign, Phone } from "lucide-react";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80')] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase tracking-tight">
            Why Dallas Trusts Our <span className="text-blue-400">Plumbers</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
            Plumbing problems are stressful. We make the repair process seamless, clean, and permanent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Satisfaction Guaranteed",
              description: "We stand behind our work with a 100% satisfaction guarantee on all plumbing repairs and installations."
            },
            {
              icon: MapPin,
              title: "Local Experts",
              description: "We know Dallas homes and building codes inside and out, ensuring all repairs are compliant and safe."
            },
            {
              icon: Calendar,
              title: "Same-Day Service",
              description: "Most plumbing issues can't wait. We offer same-day appointments to get your home back to normal fast."
            },
            {
              icon: DollarSign,
              title: "Upfront Pricing",
              description: "No surprise fees. We provide a clear, detailed quote for the entire project before we start any work."
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-blue-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-900/40 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Emergency Plumbing Problem?</h3>
            <p className="text-blue-50 text-lg font-medium opacity-90">
              Don't let a leak ruin your home. Our rapid response team in Dallas is ready to diagnose and repair 24/7.
            </p>
          </div>
          <a
            href="tel:8777921410"
            className="px-10 py-5 bg-white text-blue-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap animate-pulse"
          >
            <Phone className="w-6 h-6" />
            (877) 792-1410
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
