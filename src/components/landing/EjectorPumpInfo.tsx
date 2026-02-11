import { Droplets, AlertTriangle, Wrench, CheckCircle, Home, Shield, Clock, Zap, ThermometerSun } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Signs of Failure",
        description: "Strange grinding or humming noises, sewage odors in your basement, slow drainage from basement fixtures, visible sewage in the pump basin, or the pump running constantly are warning signs your ejector pump needs immediate attention in Augusta.",
    },
    {
        icon: Droplets,
        title: "How It Works",
        description: "Ejector pumps grind and pump sewage upward from basement drains to your main sewer line when gravity drainage isn't possible. Essential for Augusta homes with basement bathrooms, laundry rooms, or wet bars below the main sewer line.",
    },
    {
        icon: Wrench,
        title: "Common Issues",
        description: "Float switches stick from debris, impellers clog with foreign objects, motors burn out from overuse, check valves fail causing backflow, and power outages disable the system. We diagnose and fix all pump problems quickly.",
    },
];

const benefitsData = [
    "Prevent costly basement flooding and water damage",
    "Eliminate sewage backup health risks and contamination",
    "Restore full use of basement bathrooms and laundry",
    "Protect your home's foundation from sewage exposure",
    "Maintain property value with functioning plumbing",
    "Peace of mind with warranty coverage on repairs",
];

const augustaFactors = [
    {
        icon: ThermometerSun,
        title: "Augusta Climate Considerations",
        description: "Augusta's humid subtropical climate with hot summers can accelerate pump motor wear. High humidity also promotes bacterial growth in pump basins, making regular maintenance crucial for Richmond County homes.",
    },
    {
        icon: Clock,
        title: "Aging Infrastructure",
        description: "Many Augusta homes built in the 1970s-1990s have original ejector pumps nearing end of life. If your pump is over 10 years old, consider replacement before emergency failure occurs during heavy use periods.",
    },
    {
        icon: Zap,
        title: "Power Outage Protection",
        description: "Georgia storms can cause extended power outages. We recommend battery backup systems for ejector pumps to prevent sewage backup during outages, especially critical for Augusta's severe weather season.",
    },
];

const maintenanceTips = [
    "Test your pump monthly by running water in basement fixtures",
    "Listen for unusual noises that indicate mechanical problems",
    "Check for sewage odors that signal basin or seal issues",
    "Avoid flushing non-degradable items down basement drains",
    "Schedule annual professional inspection and cleaning",
    "Consider battery backup for storm season protection",
];

const EjectorPumpInfo = () => {
    return (
        <section id="pump-info" className="py-24 bg-gradient-to-br from-slate-50 to-orange-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-orange-700 text-sm font-semibold mb-4">
                        Basement Pump Systems in Augusta GA
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Understanding Ejector Pumps in Augusta Homes
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        If you have a basement bathroom, laundry, or bar in your Augusta home, you likely have a sewage ejector pump.
                        These critical systems require professional maintenance and repair to prevent basement flooding and sewage backup.
                        Our licensed plumbers serve Richmond County with expert ejector pump services.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-md">
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

                {/* Augusta-Specific Factors */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
                        Augusta-Specific Ejector Pump Considerations
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {augustaFactors.map((factor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                                        <factor.icon className="w-5 h-5 text-orange-600" />
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
                            <Shield className="w-8 h-8 text-orange-600" />
                            <h3 className="text-2xl font-heading font-bold text-slate-900">
                                Professional Service Standards
                            </h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Working with sewage requires proper safety equipment, training, and disposal procedures.
                            Our Georgia-licensed plumbers follow strict protocols to protect your health and home during every ejector pump repair in Augusta.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We test pumps under load, inspect discharge piping for clogs and damage, verify check valve operation,
                            clean pump basins thoroughly, and ensure your system meets current Georgia plumbing codes and Richmond County requirements.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Every repair includes a comprehensive system check to identify potential issues before they cause emergency failures.
                            We provide detailed documentation of all work performed and recommendations for preventive maintenance.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Why Act Fast on Pump Problems
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-orange-200 flex-shrink-0 mt-0.5" />
                                    <span className="text-white text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <p className="text-white text-sm leading-relaxed">
                                <strong className="text-orange-100">Augusta Homeowner Tip:</strong> A failing ejector pump can cause thousands of dollars in basement damage within hours.
                                Don't wait for complete failure - call at the first sign of problems to avoid costly emergency repairs and sewage cleanup.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintenance Tips Section */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
                        Ejector Pump Maintenance Tips for Augusta Homeowners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
                                </div>
                                <p className="text-slate-600">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 bg-orange-600 rounded-full px-8 py-4 shadow-lg hover:bg-orange-700 transition-colors">
                        <Home className="w-6 h-6 text-white" />
                        <span className="text-white font-bold text-lg">
                            Emergency ejector pump repair Augusta GA. Call (380) 266-0944 now.
                        </span>
                    </div>
                    <p className="text-slate-600 mt-4 text-sm">
                        Serving Augusta, Martinez, Evans, Grovetown, and all of Richmond County
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EjectorPumpInfo;


