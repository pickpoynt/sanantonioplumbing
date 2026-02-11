import { Zap, Wifi, Thermometer, Wind, DollarSign, PenTool } from "lucide-react";

const infoData = [
  {
    icon: DollarSign,
    title: "Low Upfront Cost",
    description: "Installing baseboard heaters is significantly cheaper than ductwork or heat pumps, making them ideal for remodels and additions.",
  },
  {
    icon: Wind,
    title: "Allergen Free",
    description: "Since there are no blowing fans or ducts collecting dust, baseboard heat is cleaner and better for allergy sufferers.",
  },
  {
    icon: PenTool,
    title: "Easy Maintenance",
    description: "No filters to change, no compressors to service. Just a quick dusting once a year keeps them running perfectly.",
  },
];

const benefitsData = [
  "Precise room-by-room temperature control",
  "Silent operation (no fan noise)",
  "No heat lost through leaky ducts",
  "Works during power outages (generator friendly)",
  "Modern, sleek designs available",
  "Integrating with smart home ecosystems",
];

const BaseboardInfo = () => {
  return (
    <section id="heat-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
            Efficient & Reliable
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Why Choose Baseboard?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            For decades, electric baseboards have been a staple in Seattle homes.
            New models are safer, better looking, and pair perfectly with modern smart thermostats.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {infoData.map((info, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                <info.icon className="w-7 h-7 text-copper" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {info.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Thermometer className="w-8 h-8 text-copper" />
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Digital Accuracy
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Old bi-metal thermostats can vary by ±5 degrees. New digital stats hold
              the temp within ±0.5 degrees, keeping you perfectly comfortable without overheating the room.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We install top brands like Honeywell, Mysa, and Cadet to ensure your
              heaters run only when needed, potentially saving you 10-15% on your electric bill.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
              The Zonal Advantage
            </h3>
            <ul className="space-y-4">
              {benefitsData.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
            <Wifi className="w-6 h-6 text-copper" />
            <span className="text-primary-foreground font-medium text-lg">
              Get a free quote today. Call (380) 266-0944.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseboardInfo;


