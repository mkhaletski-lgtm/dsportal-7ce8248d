import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SinglesSection from "@/components/SinglesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <FloatingShapes />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SinglesSection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
