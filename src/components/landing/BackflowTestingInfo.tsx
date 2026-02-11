import { Droplets, Shield, Wrench, Clock, Settings, AlertTriangle } from "lucide-react";

const BackflowTestingInfo = () => {
    return (
        <section id="backflow-info" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
                            Professional Backflow Testing Services in Boise, Idaho
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Boise homes and businesses deserve clean, safe water systems. Our certified backflow testing services protect your water supply from contamination while meeting all Idaho Department of Environmental Quality requirements and local municipal codes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Water Safety Protection
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Backflow prevention devices protect your drinking water from contamination by preventing reverse water flow that could introduce pollutants, chemicals, or bacteria into your clean water supply.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Shield className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Certified Testing
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Our technicians are certified backflow assembly testers (BAT) who follow strict EPA and state guidelines. We provide accurate testing with detailed reports that meet all regulatory requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-slate-700">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-slate-100 p-3 rounded-lg">
                                    <Wrench className="w-8 h-8 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Comprehensive Services
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        From initial installation to annual testing and maintenance, we handle all aspects of backflow prevention. Our services include device selection, installation, testing, repair, and replacement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-emerald-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-emerald-100 p-3 rounded-lg">
                                    <Settings className="w-8 h-8 text-emerald-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Device Expertise
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We work with all types of backflow prevention devices including reduced pressure zone (RPZ) assemblies, pressure vacuum breakers (PVB), and double check valve assemblies (DCVA) for various applications.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <Clock className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Timely Compliance
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We understand the importance of meeting annual testing deadlines. Our efficient scheduling and fast turnaround times ensure your property remains compliant with Boise municipal requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
                                        Risk Prevention
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Regular backflow testing prevents costly water contamination incidents, protects public health, and helps avoid regulatory fines. Proactive maintenance is far more economical than emergency remediation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional unique content */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 font-heading text-center">
                            Understanding Backflow Risks in Boise's Water Systems
                        </h3>
                        <div className="prose prose-lg max-w-none text-slate-700">
                            <p className="mb-4">
                                Boise, Idaho's water infrastructure serves a growing metropolitan area with diverse commercial and residential properties. The city's water system faces unique challenges that make backflow prevention particularly critical. Many older properties in Boise still operate with legacy irrigation systems, commercial equipment, and industrial processes that create significant cross-connection risks.
                            </p>
                            <p className="mb-4">
                                <strong>Idaho's regulatory environment</strong> requires strict adherence to backflow prevention standards. The Idaho Department of Environmental Quality mandates annual testing of all backflow prevention devices, with specific requirements for different property types and risk categories. These regulations ensure Boise's water supply remains protected from contamination sources.
                            </p>
                            <p className="mb-4">
                                <strong>The seasonal factor</strong> is particularly important in Boise's climate. The city's hot summers drive extensive irrigation system usage, creating pressure fluctuations that increase backflow risks. Commercial properties with lawn care services, golf courses, and agricultural operations face year-round exposure to potential contamination sources.
                            </p>
                            <p>
                                <strong>Modern development pressures</strong> also impact backflow management. As Boise continues expanding with new commercial developments, industrial facilities, and multi-family housing, the complexity of water systems increases. New construction often requires specialized backflow prevention solutions tailored to specific applications and risk assessments.
                            </p>
                        </div>
                    </div>

                    {/* Process section */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-8 font-heading text-center">
                            Our Backflow Testing Process
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Inspection</h4>
                                <p className="text-blue-100 text-sm">We locate and inspect your backflow prevention device, checking for proper installation and accessibility.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Testing</h4>
                                <p className="text-blue-100 text-sm">Our certified technician performs comprehensive testing using calibrated equipment to verify proper operation.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Reporting</h4>
                                <p className="text-blue-100 text-sm">We provide detailed test results and compliance documentation for your records and municipal submission.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">Maintenance</h4>
                                <p className="text-blue-100 text-sm">If repairs are needed, we provide immediate service or schedule follow-up maintenance to restore compliance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BackflowTestingInfo;
