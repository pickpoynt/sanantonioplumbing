import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Waves, Zap, Home, Utensils, Biohazard } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Toxic black mold removal Ambler
      <span className="block text-red-500 mt-2 text-2xl md:text-4xl">Ambler Toxic Mold Specialists: Bio-Hazard Remediation</span>
    </>
  ),
  subtitle = "Don't compromise your health with Stachybotrys chartarum. Our specialized bio-hazard crews use surgical negative-air containment and industrial HEPA systems to eradicate toxic black mold from your Ambler home with clinical precision.",
  image = "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Toxic black mold removal Ambler" className="w-full h-full object-cover brightness-50" />
        {/* UNIQUE OVERLAY IMAGE: Using an industrial biohazard/grid texture overlay */}
        <div className="absolute inset-0 opacity-15 mix-blend-overlay overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Biohazard Texture Overlay"
            className="w-full h-full object-cover scale-110 animate-pulse transition-all duration-[5000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-red-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 animate-fade-in shadow-lg shadow-red-500/5">
            <Biohazard className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Ambler's Certified Bio-Hazard Response</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-red-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Hazard Protocols
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-white font-medium">Stachybotrys Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-white font-medium">1-Hour Response</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-white font-medium">OSHA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
