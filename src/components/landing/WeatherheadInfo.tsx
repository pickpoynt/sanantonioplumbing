import { AlertTriangle, CloudLightning, Zap, Construction, Cable, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Storm Damage Risks",
        description: "High winds and fallen branches in Tulsa can easily rip your service mast from the wall, leaving live wires exposed and your power disconnected.",
    },
    {
        icon: CloudLightning,
        title: "Immediate Safety Hazards",
        description: "A damaged weatherhead allows water to enter your electrical panel, leading to corrosion, short circuits, and a high risk of electrical fires during Oklahoma rains.",
    },
    {
        icon: Zap,
        title: "Code Compliance",
        description: "Tulsa electrical codes require specific mounting heights and materials for service entrances. We ensure your weatherhead repair meets all local standards for a fast inspection.",
    },
];

const benefitsData = [
    "24/7 Emergency Storm Repair",
    "Service Mast Straightening",
    "Water Entry Seal Protection",
    "Utility Company Coordination",
    "Temporary Power Solutions",
    "Insurance Claim Documentation",
];

const WeatherheadInfo = () => {
    return (
        <section id="weatherhead-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Safety First
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Urgent Weatherhead & Service Mast Repairs
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        When the Oklahoma weather hits hard, your home's electrical entry point is most vulnerable.
                        Tulsa Weatherhead Experts provide rapid, code-compliant repairs to get your lights back on safely.
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
                                Why Immediate Repair Matters
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            A leaning mast or pulling weatherhead isn't just an eyesore—it's a ticking clock. The utility company won't reconnect power to a damaged entrance, and heavy rain can channel water directly into your breaker box.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We specialize in structural reinforcement and waterproof sealing to ensure your electrical entrance stays secure through Tulsa's toughest storms.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Storm Recovery Services
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Cable className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                            Don't touch downed wires. Call for emergency service: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeatherheadInfo;


