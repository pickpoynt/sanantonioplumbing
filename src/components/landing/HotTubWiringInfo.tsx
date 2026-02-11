import { CheckCircle2, MapPin, Zap, Shield, Thermometer, AlertTriangle, FileCheck, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HotTubWiringInfo = () => {
    const electricalRequirements = [
        {
            title: "Dedicated Circuit Installation",
            description: "Des Moines electrical code requires a dedicated 50-60 amp circuit for most hot tubs to prevent overloads and ensure safe operation."
        },
        {
            title: "GFCI Protection",
            description: "A Ground Fault Circuit Interrupter (GFCI) disconnect is mandatory for all spa installations to protect you from electrical shock."
        },
        {
            title: "Emergency Shut-off Switch",
            description: "An emergency disconnect must be installed within sight of the hot tub but at least 5 feet away, per National Electrical Code (NEC)."
        },
        {
            title: "Proper Bonded Grounding",
            description: "Essential for safety, ensuring all metal parts are bonded to avoid potential shock hazards in wet environments."
        }
    ];

    const desMoinesFactors = [
        {
            icon: Thermometer,
            title: "Winter Freeze Prevention",
            description: "Iowa winters are harsh. We ensure your wiring includes freeze protection and reliable heater connections to prevent pipe bursts."
        },
        {
            icon: FileCheck,
            title: "Permit Management",
            description: "We handle all electrical permits required by the City of Des Moines and surrounding Polk County areas for your new spa."
        },
        {
            icon: AlertTriangle,
            title: "Old Home Upgrades",
            description: "Many older Des Moines homes need panel upgrades to handle the high power load of modern hot tubs. We assess and upgrade your service."
        },
        {
            icon: MapPin,
            title: "Local Code Compliance",
            description: "Our work strictly adheres to Des Moines amendments to the NEC, ensuring you pass inspection the first time."
        }
    ];

    return (
        <section id="hottub-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                {/* Main Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-4">
                        Hot tub electrician near me Des Moines IA
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
                        Expert Hot Tub & Spa Wiring in Des Moines
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Installing a new hot tub? Don't risk DIY wiring. We provide licensed, code-compliant electrical hookups for hot tubs, spas, and jacuzzis throughout Des Moines and Polk County.
                        Ensure your relaxation time is safe and worry-free with our professional installation services.
                    </p>
                </div>

                {/* Electrical Requirements Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                            <Zap className="w-6 h-6 text-blue-600" />
                            Critical Wiring Requirements
                        </h3>
                        <div className="space-y-6">
                            {electricalRequirements.map((req, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
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
                            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80"
                            alt="Professional Hot Tub Wiring Installation"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Local Factors */}
                <div className="mb-20">
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-10 text-center">
                        Why Des Moines Homeowners Trust Our Spa Electricians
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {desMoinesFactors.map((factor, index) => {
                            const Icon = factor.icon;
                            return (
                                <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-6 h-6 text-blue-600" />
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

                {/* Safety Tip */}
                <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden mb-16 shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <Shield className="w-16 h-16 mx-auto mb-6 text-blue-300" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                            Des Moines Safety Warning
                        </h3>
                        <p className="text-blue-100 mb-8 leading-relaxed">
                            Water and electricity are a deadly combination. Never attempt to wire a hot tub yourself using standard extension cords or existing outdoor outlets.
                            Des Moines code explicitly requires hardwired connections with specific safety disconnects to prevent electrocution hazards.
                        </p>
                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold border-none" asChild>
                            <a href="tel:3802660944" className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                Safety Inspection: (380) 266-0944
                            </a>
                        </Button>
                    </div>

                    {/* Decorative Patterns */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>

                {/* Cost Information */}
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-slate-200 mb-16">
                    <div className="text-center mb-8">
                        <Hammer className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                            Hot Tub Installation Costs in Des Moines
                        </h3>
                        <p className="text-slate-600">
                            Professional electrical hookup pricing
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Standard Hookup</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$800 - $1,500</div>
                            <p className="text-slate-600 text-sm">Close proximity to panel, simple run</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Complex Install</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$1,500 - $3,000</div>
                            <p className="text-slate-600 text-sm">Long conduit runs, trenching required</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
                            <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Panel Upgrade</h4>
                            <div className="text-2xl font-bold text-blue-600 mb-2">$1,500 - $4,000</div>
                            <p className="text-slate-600 text-sm">If current service ampacity is insufficient</p>
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-slate-500 italic text-sm">
                            *Prices vary based on distance from panel, trenching needs, and existing electrical capacity. Call for a free customized quote.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotTubWiringInfo;
