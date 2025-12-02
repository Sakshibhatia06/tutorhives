import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import HomeworkBenefits from "@/components/HomeworkBenefits"
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import BonusesSection from '@/components/BonusesSection';
import TrustedUniversities from '@/components/TrustedUniversities'
import GlobalPartnerSection from '@/components/GlobalPartnerSection'

export const metadata: Metadata = {
  title: "online assignment help | help with assignment - Tutorhives",
  description: "Get expert assignment help services from a reliable assignment helper. Fast, plagiarism-free solutions to boost your grades and academic performance."
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FeaturesTab />
      <HomeworkBenefits/>
      <About />
      <BonusesSection/>
      <TrustedUniversities/>
      <Testimonial />
      <GlobalPartnerSection/>
      <FAQ />
      <WhatsAppButton/>
    </main>
  );
}
