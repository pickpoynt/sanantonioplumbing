import { AlertTriangle, Home, Zap, Construction, Cable, Shield } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Aluminum Wiring Risks",
        description: "Homes built before the mid-70s often used aluminum wiring. This expands and contracts differently than copper, leading to loose connections and arcing fire hazards.",
    },
    {
        icon: Home,
        title: "HUD Code vs NEC",
        description: "Mobile homes are governed by federal HUD standards, not just the local NEC. We are certified to work on HUD systems, ensuring your warranty and insurance stay valid.",
    },
    {
        icon: Zap,
        title: "Pedestal Power",
        description: "Often the problem isn't inside your home, but at the park pedestal. We have the tools to test the utility feed and repair the specific breakers found outdoor.",
    },
];

const benefitsData = [
    "Park management coordination",
    "Aluminum-to-copper pigtailing",
    "Mobile home panel swaps",
    "Underbelly wire repair",
    "Heat tape installation",
    "Senior park discounts",
];

const MobileHomeInfo = () => {
    return (
        <section id="mobile-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Safety First
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Specialized Care for Manufactured Homes
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Mobile homes have unique electrical challenges, from hollow walls to chassis grounding.
                        Henderson Mobile Electric understands the specific needs of your home.
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
                                The Grounding Difference
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Unlike site-built homes, your mobile home chassis needs to be properly bonded to the electrical ground.
                            Lost neutrals or poor grounding can cause shocks when touching metal appliances.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We perform a full bonding check with every service call to ensure your home's metal frame is safe.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Expertise Includes
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
                            Don't guess with wiring. Call the pros: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileHomeInfo;


