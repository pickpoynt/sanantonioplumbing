import { AlertTriangle, Home, Construction, BadgeInfo, CheckCircle, Search } from "lucide-react";

const infoData = [
    {
        icon: AlertTriangle,
        title: "Signs of Failure",
        description: "Frequent backups, foul sewer odors, cockroach infestations, and cracks in your foundation are all signs your cast iron drains are collapsing.",
    },
    {
        icon: Construction,
        title: "The Tunneling Option",
        description: "Tunneling allows us to replace all piping from the exterior. Your family stays in the home, and your expensive interior flooring remains untouched.",
    },
    {
        icon: BadgeInfo,
        title: "Why Cast Iron Fails",
        description: "Hydrogen sulfide gas from waste turns into sulfuric acid, eating the bottom of the pipe (channeling) until it dissolves completely into the soil.",
    },
];

const benefitsData = [
    "Prevents foundation settling",
    "Eliminates sewer odors",
    "Increases property value",
    "Passes hydrostatic tests",
    "50-year PVC warranty",
    "Trenchless options available",
];

const CastIronInfo = () => {
    return (
        <section id="cast-iron-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Underground Expertise
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Understanding Hidden Pipe Damage
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        What you can't see can hurt your home. Cast iron pipes installed before the mid-1970s
                        have reached the end of their life cycle. We diagnose and fix the problem for good.
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
                            <Search className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Testing & Isolation
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We start with a static isolation test to determine if the system holds water.
                            If leakage is detected, we use video cameras and locating sondes to pinpoint
                            exact breakage points.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            This precise diagnostic process ensures we only repair what is broken,
                            saving you money compared to a full system replacement if it's not needed.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Benefits of Modern PVC
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                        <Home className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Schedule your free video inspection today: (380) 266-0944
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CastIronInfo;


