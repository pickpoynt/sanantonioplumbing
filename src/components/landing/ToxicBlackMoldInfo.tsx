import { Shield, AlertTriangle, Wind, CheckCircle2, Home, Crosshair } from "lucide-react";

const ToxicBlackMoldInfo = () => {
    return (
        <section id="toxic-mold-info" className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Toxic Black Mold Removal Ambler: Montgomery County Specialists
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Ambler's historic homes and humid summers create the perfect environment for Stachybotrys chartarum—the infamous toxic black mold. We provide medical-grade remediation that focuses on total spore elimination and permanent moisture control.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="Toxic black mold removal Ambler"
                                className="w-full h-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                Stachybotrys chartarum Protection
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Unlike common mildew, toxic black mold produces mycotoxins that can lead to severe respiratory issues and neurological symptoms. In Ambler's older basements, this mold can thrive quietly behind drywall and under floorboards for years.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-red-100 p-2 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Mycotoxin Neutralization</h4>
                                        <p className="text-slate-500 text-sm">Eliminating toxic air particulates.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-red-100 p-2 rounded-lg">
                                        <Crosshair className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Precision Containment</h4>
                                        <p className="text-slate-500 text-sm">Zero cross-contamination policy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-red-100 shadow-xl shadow-red-900/5 hover:-translate-y-2 transition-all duration-300">
                            <Wind className="w-12 h-12 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Negative Air Pressure</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "We utilize industrial air movers to create a vacuum effect, ensuring no toxic spores escape into your living space during the removal process."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-xl shadow-red-900/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                            <Home className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:rotate-12 transition-transform duration-500" />
                            <Shield className="w-12 h-12 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Medical-Grade HEPA</h3>
                            <p className="text-red-50/90 leading-relaxed italic">
                                "Three-stage HEPA filtration systems that trap particulates as small as 0.3 microns, leaving your Ambler air cleaner than before."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white border border-red-100 shadow-xl shadow-red-900/5 hover:-translate-y-2 transition-all duration-300">
                            <CheckCircle2 className="w-12 h-12 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Post-Remediation Lab Testing</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "We don't guess—we verify. Every project includes independent laboratory air quality testing to certify your home is safe."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToxicBlackMoldInfo;
