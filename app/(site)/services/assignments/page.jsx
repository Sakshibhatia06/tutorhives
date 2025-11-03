import ServiceHero from "@/components/ServiceHero";
import AssignmentWhySection from "@/components/AssignmentWhySection";
import FAQ from "@/components/FAQ";
import BonusesSection from '@/components/BonusesSection';
import TrustedUniversities from '@/components/TrustedUniversities';
import FeaturesTab from "@/components/FeaturesTab";
import GlobalPartnerSection from '@/components/GlobalPartnerSection';
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import AssignmentGuarantees from "@/components/AssignmentGuarantees";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import StudentStories from "@/components/StudentStories";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AssignmentPage() {
  return (
    <>
      <Header />

      <ServiceHero
        title="Assignment Helper | Online Assignment Help"
        subtitle="Get top-quality academic assistance with online assignment help services"
        buttonText="Get Assignment Help Now"
      />
      <AssignmentWhySection/>
      <AssignmentGuarantees title="Tutor Hives Guarantees The Best Assignment Help Online" />
      <FeaturesTab />
      <TrustedUniversities/>
      <StudentStories/>
      <WhoIsThisFor/>
      <About />
      <BonusesSection/>
      <FAQ />
      <WhatsAppButton/>
      <GlobalPartnerSection/>
      <Footer />
    </>
  );
}
