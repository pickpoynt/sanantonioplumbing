import { Locate, Home, PenTool, CheckCircle, Ruler, FileCheck } from "lucide-react";

const infoData = [
    {
        icon: Locate,
        title: "Strategic Locating",
        description: "Access points must be placed where they serve the entire line. We identify key junctions and long runs that require cleanouts.",
    },
    {
        icon: FileCheck,
        title: "Permits Included",
        description: "Installing a sewer cleanout involves tapping into your main line. We handle all city permits and required inspections for you.",
    },
    {
        icon: PenTool,
        title: "Modern Materials",
        description: "We replace old clay or cast iron access points with durable, root-resistant PVC components that last for decades.",
    },
];

const benefitsData = [
    "Prevents sewage backup inside home",
    "Allows for easy hydro-jetting",
    "Lowers cost of emergency plumbing",
    "Required for selling older homes",
    "Eliminates need for toilet removal",
    "Protect landscaping from digging",
];

const CleanoutInfo = () => {
    return (
        <section id="cleanout-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Plumbing Fundamentals
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        The Importance of Exterior Access
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A sewer cleanout provides a direct line to your city connection. Without it,
                        clearing a simple clog turns into a major, messy project inside your bathroom.
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
                            <Ruler className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Installation Standards
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            We install double-sweep cleanouts when possible, allowing cleaning in both directions
                            (towards the house and towards the street). This is the gold standard for sewer access.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            All installations include a concrete collar (if in driveway) or a protective
                            valve box (if in yard) to prevent damage from lawn equipment.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Homeowner Benefits
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
                            Upgrade your plumbing system. Call (380) 266-0944 today.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CleanoutInfo;


