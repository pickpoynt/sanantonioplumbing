import { ShieldCheck, Waves, Activity, AlertTriangle, MapPin, Search } from "lucide-react";

const PolyBInfo = () => {
    const signs = [
        {
            icon: Search,
            title: "Identifying the Threat",
            description: "Polybutylene pipes are usually grey or black and were installed in Raleigh homes primarily between 1978 and 1995. Check around your water heater or main shut-off valve."
        },
        {
            icon: Waves,
            title: "Internal Degradation",
            description: "Chemicals in Raleigh's municipal water supply cause Poly-B to become brittle from the inside out. A pipe can look perfect on the outside while being ready to burst."
        },
        {
            icon: AlertTriangle,
            title: "Insurance Red Flags",
            description: "If you have Poly-B in your Raleigh home, your insurance carrier may drop you or refuse coverage for water damage. A repipe is often the only way to regain eligibility."
        },
        {
            icon: Activity,
            title: "Micro-Cracks vs Blowouts",
            description: "Poly-B rarely leaks slowly. They tend to burst suddenly at the joints or where the plastic has become thinned due to internal chemical stress."
        }
    ];

    const raleighNeighborhoods = [
        {
            icon: MapPin,
            title: "High-Risk Raleigh Areas",
            description: "Many planned communities in North Raleigh, Cary, and Apex built in the 80s and 90s are now at the critical 'failure age' for Polybutylene systems."
        },
        {
            icon: ShieldCheck,
            title: "The PEX Solution",
            description: "Our Raleigh repipe process replaces every inch of Poly-B with modern PEX-A. It's flexible, doesn't corrode, and is significantly more resistant to North Carolina's occasional hard freezes."
        }
    ];

    return (
        <section id="polyb-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 capitalize leading-tight">
                            Raleigh's Guide to <span className="text-blue-600">Polybutylene Risks</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed shadow-sm p-4 bg-white/50 rounded-xl border border-blue-100">
                            If your Raleigh home was built in the late 70s through the mid-90s, you likely have Polybutylene plumbing. Don't wait for a $50k flood to address the issue. Our certified repipe process is the permanent solution.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {signs.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-inner">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">Raleigh Repipe Considerations</h3>
                            <div className="grid md:grid-cols-2 gap-12">
                                {raleighNeighborhoods.map((factor, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <factor.icon className="w-6 h-6 text-blue-400" />
                                            <h4 className="text-lg font-bold">{factor.title}</h4>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                            {factor.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract NC State Outline or Map Graphic */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                    </div>

                    <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Protect Your Raleigh Investment</h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            A whole-house repipe increases property value and ensures long-term peace of mind. Call our Raleigh experts today for a free on-site assessment.
                        </p>
                        <a
                            href="tel:3802660944"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                        >
                            Call (380) 266-0944
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PolyBInfo;
