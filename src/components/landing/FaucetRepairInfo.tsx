import { Droplets, ShieldCheck, Hammer, Construction, Zap, Shield } from "lucide-react";

const infoData = [
    {
        icon: Droplets,
        title: "Foundation Water Damage",
        description: "A small leak from an outdoor faucet can seepage into your foundation or crawlspace, leading to structural rot and expensive repairs. Westfield's varying soil moisture levels make this a critical concern.",
    },
    {
        icon: Zap,
        title: "Frozen Pipe Emergencies",
        description: "Outdoor faucets are the first to freeze during Indiana winters. If not properly winterized or replaced with frost-proof models, they can burst and flood your home within minutes.",
    },
    {
        icon: Hammer,
        title: "Expert Installations",
        description: "Our Westfield plumbers specialize in installing anti-siphon, frost-proof hose bibs that meet the latest building codes and provide year-round protection for your property.",
    },
];

const benefitsData = [
    "Frost-Proof Hose Bib Installation",
    "Emergency Leak Repair & Mitigation",
    "Winterization & Seasonal Maintenance",
    "Anti-Siphon Valve Replacement",
    "Underground Line Leak Detection",
    "Outdoor Kitchen & Shower Plumbing",
];

const FaucetRepairInfo = () => {
    return (
        <section id="faucet-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Westfield Plumbing Experts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Professional Outdoor Faucet Repair
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Outdoor leaks are often neglected until it's too late.
                        Our Westfield team provides specialized exterior plumbing services to protect your home's integrity.
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
                                Advanced Repair Process
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Westfield's cold snaps can be devastating to exterior plumbing. We don't just patch leaks; we provide long-term solutions that modernize your home's watering system.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From precision threading to high-durability seals, we ensure every outdoor faucet we install or repair is built to withstand Indiana's unpredictable weather.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Exterior Plumbing Standards
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ShieldCheck className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                            Protect your foundation and exterior. Call today: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaucetRepairInfo;


