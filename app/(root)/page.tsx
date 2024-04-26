import FaqSection from "@/components/faq-section/faq";
import FeaturedSection from "@/components/fetured-section/featured";
import HeroSection from "@/components/hero-section/hero";

export default function Home() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <FeaturedSection />
      <FaqSection />
    </main>
  );
}
