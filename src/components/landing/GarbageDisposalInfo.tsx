import { Wrench, AlertTriangle, Settings, CheckCircle, Home, Shield, Clock, ThermometerSun, FileText, DollarSign } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Humming Disposal Diagnosis",
        description: "A humming garbage disposal in Signal Mountain homes typically indicates a jammed flywheel or motor issue. Our expert technicians quickly diagnose and fix humming disposals, restoring your kitchen's functionality.",
    },
    {
        icon: Wrench,
        title: "Expert Repair Services",
        description: "From humming motors to complete jams, our Signal Mountain team handles all disposal repairs. We assess whether repair or replacement is more cost-effective for your specific situation and budget.",
    },
    {
        icon: Settings,
        title: "Professional Installation",
        description: "Complete garbage disposal installation and replacement services for Signal Mountain kitchens. We ensure proper mounting, electrical connections, plumbing integration, and Tennessee code compliance.",
    },
];

const benefitsData = [
    "Eliminates persistent kitchen odors and bacteria",
    "Prevents drain clogs and plumbing emergencies",
    "Reduces food waste and improves sanitation",
    "Increases kitchen efficiency and home value",
    "Extends the life of your plumbing system",
    "Same-day service for Signal Mountain residents",
];

const signalMountainFactors = [
    {
        icon: ThermometerSun,
        title: "Tennessee Climate Impact",
        description: "Signal Mountain's humid Tennessee climate can affect disposal performance and increase odor issues. We provide maintenance solutions designed for local conditions to keep your disposal fresh and functional year-round.",
    },
    {
        icon: Clock,
        title: "Mountain Living Challenges",
        description: "Signal Mountain homes often have unique plumbing configurations due to elevation changes. Our experienced technicians understand local installation requirements and ensure proper drainage for mountain properties.",
    },
    {
        icon: FileText,
        title: "Hamilton County Codes",
        description: "Signal Mountain follows Hamilton County plumbing codes and permit requirements. We handle all code compliance, permit processing, and inspections to ensure your disposal installation meets Tennessee standards.",
    },
];

const maintenanceTips = [
    "Run cold water while using the disposal to solidify fats",
    "Avoid putting fibrous materials like corn husks down the disposal",
    "Grind citrus peels monthly to reduce odors naturally",
    "Clean the rubber splash guard regularly to prevent bacteria",
    "Never put grease, coffee grounds, or eggshells in the disposal",
    "Schedule annual professional inspection and cleaning",
];

const GarbageDisposalInfo = () => {
    return (
        <section id="disposal-info" className="py-24 bg-gradient-to-br from-slate-50 to-green-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold mb-4">
                        Fix humming garbage disposal Signal Mountain
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Professional Garbage Disposal Services in Signal Mountain
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Is your garbage disposal humming but not working? We specialize in fixing humming disposals, jammed units, leaks, and all disposal problems in Signal Mountain, Tennessee.
                        Our licensed plumbers provide expert garbage disposal repair, installation, and maintenance services for Signal Mountain homes and businesses.
                        We serve Hamilton County with reliable disposal solutions that keep your kitchen running smoothly.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 shadow-md">
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

                {/* Signal Mountain-Specific Factors */}
                <div className="mb-16">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8 text-center">
                        Signal Mountain-Specific Disposal Considerations
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {signalMountainFactors.map((factor, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                        <factor.icon className="w-5 h-5 text-green-600" />
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
                            <Shield className="w-8 h-8 text-green-600" />
                            <h3 className="text-2xl font-heading font-bold text-slate-900">
                                Professional Service Standards
                            </h3>
                        </div>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Garbage disposal work requires proper electrical connections, plumbing integration, and code compliance.
                            Our licensed plumbers follow strict safety protocols and local building codes to ensure your disposal installation or repair meets all requirements.
                        </p>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We test all disposals under load conditions, verify proper drainage, check electrical connections,
                            and ensure your unit operates quietly and efficiently. Every installation includes comprehensive testing
                            and comes with our satisfaction guarantee.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Our workmanship is backed by warranties and meets manufacturer requirements to preserve your disposal warranty.
                            We provide detailed documentation of all work performed and recommendations for ongoing maintenance.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Why Professional Service Matters
                        </h3>
                        <ul className="space-y-4 mb-8">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-0.5" />
                                    <span className="text-white text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <p className="text-white text-sm leading-relaxed">
                                <strong className="text-green-100">Signal Mountain Homeowner Tip:</strong> DIY disposal repairs can void warranties and create safety hazards.
                                Professional installation ensures proper electrical connections, plumbing integration, and code compliance for years of trouble-free operation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintenance Tips Section */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 text-center">
                        Garbage Disposal Maintenance Tips for Signal Mountain Homeowners
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {maintenanceTips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                                </div>
                                <p className="text-slate-600">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cost Information */}
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <div className="text-center mb-8">
                        <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            Garbage Disposal Service Costs in Signal Mountain
                        </h3>
                        <p className="text-slate-600">
                            Transparent pricing for all garbage disposal services
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Basic Repair</h4>
                            <div className="text-2xl font-bold text-green-600 mb-2">$125 - $250</div>
                            <p className="text-slate-600 text-sm">Simple jam clearing and adjustment</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Complete Installation</h4>
                            <div className="text-2xl font-bold text-green-600 mb-2">$300 - $500</div>
                            <p className="text-slate-600 text-sm">New disposal with plumbing and electrical</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Replacement Service</h4>
                            <div className="text-2xl font-bold text-green-600 mb-2">$200 - $400</div>
                            <p className="text-slate-600 text-sm">Remove old unit, install new disposal</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-600 italic">
                            *Prices include all materials, labor, and permits. Free detailed estimates provided for your specific project.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 bg-green-600 rounded-full px-8 py-4 shadow-lg hover:bg-green-700 transition-colors">
                        <Home className="w-6 h-6 text-white" />
                        <span className="text-white font-bold text-lg">
                            Fix humming garbage disposal Signal Mountain. Call (380) 266-0944 now.
                        </span>
                    </div>
                    <p className="text-slate-600 mt-4 text-sm">
                        Serving Signal Mountain, Walden, Red Bank, and all of Hamilton County
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GarbageDisposalInfo;
