import { Droplets, AlertTriangle, Wrench, CheckCircle, Home, Shield, Clock, ThermometerSun, FileText, DollarSign } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Signs of Hidden Leaks",
        description: "Unexplained high water bills, damp spots on walls or floors, mold growth, musty odors, and the sound of running water when all fixtures are off are common indicators of hidden water leaks in Albuquerque homes and businesses.",
    },
    {
        icon: Droplets,
        title: "Detection Methods",
        description: "We use advanced leak detection technology including acoustic listening devices, thermal imaging cameras, pressure testing equipment, and electronic leak locators to pinpoint the exact location of water leaks without damaging your property.",
    },
    {
        icon: Wrench,
        title: "Common Leak Locations",
        description: "In Albuquerque, common leak sources include underground supply lines, slab foundation pipes, irrigation systems, water heater connections, and aging galvanized or copper plumbing that deteriorates over time due to mineral buildup and ground movement.",
    },
];

const benefitsData = [
    "Prevents costly water damage to your property",
    "Reduces water bills and waste",
    "Protects against mold and structural damage",
    "Preserves property value and foundation integrity",
    "Minimizes disruption with non-invasive detection",
    "Provides accurate leak location and repair estimates",
];

const albuquerqueFactors = [
    {
        icon: ThermometerSun,
        title: "Desert Climate Challenges",
        description: "Albuquerque's arid climate with extreme temperature fluctuations can cause pipe expansion and contraction, leading to stress cracks and joint failures. Our detection methods account for these unique desert conditions.",
    },
    {
        icon: Clock,
        title: "Aging Infrastructure",
        description: "Many Albuquerque homes built in the 1950s-1980s have original plumbing systems approaching end-of-life. Older galvanized steel and polybutylene pipes are particularly susceptible to failure in our region's mineral-rich water.",
    },
    {
        icon: FileText,
        title: "Water Quality Impact",
        description: "Albuquerque's water contains minerals that can build up in pipes over time, reducing diameter and increasing pressure. This mineral scaling contributes to pipe deterioration and makes leak detection more challenging but necessary.",
    },
];

const maintenanceTips = [
    "Monitor your water meter monthly for unexplained usage",
    "Check water bills for sudden increases indicating hidden leaks",
    "Listen for running water sounds when all fixtures are off",
    "Watch for wet spots or unusually green patches in your yard",
    "Schedule annual professional leak detection inspections",
    "Keep records of your plumbing system's age and materials",
];

const LeakDetectionInfo = () => {
    return (
        <section id="leak-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-4">
                        Professional Leak Detection in Albuquerque NM
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Expert Leak Detection Services in Albuquerque
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        If you suspect a water leak in your Albuquerque home or business, professional leak detection is essential for protecting your property.
                        Our licensed plumbers provide advanced leak detection services using cutting-edge technology to locate hidden water leaks accurately.
                        We serve Bernalillo County with expert leak detection solutions for residential and commercial properties.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-md">
                                <info.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                                {info.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Albuquerque-Specific Factors */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
                        Albuquerque-Specific Leak Detection Considerations
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {albuquerqueFactors.map((factor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                        <factor.icon className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h4 className="font-heading font-bold text-slate-900">{factor.title}</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {factor.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-heading font-bold text-slate-900">
                                Professional Detection Standards
                            </h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Leak detection requires specialized equipment and training to locate hidden water sources without causing property damage.
                            Our licensed plumbers use advanced acoustic listening devices, thermal imaging technology, and pressure testing equipment to pinpoint leaks accurately.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We conduct comprehensive system analysis including water pressure testing, flow monitoring, and pipe condition assessment.
                            Our detection process identifies leak location, severity, and underlying causes to provide complete repair solutions.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Every detection includes detailed reporting with photographic documentation and repair recommendations.
                            We work with insurance companies and provide the documentation needed for claim processing.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Why Early Detection Matters
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0 mt-0.5" />
                                    <span className="text-white text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <p className="text-white text-sm leading-relaxed">
                                <strong className="text-blue-100">Albuquerque Property Owner Tip:</strong> Undetected water leaks can cause thousands of dollars in damage and significantly increase utility costs.
                                Professional leak detection pays for itself by preventing costly repairs and water waste.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintenance Tips Section */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
                        Leak Prevention Tips for Albuquerque Property Owners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                </div>
                                <p className="text-slate-600">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cost Information */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <div className="text-center mb-8">
                        <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            Leak Detection Costs in Albuquerque
                        </h3>
                        <p className="text-slate-600">
                            Transparent pricing for all leak detection services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Basic Detection</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$150 - $300</div>
                            <p className="text-slate-600 text-sm">Initial leak location assessment</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Advanced Detection</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$300 - $600</div>
                            <p className="text-slate-600 text-sm">Comprehensive system analysis</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Emergency Service</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$100 Trip Fee</div>
                            <p className="text-slate-600 text-sm">24/7 emergency response</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-600 italic">
                            *Prices include equipment use and initial consultation. Detailed repair estimates provided separately.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 bg-blue-600 rounded-full px-8 py-4 shadow-lg hover:bg-blue-700 transition-colors">
                        <Home className="w-6 h-6 text-white" />
                        <span className="text-white font-bold text-lg">
                            Leak detection Albuquerque NM. Call (380) 266-0944 now.
                        </span>
                    </div>
                    <p className="text-slate-600 mt-4 text-sm">
                        Serving Albuquerque, Rio Rancho, Bernalillo, and all of Bernalillo County
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LeakDetectionInfo;
