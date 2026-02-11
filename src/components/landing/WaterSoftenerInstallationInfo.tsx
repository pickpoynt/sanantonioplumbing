import { Droplets, Shield, Wrench, Settings } from "lucide-react";

const omahaFactors = [
  {
    icon: Droplets,
    title: "Nebraska Water Hardness",
    description: "Omaha's water supply contains high mineral content from the Missouri River and groundwater sources, leading to scale buildup in pipes and appliances that requires water softening solutions."
  },
  {
    icon: Shield,
    title: "Appliance Protection",
    description: "Hard water minerals can significantly reduce the lifespan of dishwashers, washing machines, and water heaters. Professional softener installation protects your investments in Omaha homes."
  },
  {
    icon: Wrench,
    title: "Skin and Hair Benefits",
    description: "Softened water improves soap lathering and leaves skin feeling smoother, particularly beneficial during Nebraska's dry winter months when humidity is low."
  },
  {
    icon: Settings,
    title: "Energy Efficiency",
    description: "Water softeners prevent mineral buildup in heating elements and pipes, maintaining optimal efficiency of water-using appliances and reducing utility costs in Omaha homes."
  }
];

const installationBenefits = [
  {
    title: "Salt-Based Systems",
    description: "Traditional ion-exchange systems that provide reliable softening for high-hardness water conditions."
  },
  {
    title: "Salt-Free Options",
    description: "Alternative systems that condition water without adding sodium, ideal for health-conscious homeowners."
  },
  {
    title: "Smart Technology",
    description: "Modern systems with monitoring capabilities and automatic regeneration scheduling."
  },
  {
    title: "Custom Sizing",
    description: "Systems sized specifically to your home's water usage and hardness levels."
  }
];

const WaterSoftenerInstallationInfo = () => {
  return (
    <section id="water-softener-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-600/30 rounded-full text-blue-400 text-sm font-semibold mb-4">
            Omaha Water Softener Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Professional Water Softener Installation in Omaha
          </h2>
          <p className="text-gray-300 text-lg">
            Hard water doesn't have to damage your home and appliances. Our Omaha team provides expert water softener installation services using premium equipment designed for Nebraska's specific water conditions.
          </p>
        </div>

        {/* Omaha Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {omahaFactors.map((factor, index) => {
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
            Water Softener System Options
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
            Serving Omaha and Surrounding Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-gray-300">
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Omaha</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Bellevue</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Greeley</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Ralston</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">La Vista</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Papillion</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Fremont</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Council Bluffs</span>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We serve the entire Omaha metropolitan area with professional water softener installation services. 
            Whether you need a basic system or a high-capacity whole-home solution, our team has the expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaterSoftenerInstallationInfo;
