import { AlertTriangle, Zap, Search, Construction, Activity, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "What is Partial Power?",
        description: "A partial power outage occurs when only some circuits in your home have electricity. This often points to a 'tripped' phase from Austin Energy or a failure of one of the two main hot wires entering your home.",
    },
    {
        icon: Activity,
        title: "The Danger of Fluctuating Voltage",
        description: "When power is only partially functioning, voltage can fluctuate wildly. This 'brownout' condition can permanently damage sensitive electronics like computers, refrigerators, and Austin's high-efficiency AC units.",
    },
    {
        icon: Search,
        title: "Expert Diagnostics",
        description: "Partial outages are complex. Our Riverside electricians use specialized meters to determine if the problem lies within your main breaker, a loose neutral wire, or the utility company's service lines.",
    },
];

const benefitsData = [
    "24/7 Emergency Phase Troubleshooting",
    "Main Breaker Testing & Replacement",
    "Loose Neutral & Ground Repair",
    "Utility Coordination (Austin Energy)",
    "Voltage Stabilization Audits",
    "Panel Safety Re-Certification",
];

const PartialPowerOutageInfo = () => {
    return (
        <section id="outage-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Riverside Emergency Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Half the House in the Dark?
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        If some of your lights work while others don't, you are experiencing a partial power outage.
                        Riverside Power Specialists provide rapid diagnostics to restore your home's stability.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infoData.map((info, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-8 shadow-lg border border-border hover:border-copper/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                                <info.icon className="w-7 h-7 text-copper" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                {info.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Two Column Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-xl border border-border">
                        <div className="flex items-center gap-3 mb-6">
                            <Construction className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Professional Phase Restoration
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Most Riverside homes use a split-phase 240V system. When one phase fails, any appliance dependent on that specific line will lose power.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We specialize in tracing these failures back to the source—whether it's a burned-out bus bar in your panel or a bad connection at the weatherhead.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Emergency Standards
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Zap className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
                                    <span className="text-primary-foreground/90 text-lg">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-8 py-4">
                        <Shield className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Electrical instability is a fire hazard. Call us now: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartialPowerOutageInfo;


