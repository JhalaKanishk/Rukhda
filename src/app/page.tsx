import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PlansSection from '@/components/PlansSection';
import ReviewsSection from '@/components/ReviewsSection';


export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PlansSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
