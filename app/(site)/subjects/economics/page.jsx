export const metadata = {
  title: "Economics Homework Help | TutorHives.com",
  description:
   "Get expert-solved economics homework and assignments from TutorHives.com. Simple, reliable, and student-friendly support for all levels.",
};
import SubjectsHeroSection from "@/components/SubjectsHeroSection";
import SubjectsAbout from "@/components/SubjectsAbout";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/Floating-Whatsapp/whatsAppButton";
import SubjectsWhyChoose from "@/components/SubjectsWhyChoose";
import SubjectsStepsSection from "@/components/SubjectsStepsSection";
import SubjectsWhatYouGet from "@/components/SubjectsWhatYouGet";
import WhyStudentsPrefer from "@/components/WhyStudentsPrefer";
import WriteMyPaper from "@/components/WriteMyPaper";
import SubjectsFAQs from "@/components/SubjectsFaqs";
import HowItWorksSubjectsSection from "@/components/HowItWorksSubjectsSection";
const faqData = [
  {
    id: 1,
    question: "What types of economics homework can TutorHives help with?",
    answer:
      "Pretty much everything—from basic supply and demand questions to advanced macroeconomic analysis. This includes calculations, graphs, essays, case studies and short-form answers.",
  },
  {
    id: 2,
    question: "Can you help if my economics assignment is due soon?",
    answer:
      "Yes! Many students send us urgent homework. As long as the task is realistic within the timeframe, we can take care of it quickly.",
  },
  {
    id: 3,
    question: "Who solves the assignments?",
    answer:
      "Your homework is completed by economics professionals who understand the subject and know how to present answers clearly.",
  },
  {
    id: 4,
    question: "Will I get explanations for the solutions?",
    answer:
      "You can choose. Some students want step-by-step explanations; others just want the final answer. We can do either—just let us know.",
  },
  {
    id: 5,
    question: "Is all the work original?",
    answer:
      "100% yes. Every solution is written from scratch based on your instructions. Nothing is copied or recycled.",
  },
  {
    id: 6,
    question: "How do I send my homework?",
    answer:
      "Just upload your files and assignment details on TutorHives.com. We’ll review them and send you a quote right away.",
  },
  {
    id: 7,
    question: "What if I need changes?",
    answer:
      "Revisions that match your original instructions are free. Just let us know what needs to be adjusted.",
  },
  {
    id: 8,
    question: "How is pricing determined?",
    answer:
      "It depends on difficulty, length and urgency. We always share the full price upfront—so there are no surprises.",
  },
  {
    id: 9,
    question: "Will my information stay private?",
    answer:
      "Absolutely. Everything you share—files, messages, personal details—remains completely confidential.",
  },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
            <SubjectsHeroSection
                title="Economics Homework Help – Clear, Accurate & Expert-Solved Assignments"
                subtitle="Economics can be incredibly interesting—until you're staring at graphs, formulas and long analysis questions with a deadline approaching. When the workload gets heavy or certain concepts just won’t click, having the right help can save hours of frustration. TutorHives.com offers friendly, reliable economics homework help with fully solved solutions that make sense. Whether you’re dealing with micro, macro, graphs or tricky calculations, TutorHives is here to make things easier."
            />
            <SubjectsAbout title="Why Students Look for Economics Homework Help"
                description="Economics mixes math, theory and real-world reasoning, which can be overwhelming—especially when you’re juggling multiple classes. Students usually reach out when they:"
                bullets={[
                    "can’t get supply/demand graphs or elasticity formulas to make sense",
                    "feel lost trying to explain cost curves or market structures",
                    "struggle with macroeconomic indicators like GDP or inflation",
                    "don’t have the time to write long, structured answers",
                    "need help with calculations, tables or clean diagrams",
                    "are simply stressed and want a clear, correct solution",
                ]}
                shortDescription={`Searches like economics homework help keep trending because students don’t just want guidance—they want complete, accurate work they can trust.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png" />
            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Real Experts with a Talent for Clarity",
                        text: "Your assignment isn’t handled by a generic helper—it’s solved by someone who actually understands economics and knows how to explain it clearly. The goal is to make the solution feel simple and logical, not complicated.",
                    },
                    {
                        heading: "Reliable Support You Can Count On",
                        text: "Every answer is organized, well-structured and aligned with your instructions. If you ask for explanations, they’re written in a way that makes tough ideas easier to grasp.",
                    },
                    {
                        heading: "A Straightforward, Student-First Approach",
                        text: "There are no hidden fees, reused answers or confusing steps. Everything is original, confidential and created specifically for your assignment.",
                    },
                ]}
            />
            <WhatsAppButton />
            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve All Types of Economics Tasks"
                points={[
                    "TutorHives handles everything from basic homework questions to more advanced analytical tasks. This includes:",
                    "Supply & demand, equilibrium, elasticity",
                    "Cost curves, revenue, and firm behavior",
                    "Perfect competition, monopoly, oligopoly",
                    "GDP, inflation, unemployment, macro indicators",
                    "Fiscal policy, monetary policy and economic growth",
                    "Exchange rates, trade models, tariffs",
                    "Consumer theory, producer theory",
                    "Short essays, explanations, graphs and charts",
                    "Calculation-based problems and case studies",
                ]}
            />
            <WhyStudentsPrefer
                title="You Receive Clear, Ready-to-Submit Work"
                bullets={[
                    "Every completed assignment includes:",
                    "Clean solutions written in simple language",
                    "Accurate formulas and calculations",
                    "Graphs or tables when needed",
                    "Explanations (optional)",
                    "Formatting based on your exact requirements",
                    "The goal is to make the final product both correct and easy to understand.",
                ]}
            />
            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="A Quick, Stress-Free 4-Step Process"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your homework ",
                        desc: "with all instructions and deadlines.",
                    },
                    {
                        num: "2",
                        title: "Get your quote",
                        desc: "no hidden fees, no surprises.",
                    },
                    {
                        num: "3",
                        title: "Receive your completed solution",
                        desc: "organized, accurate and polished.",
                    },
                    {
                        num: "4",
                        title: "Ask For Edits",
                        desc: "if anything needs tweaking (included).",
                    },
                ]}
            />
            <SubjectsWhatYouGet title="Why Students Love Using TutorHives"
                bullets={[
                    "It saves time during busy weeks",
                    "Concepts finally make sense when explained clearly",
                    "Graphs and calculations are done correctly",
                    "Deadlines aren’t as stressful",
                    "Prices are fair and transparent",
                    "Perfect for both school and college-level economics",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png" />
            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Economics doesn’t have to feel overwhelming or confusing. With TutorHives.com, students get reliable, fully solved assignments that are easy to understand and ready to submit. If you want accurate help without the stress, TutorHives is here to make your workload lighter. Upload your economics assignment today and get expert help the simple, stress-free way."
                ]}
            />
            <SubjectsFAQs faqs={faqData}/>

        </>
    );
}