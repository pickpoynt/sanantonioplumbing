import { AlertOctagon, CheckSquare, Zap, Waves, ShieldAlert, CheckCircle2, Droplets, Hammer } from "lucide-react";

const infoData = [
    {
        icon: Waves,
        title: "Primary Pump Burnout",
        description: "In high-water-table areas of Peoria like West Bluff, original sump pumps work overtime. Eventually, the motor fails under the constant strain of Illinois's seasonal rains.",
    },
    {
        icon: Zap,
        title: "Float Switch Failures",
        description: "The float switch is the #1 cause of basement flooding in Peoria. Debris or mechanical wear can trap the switch, preventing the pump from activating exactly when you need it most.",
    },
    {
        icon: ShieldAlert,
        title: "Storm-Induced Outages",
        description: "Heavy Peoria storms often knock out local power. Without a battery backup, your primary sump pump is useless. Our systems include high-capacity backups for total security.",
    },
];

const benefitsData = [
    "Prevents thousands in flood damage",
    "Eliminates basement mold & mildew",
    "Ensures zero-noise silent operation",
    "Increases Peoria property resale value",
    "Protects finished basement flooring",
    "Lifetime battery technology included",
];

const SumpPumpInfo = () => {
    return (
        <section id="sump-pump-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4 text-center">
                        Peoria Water Management Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                        Why Peoria Sump Pumps Fail
                    </h2>
                    <p className="text-slate-300 text-lg">
                        A sump pump is your Peoria home's only defense against rising ground water. Understanding the common points of failure—from float jams to power loss—is essential for a dry, healthy basement.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 rounded-xl p-8 shadow-lg border border-slate-800 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                                <info.icon className="w-7 h-7 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-3">
                                {info.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-900 rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-800">
                        <div className="flex items-center gap-3 mb-6 font-center justify-center">
                            <Droplets className="w-8 h-8 text-blue-400" />
                            <h3 className="text-2xl font-heading font-bold text-white">
                                Intelligent Backup Systems
                            </h3>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            We assume nothing. Every Peoria installation includes a diagnostic test of your current drainage pit. We ensure the basin is clear of silt and that the discharge line is unobstructed.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Our smart systems notify you if the power goes out, monitoring battery levels and pump cycles via Wi-Fi, so you're protected even when you're away from your Peoria property.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">
                            Benefits of Modern Pumping
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckSquare className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                                    <span className="text-blue-50 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
                        <Hammer className="w-6 h-6 text-blue-400" />
                        <span className="text-white font-medium text-lg">
                            Protect your Peoria basement today. Call (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SumpPumpInfo;
