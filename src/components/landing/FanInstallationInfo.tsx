import { ThermometerSun, Wind, Zap, Ruler, CheckCircle2, AlertTriangle } from "lucide-react";

const infoData = [
    {
        icon: ThermometerSun,
        title: "Summer & Winter",
        description: "Fans aren't just for cooling. In winter, reverse the direction to push trapped warm air down from the ceiling, potentially lowering your heating bills by 10%.",
    },
    {
        icon: AlertTriangle,
        title: "DIY Danger",
        description: "Most standard light fixture boxes are not rated to hold the vibration and weight of a spinning fan. Installing a fan on a light box is a major falling hazard.",
    },
    {
        icon: Ruler,
        title: "Sizing Matters",
        description: "A fan that is too small won't move air effectively, while one that is too large can overwhelm a room. We help you pick the perfect blade span for your square footage.",
    },
];

const benefitsData = [
    "Reduces AC dependency",
    "Improves air circulation",
    "Quiet operation guarantee",
    "Perfectly balanced blades",
    "Smart home integration ready",
    "Safe, code-compliant wiring",
];

const FanInstallationInfo = () => {
    return (
        <section id="fan-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        Cooling Facts
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        More Than Just Air Movement
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        A properly installed ceiling fan is the most energy-efficient way to improve comfort year-round.
                        Understanding the mechanics ensures you get the most out of your investment.
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
                            <Zap className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                The Wiring Difference
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Older Spokane homes often lack ceiling light fixtures in bedrooms, or have wiring that isn't grounded.
                            Our electricians don't just hang the fan; we ensure the circuit can handle the load.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We can replace 2-wire systems, add separate switches for light and fan control,
                            and even install remote control receivers inside the canopy.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Why Go Professional?
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                        <Wind className="w-6 h-6 text-copper" />
                        <span className="text-primary-foreground font-medium text-lg">
                            Ready to feel the breeze? Schedule today: (380) 266-0944
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FanInstallationInfo;


