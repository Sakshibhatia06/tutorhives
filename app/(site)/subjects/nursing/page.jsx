export const metadata = {
    title: "Nursing Homework Help | TutorHives.com",
    description:
        "Get professionally solved nursing homework and assignments from TutorHives.com. Clear, accurate, and easy-to-understand solutions for nursing students.",
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
        question: "What types of nursing homework can you help with?",
        answer:
            "We handle care plans, case studies, pathophysiology tasks, pharmacology homework, evidence-based papers, medical calculations, ethics assignments and more.",
    },
    {
        id: 2,
        question: "Can you help if my assignment is due soon?",
        answer:
            "Yes! Nursing students often have tight schedules. If your deadline is realistic, we can finish it quickly.",
    },
    {
        id: 3,
        question: "Do you follow nursing formats like ADPIE or NANDA?",
        answer:
            "Yes. We can structure care plans, assessments and analysis using NANDA, NIC, NOC or your program’s preferred framework — as long as the assignment requires it.",
    },
    {
        id: 4,
        question: "Can you help with research papers and APA formatting?",
        answer:
            "Definitely. We can write, format and reference your paper according to APA (or any format your school uses).",
    },
    {
        id: 5,
        question: "Will the work be easy to understand?",
        answer:
            "Yes. Our goal is to make complex medical concepts simple, clear and student-friendly.",
    },
    {
        id: 6,
        question: "Are the solutions original?",
        answer:
            "100% original. Every assignment is created from scratch based on your instructions.",
    },
    {
        id: 7,
        question: "Can you help with medication dosage calculations?",
        answer:
            "Yes — we can solve and explain dosage, conversion and drip rate problems clearly.",
    },
    {
        id: 8,
        question: "What if my instructor wants changes?",
        answer:
            "Revisions that match your original instructions are free of charge.",
    },
    {
        id: 9,
        question: "How do you determine pricing?",
        answer:
            "Pricing depends on complexity, length and deadline — but you’ll always get an upfront quote before we begin.",
    },
    {
        id: 10,
        question: "Is my information private?",
        answer:
            "Absolutely. Everything you share stays confidential and secure.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
              <SubjectsHeroSection
                title="Nursing Homework Help – Clear, Accurate & Professionally Solved Assignments"
                subtitle="Nursing coursework can be incredibly rewarding — but also incredibly demanding. Between care plans, case studies, medical calculations, evidence-based writing and tight clinical schedules, it’s easy to feel stretched thin. When the workload becomes overwhelming, having reliable support can make a world of difference. TutorHives.com offers friendly, accurate nursing homework help with fully solved assignments written clearly, logically, and in line with academic standards. Whether it’s pathophysiology, pharmacology, or patient care analysis, TutorHives is here to lighten your load."
            />
              <WhatsAppButton />
            <SubjectsAbout
                title="Why Nursing Students Look for Homework Help"
                description="Nursing students juggle a lot: studying, clinical rotations, skills practice, exams, and real-life responsibilities. It’s no surprise that they reach out when they:"
                bullets={[
                    "Struggle with creating nursing care plans",
                    "Find it tough to interpret patient scenarios",
                    "Need help writing evidence-based papers",
                    "Get stuck on pathophysiology or pharmacology concepts",
                    "Want support with APA formatting and academic writing",
                    "Need help understanding diagnostic results or medication calculations",
                    "Feel overwhelmed by large workloads and limited time",
                ]}
                shortDescription={`Searches for nursing homework help keep rising because students want clear, accurate, professional solutions that support their learning — not vague pointers.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Healthcare-Savvy Experts",
                        text: "Your nursing assignments are handled by professionals who understand clinical reasoning, medical terminology, academic writing and the expectations of nursing programs.",
                    },
                    {
                        heading: "Clear, Realistic, and Student-Friendly Solutions",
                        text: "Every assignment is written in clean, simple language but still meets academic standards. Concepts are explained in a way that actually makes sense — no unnecessary jargon.",
                    },
                    {
                        heading: "Private, Honest, and Straightforward",
                        text: "No reused content. No hidden fees. No complicated communication. Just original, confidential work tailored to your exact assignment.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Nursing Assignments"
                points={[
                    "TutorHives supports everything from basic foundations to upper-level nursing coursework, including:",
                    "Nursing Care Plans (NCPs)",
                    "Case Studies & Patient Assessments",
                    "Pathophysiology Assignments",
                    "Pharmacology Homework",
                    "Clinical Decision-Making Tasks",
                    "Evidence-Based Papers & Research Summaries",
                    "Health Promotion & Public Health Assignments",
                    "Medical Terminology Tasks",
                    "Nursing Ethics & Legal Issues",
                    "Medication Calculations",
                    "Documentation & Charting Practice",
                    "SOAP notes, ADPIE, SBAR tasks (explanatory only)",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved assignments",
                    "Clear, well-written explanations",
                    "Proper use of nursing frameworks (when required)",
                    "APA-formatted references (if the assignment needs them)",
                    "Accurate medical reasoning",
                    "Work written in your chosen tone and academic level",
                    "TutorHives delivers solutions that are both academically strong and easy to understand",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="Simple, Stress-Free 4-Step Process"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your nursing assignment with instructions and deadlines",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a clear quote before any work begins",
                        desc: "Fair and transparent pricing",
                    },
                    {
                        num: "3",
                        title: "Get your completed solution",
                        desc: "Clean, accurate, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if anything needs adjusting",
                        desc: "Included revisions to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Nursing Students Choose TutorHives"
                bullets={[
                    "Saves time during clinical rotations",
                    "Provides clarity for complicated medical concepts",
                    "Helps with both writing and clinical reasoning",
                    "Works for all levels — from fundamentals to advanced courses",
                    "Fast turnaround for urgent assignments",
                    "Fair pricing with no surprises",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />
            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Nursing school is tough — but you don’t have to face it alone. With TutorHives.com, you get professionally written, fully solved nursing assignments that make studying easier and reduce stress. Whether it’s a complex case study or a full care plan, TutorHives is ready to help you succeed. Upload your nursing homework today and get expert solutions delivered with clarity and care.",
                ]}
            />
            <SubjectsFAQs faqs={faqData} />

        </>
    );
}