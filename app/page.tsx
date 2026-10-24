import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import PerformanceSection from "@/components/PerformanceSection";
import Story from "@/components/Story";
import DisplaySection from "@/components/DisplaySection";
import CoolingSection from "@/components/CoolingSection";
import Specifications from "@/components/Specifications";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#overview" className="sr-only z-[60] rounded bg-acid px-4 py-2 font-semibold text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <PerformanceSection />
        <Story />
        <DisplaySection />
        <CoolingSection />
        <Specifications />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
