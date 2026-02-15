import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DallasPlumberInfo from "@/components/landing/DallasPlumberInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dallas Plumber Dallas</title>
        <meta name="description" content="Dallas Plumber Dallas. Expert plumbing repair and installation in Dallas, TX. 24/7 emergency service, leak detection, and drain cleaning. Call (877) 792-1410!" />
        <meta name="keywords" content="Dallas Plumber Dallas, Dallas plumbers, emergency plumber Dallas, water heater repair Dallas, leak detection Dallas" />
        <link rel="canonical" href="https://dallas-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dallas Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7767",
              "longitude": "-96.7970"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Dallas, TX"
            },
            "priceRange": "$$",
            "description": "Professional plumbing services in Dallas, TX. We specialize in leak detection, drain cleaning, and water heater repair."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dallas Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dallas, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Water Heater Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Pipe Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Plumber Dallas - Professional Plumbing Services" />
        <meta property="og:description" content="Expert plumbing repair in Dallas. Fast, reliable, and affordable service for all your home plumbing needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dallas-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Dallas Plumber Dallas
              <span className="block text-blue-400 mt-2 text-2xl md:text-3xl">Dallas Plumbing Pros</span>
            </>
          }
          subtitle="Your trusted local plumber. We fix leaks, unclog drains, and install water heaters in Dallas fast. 100% Satisfaction Guaranteed."
          image="https://images.unsplash.com/photo-1543783207-6a3374823438?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <DallasPlumberInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
