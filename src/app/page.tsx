import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogosBar from "../components/LogosBar";
import FeaturesGrid from "../components/FeaturesGrid";
import FeaturesListBlock from "../components/FeaturesListBlock";
import SeparatorSection from "../components/SeparatorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesShowcaseSection from "@/components/FeaturesShowcaseSection";
import PricingSection from "@/components/PricingSection";
import QuestionsSection from "@/components/QuestionsSection";
import Footer from "@/components/Footer";
import HeroCtaSection from "@/components/HeroCtaSection";

export default function Home() {
  return (
    <div className="main-container">
      <main className="flex flex-col gap-0">
        <Navbar />
        <Hero />
        <LogosBar />
        <FeaturesGrid />
        <FeaturesListBlock />
        <SeparatorSection />
        <TestimonialsSection/>
        <FeaturesShowcaseSection />
        <PricingSection />
        <QuestionsSection/>
        <HeroCtaSection/>
        <Footer/>
      </main>
    </div>
  );
}
