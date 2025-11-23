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
        title="Score High With Impactful Presentation Writing Service"
        subtitle="Try Tutor Hives presentation writing service to make your presentation informative"
        buttonText="Get Presentation Done"
      />
     <AssignmentGuarantees title="Presentation Writing- What Tutor Hives Guarantees" />
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
  title="Deliver an Impactful Presentation with PowerPoint Presentation Help!"
  paragraphs={[
    "You’ve come to this website because you want to give an impactful presentation but don’t know where to begin or can’t find professional presentation services. Perhaps you lack the skills and knowledge required to prepare presentations. That is why you are searching for queries like, Can someone write my presentation for me? Yes! Several PowerPoint presentation services in the market give you a helping hand. But don’t rise to their bait, as all presentation writing services are not reliable. Many PowerPoint presentation services will charge hefty amounts and still not deliver impressive presentations. So, what is the way out of this situation? How can you find reliable and professional presentation services? We have a solution so that you no more have to wonder “is there someone who can write my PowerPoint presentation for me?”",
    "The best thing you can do is call Tutor Hives – a pioneer PowerPoint presentation writing service with a pool of creative writers. Our talented writers will create an informative presentation, artistically design it, and effectively communicate your point. This PowerPoint presentation help will raise your GPA and help you leave a lasting impression on your audience."
  ]}
/>

    </>
  );
}
