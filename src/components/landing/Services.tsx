import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves, Home, Microscope, GlassWater, Hammer, Biohazard, FlaskConical, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Eco-Remediation",
    description: "Surgical removal of kitchen mold using food-safe, non-toxic antimicrobials safe for your family and cabinetry.",
    link: "#kitchen-mold-info"
  },
  {
    icon: Droplets,
    title: "Leaking Sink Detection",
    description: "Precision infrared mapping to find hidden moisture behind cabinets and under sink enclosures.",
    link: "#kitchen-mold-info"
  },
  {
    icon: ShieldCheck,
    title: "HEPA Air Scrubbing",
    description: "Industrial-grade filtration that traps 99.97% of toxic mold particulates as small as 0.3 microns.",
    link: "#toxic-mold-info"
  },
  {
    icon: Microscope,
    title: "Lab Verification",
    description: "Independent laboratory air and surface testing to certify that your home is safe for re-entry.",
    link: "#toxic-mold-info"
  },
  {
    icon: FlaskConical,
    title: "Mycotoxin Remediation",
    description: "Specialized neutralization of secondary toxic metabolites released by black mold colonies.",
    link: "#toxic-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Clinical Mold Remediation Services
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Toxic black mold requires more than just cleaning—it requires surgical precision and scientific verification. Our Ambler team follows strict biohazard protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider">
                  Details <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


