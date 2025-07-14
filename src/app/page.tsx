import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import PlansSection from '@/components/PlansSection';
import ReviewsSection from '@/components/ReviewsSection';
// import Gallery from "./gallery/page";


export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      {/* <Gallery /> */}
      <AboutSection />
      <PlansSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
