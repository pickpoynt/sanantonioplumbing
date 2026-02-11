import { CheckCircle2, MapPin, Truck, Shield, Droplets, AlertTriangle, FileCheck, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const SepticTankPumpingInfo = () => {
    const septicServices = [
        {
            title: "Routine Septic Pumping",
            description: "Experts recommend pumping your Bismarck septic tank every 3-5 years. We remove accumulated sludge and scum to prevent system failure."
        },
        {
            title: "Thorough Tank Cleaning",
            description: "We don't just pump; we clean. Our high-capacity vacuum trucks ensure your tank is completely cleared of all solid waste and debris."
        },
        {
            title: "Visual System Inspection",
            description: "Every pump includes a free visual inspection of your tank's baffles and overall condition to identify potential issues before they become emergencies."
        },
        {
            title: "Filter Cleaning & Maintenance",
            description: "Cleaning your effluent filter is critical for protecting your drain field. We include filter service with every routine pumping job."
        }
    ];

    const bismarckFactors = [
        {
            icon: Droplets,
            title: "High Water Table Service",
            description: "Bismarck's local geography can affect drainage. We specialize in managing tanks in areas with high water tables or clay-heavy soils."
        },
        {
            icon: FileCheck,
            title: "Burleigh County Compliance",
            description: "We ensure all pumping and disposal strictly follows Burleigh County health department regulations and North Dakota environmental standards."
        },
        {
            icon: AlertTriangle,
            title: "Emergency Backups",
            description: "Sewage backups don't wait for business hours. Our Bismarck team is ready for rapid response to clear blockages and prevent home damage."
        },
        {
            icon: MapPin,
            title: "Lincoln & Mandan Coverage",
            description: "Based in Bismarck, we also provide priority septic pumping services to neighbors in Lincoln, Mandan, and rural Burleigh County."
        }
    ];

    return (
        <section id="septic-info" className="py-24 bg-gradient-to-br from-slate-50 to-emerald-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-700 text-sm font-semibold mb-4">
                        Septic tank pumping Bismarck ND
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Professional Septic Tank Pumping & Cleaning in Bismarck
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Need reliable septic service? We provide expert septic tank pumping, cleaning, and inspections for homeowners and businesses across Bismarck, ND.
                        Don't wait for a backup—our professional team ensures your system stays healthy and compliant with local North Dakota regulations.
                    </p>
                </div>

                {/* Service Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Truck className="w-6 h-6 text-emerald-600" />
                            Comprehensive Pumping Solutions
                        </h3>
                        <div className="space-y-6">
                            {septicServices.map((req, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">{req.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">{req.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2 bg-white rounded-2xl p-2 shadow-lg rotate-1 border border-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                            alt="Professional Septic Tank Pumping Bismarck"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Local Factors */}
                <div className="mb-20">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-10 text-center">
                        Why Bismarck Homeowners Choose Our Septic Team
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bismarckFactors.map((factor, index) => {
                            const Icon = factor.icon;
                            return (
                                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6 text-emerald-600" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{factor.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {factor.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Safety/Maintenance Tip */}
                <div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mb-16 shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            Protect Your Drain Field
                        </h3>
                        <p className="text-emerald-100 mb-8 leading-relaxed">
                            A failed drain field can cost over $15,000 to replace in North Dakota. Regular pumping is the single most important maintenance step you can take to prevent solids from clogging your leach field and causing system failure.
                        </p>
                        <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold border-none" asChild>
                            <a href="tel:3802660944" className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Schedule Pumping: (380) 266-0944
                            </a>
                        </Button>
                    </div>

                    {/* Decorative Patterns */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>

                {/* Cost Information */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <div className="text-center mb-8">
                        <Hammer className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            Estimated Septic Pumping Costs in Bismarck
                        </h3>
                        <p className="text-slate-600">
                            Professional cleaning and disposal pricing
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Standard Tank (1k Gal)</h4>
                            <div className="text-2xl font-bold text-emerald-600 mb-2">$350 - $550</div>
                            <p className="text-slate-600 text-sm">Routine pumping with standard access</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Large Tank (1.5k+ Gal)</h4>
                            <div className="text-2xl font-bold text-emerald-600 mb-2">$550 - $850</div>
                            <p className="text-slate-600 text-sm">Increased waste volume and disposal fees</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Deep Tank / Excavation</h4>
                            <div className="text-2xl font-bold text-emerald-600 mb-2">$500 - $900</div>
                            <p className="text-slate-600 text-sm">If lids are buried deep or requires digging</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-500 italic text-sm">
                            *Prices are estimates based on local Bismarck market rates. Factors include tank size, disposal fees, and lid accessibility.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SepticTankPumpingInfo;
