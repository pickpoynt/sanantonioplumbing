import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ToxicBlackMoldInfo from "@/components/landing/ToxicBlackMoldInfo";
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
        <title>Toxic black mold removal Ambler | Ambler Toxic Mold Specialists</title>
        <meta name="description" content="Toxic black mold removal Ambler. Professional remediation for Stachybotrys chartarum, basement mold removal, and HEPA air scrubbing in Montgomery County. Call (380) 266-0944!" />
        <meta name="keywords" content="toxic black mold removal Ambler, black mold remediation Ambler PA, Montgomery County mold inspector, Stachybotrys removal Ambler" />
        <link rel="canonical" href="https://ambler-toxic-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ambler Toxic Mold Specialists",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ambler",
              "addressRegion": "PA",
              "postalCode": "19002",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1545",
              "longitude": "-75.2216"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "priceRange": "$$$",
            "description": "Certified toxic black mold removal and Stachybotrys remediation in Ambler, PA. Specialized in negative air containment and HEPA air scrubbing."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Toxic Black Mold Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ambler Toxic Mold Specialists",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mold Remediation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Toxic Black Mold Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Negative Air Pressure Containment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Purification"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mycotoxin Remediation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Toxic black mold removal Ambler | Ambler Toxic Mold Specialists" />
        <meta property="og:description" content="Professional toxic black mold removal in Ambler, PA. 24/7 emergency remediation and HEPA air scrubbing. Call (380) 266-0944 for an inspection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambler-toxic-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Toxic black mold removal Ambler
              <span className="block text-red-500 mt-2 text-2xl md:text-4xl">Ambler Toxic Mold Specialists: Bio-Hazard Remediation</span>
            </>
          }
          subtitle="Don't compromise your health with Stachybotrys chartarum. Our specialized bio-hazard crews use surgical negative-air containment and industrial HEPA systems to eradicate toxic black mold from your Ambler home with clinical precision."
          image="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <ToxicBlackMoldInfo />
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




