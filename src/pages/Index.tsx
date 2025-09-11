import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import OffersSection from "@/components/OffersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [selectedOffer, setSelectedOffer] = useState<string>("");

  const handleOfferSelect = (offerTitle: string) => {
    setSelectedOffer(offerTitle);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <OffersSection onOfferSelect={handleOfferSelect} />
      <ContactSection selectedOffer={selectedOffer} />
      <Footer />
    </div>
  );
};

export default Index;
