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
        title="Do My Assignment For Me"
        subtitle="We'll do your homework and You'll get time for other priorities"
        buttonText="Do My Assignment"
      />
     <AssignmentGuarantees title="Do My Assignment Online - Service Guarantees" />
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
    </>
  );
}
