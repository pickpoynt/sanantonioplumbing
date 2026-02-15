import { Wrench, Shield, CheckCircle2, Clock } from "lucide-react";

const dallasFactors = [
    {
        icon: Wrench,
        title: "Clay Soil Foundation Issues",
        description: "Dallas's clay-heavy soil expands and contracts, putting immense pressure on plumbing lines. We specialize in slab leak detection and foundation-safe repairs."
    },
    {
        icon: Shield,
        title: "Extreme Weather Ready",
        description: "From scorching summers to sudden freezes, Dallas weather tests your pipes. We provide insulation and winterization services to prevent burst pipes."
    },
    {
        icon: CheckCircle2,
        title: "Hard Water Solutions",
        description: "Dallas water can be hard on fixtures. We install water softeners and filtration systems to protect your pipes and appliances from scale buildup."
    },
    {
        icon: Clock,
        title: "Rapid Response",
        description: "Dallas traffic can be tough, but our strategically located technicians ensure we can reach any part of the metroplex quickly for emergencies."
    }
];

const repairBenefits = [
    {
        title: "Clean & Professional",
        description: "We respect your home. Our plumbers wear shoe covers and use work mats to keep your space spotless."
    },
    {
        title: "Licensed & Insured",
        description: "Rest easy knowing you're protected. We are fully licensed by the State of Texas and carry comprehensive insurance."
    },
    {
        title: "Upfront Pricing",
        description: "No hourly guessing games. We provide a flat-rate price before we start, so you know exactly what to expect."
    },
    {
        title: "24/7 Availability",
        description: "Plumbing emergencies don't stick to a schedule. Neither do we. We're available nights, weekends, and holidays."
    }
];

const DallasPlumberInfo = () => {
    return (
        <section id="plumbing-info" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-4 backdrop-blur-sm">
                        Dallas Plumbing Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                        Expert Plumbing Solutions for Dallas Homes
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Don't let a plumbing issue disrupt your life. We provide fast, reliable, and honest plumbing services across the Dallas-Fort Worth area.
                        From leak detection to water heater installation, we handle it all with a smile.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {dallasFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                                Why Dallas Homeowners Choose Us
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                Finding a reliable plumber shouldn't be a hassle. We pride ourselves on communication, quality workmanship, and standing behind everything we do.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {repairBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
                                alt="Modern Plumbing Technology"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg">State-of-the-Art Diagnostics</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas - Optional/Simplified */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                        Serving Dallas, Highland Park, University Park, & Plano
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DallasPlumberInfo;
