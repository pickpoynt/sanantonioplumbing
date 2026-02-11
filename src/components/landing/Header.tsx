import { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldCheck, Biohazard } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Hazard Info", href: "#toxic-mold-info" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-lg border-b border-red-50"
          : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${isScrolled ? "bg-red-600 rotate-0" : "bg-white/10 backdrop-blur-md border border-white/20 rotate-[-10deg] group-hover:rotate-0"}`}>
              <Biohazard className={`w-7 h-7 ${isScrolled ? "text-white" : "text-red-500"}`} />
            </div>
            <div>
              <span className={`font-heading font-bold text-2xl block leading-none tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
                Ambler
              </span>
              <span className={`text-sm font-bold uppercase tracking-[0.2em] ${isScrolled ? "text-red-600" : "text-red-400"}`}>
                Toxic Mold <span className="text-[10px] opacity-70">Specialists</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 ${isScrolled ? "text-slate-600 hover:text-red-600" : "text-white/90 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex flex-col items-end ${isScrolled ? "text-slate-900" : "text-white"}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Ambler Hotline</span>
              <a href="tel:3802660944" className="text-xl font-bold hover:text-red-500 transition-colors tracking-tighter">
                (380) 266-0944
              </a>
            </div>
            <Button className={`${isScrolled ? "bg-red-600 hover:bg-red-700 shadow-red-900/20" : "bg-white text-slate-900 hover:bg-red-50"} h-12 px-8 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-0.5`} asChild>
              <a href="#contact">Emergency Response</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white p-6 absolute top-full left-0 right-0 border-t border-slate-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold tracking-wide hover:text-red-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-800">
              <p className="text-slate-400 text-sm mb-2 uppercase tracking-widest font-bold">Ambler Hotline</p>
              <a href="tel:3802660944" className="text-2xl font-bold text-red-500">
                (380) 266-0944
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
