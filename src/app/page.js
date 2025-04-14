import Navbar from "../page/Navbar";
import HeroSection from "../page/HomeSection";
import '../app/globals.css';
import ProblemSection from "../page/Problem";
import Solution from "../page/Solution";
import TractionSection from "../page/Traction";
import { CTASection } from "../page/CTA";
import { TestimonialCarousel } from "../page/Testimonial ";
import { Footer } from "../page/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <Solution />
      <TractionSection />
      <CTASection />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}