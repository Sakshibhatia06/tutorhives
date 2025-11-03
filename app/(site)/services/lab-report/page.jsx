import ServiceHero from "@/components/ServiceHero";
import FAQ from "@/components/FAQ";
import BonusesSection from '@/components/BonusesSection';
import TrustedUniversities from '@/components/TrustedUniversities';
import FeaturesTab from "@/components/FeaturesTab";
import GlobalPartnerSection from '@/components/GlobalPartnerSection';
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import AssignmentGuarantees from "@/components/AssignmentGuarantees";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import StudentStories from "@/components/StudentStories";
import DemandSection from "@/components/DemandSection";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoMyAssignmentPage() {
  return (
    <>
      <Header />

      <ServiceHero
        title="lab report writing service"
        subtitle="Achieve A+ Grade with Expert Lab Report Writing Help"
        buttonText="Get Lab Report"
      />
     <AssignmentGuarantees title="Tutor Hives Guarantees Lab Report Help" />
      <FeaturesTab />
      <TrustedUniversities/>
      <StudentStories/>
      <WhoIsThisFor/>
      <About />
      <BonusesSection/>
      <FAQ />
      <WhatsAppButton/>
      <GlobalPartnerSection/>
        <DemandSection/>
      <Footer />
    </>
  );
}
