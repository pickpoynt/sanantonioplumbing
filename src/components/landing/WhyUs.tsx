import { ShieldCheck, Zap, Users, Award, Biohazard, Wind, Microscope, Lock } from "lucide-react";

const features = [
  {
    icon: Biohazard,
    title: "Toxic Mold Certified",
    description: "Our technicians are specifically certified in Stachybotrys chartarum (Toxic Black Mold) extraction and remediation protocols."
  },
  {
    icon: Lock,
    title: "Bio-Containment",
    description: "We use surgical-grade zip-walls and negative air pressure to ensure zero cross-contamination to other areas of your Ambler home."
  },
  {
    icon: Wind,
    title: "Industrial HEPA",
    description: "Utilizing 3-stage filtration that removes 99.97% of mycotoxin-carrying particulates from your indoor air environment."
  },
  {
    icon: Microscope,
    title: "Lab Verification",
    description: "Every project includes post-remediation clearance testing from an independent laboratory to verify total mold elimination."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Why Ambler Trusts Our Toxic Mold Protocols
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Toxic black mold isn't a standard cleaning job—it's a biological hazard. We bring medical-grade technology to residential settings throughout Montgomery County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-red-600 to-red-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-red-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Toxic Mold Emergency?</h3>
            <p className="text-red-50 text-lg font-medium opacity-90">
              Our Ambler bio-hazard response team is on standby 24/7. We can be at your door in less than 60 minutes with containment equipment.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-red-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
