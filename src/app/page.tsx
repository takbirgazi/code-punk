import Blog from "@/components/HomeComponents/Blog/Blog";
import CTASection from "@/components/HomeComponents/CTASection/CTASection";
import FrameworkService from "@/components/HomeComponents/FrameworkService/FrameworkService";
import Hero from "@/components/HomeComponents/Hero/Hero";
import Highlights from "@/components/HomeComponents/Highlights/Highlights";
import Testimonials from "@/components/HomeComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#060f11]">
      <Hero />
      <div className="max-w-[1250px] mx-auto px-4 pt-10 md:pt-20">
        <FrameworkService />
        <Highlights />
      </div>
      <Testimonials />
      <div className="max-w-[1250px] mx-auto px-4 pt-10 md:pt-20">
        <Blog />
        <CTASection />
      </div>
    </div>
  );
}
