import { Zap, Shield, Wrench, Settings } from "lucide-react";

const tacomaFactors = [
  {
    icon: Zap,
    title: "Pierce County Mineral Buildup",
    description: "Tacoma's water system can carry minerals that, over time, create significant scaling in older cast iron pipes common in the North End and Proctor District."
  },
  {
    icon: Shield,
    title: "Heavy Rainfall Entry",
    description: "Tacoma's frequent Pacific Northwest rains can wash debris and silt into exterior lines, creating dense blockages that standard snaking can't clear."
  },
  {
    icon: Wrench,
    title: "Tree Root Challenges",
    description: "The lush greenery of neighborhoods like Fircrest and University Place means aggressive tree roots often penetrate sewer lines seeking moisture."
  },
  {
    icon: Settings,
    title: "Commercial Kitchen Grease",
    description: "Tacoma's vibrant restaurant scene from Point Ruston to Hilltop relies on regular hydro jetting to keep grease traps and drains compliant and clear."
  }
];

const hydroJettingBenefits = [
  {
    title: "4000 PSI Precision Cleaning",
    description: "Our state-of-the-art jetting equipment uses immense water pressure to scour pipe walls clean, removing 100% of grease, sludge, and debris."
  },
  {
    title: "Non-Invasive Root Removal",
    description: "Hydro jetting effectively cuts through intrusive tree roots without the need for costly and destructive digging in your Tacoma yard."
  },
  {
    title: "Long-Term Pipe Health",
    description: "By removing all buildup, hydro jetting prevents the 'recurring clog' cycle and extends the life of your plumbing system significantly."
  },
  {
    title: "Safe for Tacoma's Environment",
    description: "We use only pure, pressurized water—no harsh chemicals that could harm the Puget Sound or your local landscape."
  }
];

const serviceAreas = [
  "North End Tacoma",
  "South Tacoma",
  "University Place, WA",
  "Fircrest, WA",
  "Ruston, WA",
  "Puyallup, WA",
  "Lakewood, WA",
  "Gig Harbor, WA"
];

export default function HydroJettingInfo() {
  return (
    <section id="hydro-jetting-info" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Professional Hydro Jetting Services in Tacoma
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Advanced high-pressure water jetting solutions for residential and commercial properties throughout
            Tacoma and Pierce County. Our expert technicians use state-of-the-art equipment to clear even the toughest
            pipe blockages safely and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Why Tacoma Properties Need Hydro Jetting
            </h3>
            <div className="space-y-4">
              {tacomaFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <factor.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{factor.title}</h4>
                    <p className="text-slate-600">{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              Hydro Jetting Benefits
            </h3>
            <div className="space-y-4">
              {hydroJettingBenefits.map((benefit, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
            Tacoma & Pierce County Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="text-center p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Serving all of Tacoma with professional hydro jetting services.
              Call (380) 266-0944 for immediate assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
