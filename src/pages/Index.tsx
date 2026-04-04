import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import SinglesSection from "@/components/SinglesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingShapes />
      <main className="relative z-10">
        <HeroSection />
        <SinglesSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
