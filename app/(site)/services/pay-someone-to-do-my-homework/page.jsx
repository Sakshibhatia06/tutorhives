import ServiceHero from "@/components/ServiceHero";
import FAQ from "@/components/FAQ";
import AssignmentWhySection from "@/components/AssignmentWhySection";
import BonusesSection from '@/components/BonusesSection';
import TrustedUniversities from '@/components/TrustedUniversities';
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import StudentStories from "@/components/StudentStories";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoMyAssignmentPage() {
  return (
    <>
      <Header />
      <ServiceHero
        title="Pay Someone To Do My Homework Online | Pay Someone To Do My Assignment"
        subtitle="Secure Your Future by Pay Someone to Do My Homework Experts"
        buttonText="Pay Someone To Do My Homework Online "
      />
     <AssignmentWhySection/>
      <TrustedUniversities/>
      <StudentStories/>
      <About />
      <BonusesSection/>
      <FAQ />
      <WhatsAppButton/>
      <Footer />
    </>
  );
}
