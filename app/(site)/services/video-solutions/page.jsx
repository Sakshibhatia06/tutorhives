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
        title="Still Have Doubts? Try Video Solutions For Clarity"
        subtitle="Tutor Hives video solutions: Master topics with step-by-step guidance"
        buttonText="Get Video Solution"
      />
     <AssignmentGuarantees title="Solutions by world class Tutors
" />
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
              title="Tutor Hives Video Solutions"
              paragraphs={[
                "The academic frontier is changing rapidly. Students and teachers alike carry the burden of expectations upon them. The education system works to benefit individuals who undergo holistic development rather than those whose talents are limited to rote learning. This puts an immeasurable burden on students in schools and colleges- they have to prioritize other things, not just their studies. It means that they have to dedicate a substantial amount of time to different practical opportunities and excel in their studies. This can lead to students frantically trying to find ways to achieve academic excellence a bit faster. Educational topics in schools and colleges are a challenge in themselves. The concepts are tough to grasp, and students need to keep regularly practicing to achieve excellence, It is where Tutor Hives Video Solution service comes to help."
              ]}
            />
      <Footer />
    </>
  );
}
