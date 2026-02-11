import { Zap, ShieldCheck, Power, Construction, Settings, Shield } from "lucide-react";

const infoData = [
    {
        icon: Power,
        title: "Safe Power Transfer",
        description: "A generator interlock kit is the safest and most affordable way to connect your portable generator to your home's electrical panel. It prevents dangerous backfeeding and ensures utility company workers' safety.",
    },
    {
        icon: Settings,
        title: "Whole-Home Access",
        description: "Unlike manual transfer switches that limit you to a few circuits, an interlock kit allows you to power anything in your house by simply managing the breakers in your main panel.",
    },
    {
        icon: Zap,
        title: "Hurricane Ready",
        description: "In Cypress, Texas, power outages from Gulf storms are a reality. Be prepared to keep your AC, well pump, and refrigerator running when the grid goes down.",
    },
];

const benefitsData = [
    "Professional Interlock Plate Install",
    "Power Inlet Box (50A or 30A)",
    "Custom Generator Cords",
    "Panel Safety Inspections",
    "Backfeed Prevention Systems",
    "Emergency Backup Consultation",
];

const GeneratorInfo = () => {
    return (
        <section id="generator-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Backup Power Specialists
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Reliable Portable Generator Connection
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        Don't wait for the next Texas storm. Cypress Generator Pros provide expert interlock kit installations that make backup power simple, safe, and legal.
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
                                Why Choose an Interlock Over a Transfer Switch?
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            A traditional transfer switch requires you to pick 6-10 specific circuits. An interlock kit gives you the flexibility to choose what to power on the fly.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            It's thousands of dollars cheaper than a standby generator while providing similar convenience. Our Cypress electricians ensure the mechanical interlock is perfectly aligned for your specific panel brand.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Our Installation Package
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
                            Ready for the next outage? Call for a free estimate: (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeneratorInfo;


