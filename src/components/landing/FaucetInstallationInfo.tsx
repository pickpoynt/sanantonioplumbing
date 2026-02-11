import { Droplets, Wrench, ShieldCheck, Clock } from "lucide-react";

const siouxFallsFactors = [
  {
    icon: Droplets,
    title: "South Dakota Water Quality",
    description: "Sioux Falls' water treatment facilities produce clean water, but mineral buildup can still affect faucet performance and longevity over time."
  },
  {
    icon: Wrench,
    title: "Harsh Winter Conditions",
    description: "Sioux Falls' severe winters can cause pipes to freeze and expand, leading to faucet damage and the need for professional installation services."
  },
  {
    icon: ShieldCheck,
    title: "Modern Home Requirements",
    description: "Newer homes in Sioux Falls often require updated faucet installations to meet current plumbing codes and energy efficiency standards."
  },
  {
    icon: Clock,
    title: "Growing Community Needs",
    description: "As Sioux Falls continues to grow, the demand for professional faucet installation services increases in both residential and commercial sectors."
  }
];

const installationBenefits = [
  {
    title: "Expert Installation",
    description: "Our certified plumbers ensure perfect faucet installation with proper sealing and connections."
  },
  {
    title: "Quality Assurance",
    description: "We use premium materials and provide warranties on all our faucet installation work."
  },
  {
    title: "Time Efficiency",
    description: "Professional installation prevents costly mistakes and ensures your new faucet works perfectly from day one."
  },
  {
    title: "Code Compliance",
    description: "All installations meet Sioux Falls plumbing codes and local building requirements."
  }
];

const FaucetInstallationInfo = () => {
  return (
    <section id="faucet-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
            Sioux Falls Plumbing Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Professional Faucet Installation in Sioux Falls
          </h2>
          <p className="text-gray-300 text-lg">
            Installing a new faucet shouldn't be complicated. Our Sioux Falls team provides expert faucet installation services for kitchens, bathrooms, and commercial spaces throughout the region.
          </p>
        </div>

        {/* Sioux Falls Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siouxFallsFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-300">{factor.description}</p>
              </div>
            );
          })}
        </div>

        {/* Installation Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Professional Faucet Installation?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Serving Sioux Falls and Surrounding Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-gray-300">
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Sioux Falls</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Brandon</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Harrisburg</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Beresford</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Vermillion</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Lennox</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Tea</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Crooks</span>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We serve the entire Sioux Falls metropolitan area with professional faucet installation services. 
            Whether you need a simple kitchen faucet replacement or a complete bathroom renovation, our team has the expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaucetInstallationInfo;
