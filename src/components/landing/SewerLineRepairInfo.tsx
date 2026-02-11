import { Wrench, Shield, AlertTriangle, Clock } from "lucide-react";

const desMoinesFactors = [
  {
    icon: Wrench,
    title: "Iowa Soil Conditions",
    description: "Des Moines' clay-rich soil can shift and settle over time, putting stress on sewer lines and causing cracks, blockages, and structural damage that require professional repair."
  },
  {
    icon: Shield,
    title: "Aging Infrastructure",
    description: "Many Des Moines homes have older sewer systems with cast iron or clay pipes that deteriorate over decades, leading to tree root infiltration and frequent sewer line problems."
  },
  {
    icon: AlertTriangle,
    title: "Seasonal Weather Impact",
    description: "Iowa's extreme weather cycles with freezing winters and heavy rainfall can cause ground movement and pipe damage, making trenchless repair solutions increasingly popular in the Des Moines area."
  },
  {
    icon: Clock,
    title: "Growing Metro Needs",
    description: "As Des Moines continues expanding, the demand for modern sewer line repair services increases, particularly for trenchless technologies that minimize property disruption."
  }
];

const repairBenefits = [
  {
    title: "Trenchless Technology",
    description: "Modern pipe lining and bursting techniques that restore sewer function without extensive excavation or property damage."
  },
  {
    title: "Emergency Response",
    description: "24/7 emergency sewer repair services for urgent backups, blockages, and system failures that can't wait."
  },
  {
    title: "Code Compliance",
    description: "All repairs meet Des Moines municipal codes and city requirements for sewer system installations and modifications."
  },
  {
    title: "Long-term Solutions",
    description: "Durable repairs using high-quality materials that provide lasting protection against future sewer line issues."
  }
];

const SewerLineRepairInfo = () => {
  return (
    <section id="sewer-info" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-400 text-sm font-semibold mb-4">
            Des Moines Sewer Experts
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Professional Sewer Line Repair in Des Moines
          </h2>
          <p className="text-gray-300 text-lg">
            Sewer line problems shouldn't disrupt your life. Our Des Moines team provides expert sewer repair services using advanced trenchless technology and traditional methods for residential and commercial properties.
          </p>
        </div>

        {/* Des Moines Factors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {desMoinesFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-300">{factor.description}</p>
              </div>
            );
          })}
        </div>

        {/* Repair Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose Our Sewer Line Repair Services?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">{index + 1}</span>
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
            Serving Des Moines and Surrounding Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2 text-gray-300">
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Des Moines</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">West Des Moines</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Urbandale</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Johnston</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Clive</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Ankeny</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Pleasant Hill</span>
            <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Altoona</span>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            We serve the entire Des Moines metropolitan area with professional sewer line repair services. 
            Whether you need emergency backup resolution or preventive maintenance, our team has the expertise and equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SewerLineRepairInfo;
