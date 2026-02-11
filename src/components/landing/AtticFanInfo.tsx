import { ThermometerSun, Sun, DollarSign, Plug, Activity, Home } from "lucide-react";

const infoData = [
    {
        icon: ThermometerSun,
        title: "Heat Reduction",
        description: "A properly vented attic can be up to 50 degrees cooler. This prevents heat transfer into your living space and reduces the load on your AC.",
    },
    {
        icon: Sun,
        title: "Roof Protection",
        description: "Excessive heat cooks your shingles, causing them to curl and fail prematurely. Ventilation extends the lifespan of your entire roofing system.",
    },
    {
        icon: DollarSign,
        title: "Energy Savings",
        description: "By keeping the attic cooler, your air conditioner doesn't have to work as hard, potentially lowering your summer cooling bills by 20-30%.",
    },
];

const benefitsData = [
    "Extends roof shingle life",
    "Lowers AC energy consumption",
    "Prevents moisture buildup",
    "Reduces attic temperature",
    "Quiet solar options available",
    "Licensed electrical work",
];

const AtticFanInfo = () => {
    return (
        <section id="attic-info" className="py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-copper/20 border border-copper/30 rounded-full text-copper-light text-sm font-semibold mb-4">
                        The Science of Cooling
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
                        Why Ventilation Matters in AZ
                    </h2>
                    <p className="text-primary-foreground/80 text-lg">
                        In Tempe, your attic is like a thermal blanket. Once it heats up, it stays hot long after sunset.
                        Active ventilation flushes this superheated air out.
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
                            <Plug className="w-8 h-8 text-copper" />
                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                Electric vs. Solar
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Standard electric gable fans are powerful and reliable, perfect for large attics.
                            However, they do use electricity.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            New solar attic fans are completely off-grid. They speed up as the sun gets stronger—matching
                            your ventilation needs perfectly without costing a dime to run. We install both.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 lg:p-10 shadow-xl">
                        <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-6">
                            Installation Benefits
                        </h3>
                        <ul className="space-y-4">
                            {benefitsData.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Activity className="w-6 h-6 text-copper flex-shrink-0 mt-0.5" />
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
                            Protect your home from the heat. Call (380) 266-0944.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AtticFanInfo;


