import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TutorHero from "@/components/TutorHero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import ServicesSection from "@/components/ServicesSection";


export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <TutorHero />
        <ServicesSection />
         <About />
        <FAQ />
        <WhatsAppButton />
      </main>
    </>
  );
}
