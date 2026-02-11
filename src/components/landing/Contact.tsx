import { Phone, Mail, MapPin, Clock, ShieldCheck, Biohazard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 mb-6 font-bold uppercase tracking-wider text-sm">
                <Biohazard className="w-4 h-4" />
                Ambler Emergency Bio-Response
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Immediate Toxic Black Mold Removal in Ambler
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Don't risk your health with toxic spores. Our Montgomery County bio-hazard specialists are ready 24/7 for immediate containment and extraction.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Ambler Hotline</p>
                    <a href="tel:3802660944" className="text-2xl font-bold text-slate-900 hover:text-red-600 transition-colors">
                      (380) 266-0944
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-red-600 border border-slate-100">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Response Time</p>
                    <p className="text-xl font-bold text-slate-900">Under 60 Minutes in Ambler</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-red-600 border border-slate-100">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Service Region</p>
                    <p className="text-xl font-bold text-slate-900">Montgomery County & SE Penn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-red-900/10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Request Urgent Mold Extraction</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-red-500 transition-all outline-none font-medium"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-red-500 transition-all outline-none font-medium"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Issue Type</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-red-500 transition-all outline-none font-medium">
                    <option>Toxic Black Mold Discovery</option>
                    <option>Crawlspace/Basement Mold</option>
                    <option>Stachybotrys Extraction</option>
                    <option>Post-Remediation Lab Testing</option>
                    <option>Emergency Water Damage</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-red-500 transition-all outline-none font-medium"
                    placeholder="Describe the visible mold or health symptoms..."
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-red-900/20">
                  Request Emergency Inspection
                </Button>
                <p className="text-center text-slate-500 text-sm italic font-medium">
                  *Our Ambler technicians are available 24/7/365
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
