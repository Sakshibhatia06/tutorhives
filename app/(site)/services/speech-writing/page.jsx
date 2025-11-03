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
import WriteMyPaper from "@/components/WriteMyPaper";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoMyAssignmentPage() {
  return (
    <>
      <Header />

      <ServiceHero
        title="Speech Writing Service: A+ and applause"
        subtitle="Speeches that gather praise and grades with Tutor Hives speech writing service"
        buttonText="Get Speech Done"
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
       <WriteMyPaper 
        title="The Dire Need For Reliable Speech Writing Services"
        paragraphs={[
          "The stage is set, and the public is eager. Sometimes, when students present their speech, the chances are there that audience could take it as biased or not so relevant. In these scenarios, students often think, “I hope someone could write a speech for me”. Tutor Hives speech writers ensure that your speech is informative, conclusive, yet engaging. Experts crafted your speech in such a way that it influences your audience positively",

"When you ask us to “write me a speech”, we employ some of our best writers of our professional speech writing services. The advanced skillset of our “write me a speech” writers is what makes our professional speech writing services the best. So what is a good speech writing skillset?"
        ]}
      />
      <Footer />
    </>
  );
}
