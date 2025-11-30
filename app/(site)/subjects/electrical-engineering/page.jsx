export const metadata = {
    title: "Electrical Engineering Homework Help | TutorHives.com",
    description:
        "Get expert-solved electrical engineering homework and assignments from TutorHives.com. Clear, accurate, and ready-to-submit solutions for students.",
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
        question: "What types of electrical engineering homework do you solve?",
        answer:
            "Almost everything—circuits, power systems, controls, electronics, digital logic, electromagnetics, MATLAB problems, and more. If it’s part of an EE course, we can help.",
    },
    {
        id: 2,
        question: "Can you help with urgent assignments?",
        answer:
            "Yes. Many students contact us right before a deadline. If the task is doable in the timeframe, we’ll get it done quickly.",
    },
    {
        id: 3,
        question: "Who completes the assignments?",
        answer:
            "Electrical engineering specialists who understand the subject and know how to explain solutions in a clear, simple way.",
    },
    {
        id: 4,
        question: "Will I get step-by-step explanations?",
        answer:
            "If you request them, yes. We can include formulas, diagrams, reasoning, and step-by-step breakdowns.",
    },
    {
        id: 5,
        question: "Is the work original?",
        answer:
            "Absolutely. Every assignment is solved from scratch based on your instructions. Nothing is copied.",
    },
    {
        id: 6,
        question: "How do I submit my homework?",
        answer:
            "Just upload your files on TutorHives.com with your instructions. You’ll receive a quote before we begin.",
    },
    {
        id: 7,
        question: "What if I need changes?",
        answer:
            "Revisions related to your original instructions are free. Just let us know what needs adjusting.",
    },
    {
        id: 8,
        question: "How are prices determined?",
        answer:
            "Pricing depends on complexity, length and urgency. You always get the full price upfront—no hidden fees.",
    },
    {
        id: 9,
        question: "Will my information stay private?",
        answer:
            "Yes. Everything you share is fully confidential and secure.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
            <SubjectsHeroSection
                title="Electrical Engineering Homework Help – Accurate, Expert-Solved Assignments"
                subtitle="Electrical Engineering is an exciting field—but the problem sets, circuit diagrams and calculations can quickly become overwhelming. When students feel stuck or pressed for time, getting the right kind of help can make all the difference. TutorHives.com offers friendly, reliable electrical engineering homework help by delivering fully solved assignments that are easy to understand and ready to submit. From circuits to power systems, TutorHives makes challenging EE topics feel manageable again."
            />
            <SubjectsAbout title="Why Students Look for Electrical Engineering Homework Help"
                description="Electrical engineering blends physics, math, logic and problem-solving. That’s a lot to juggle—especially with tight deadlines. Students often reach out because they:"
                bullets={[
                    "struggle with circuit analysis and electrical measurements",
                    "find signal processing or digital logic challenging",
                    "get stuck on power system calculations",
                    "feel lost with electromagnetics and field theory",
                    "are overwhelmed with large numerical problems and MATLAB-based tasks",
                    "don’t have enough time to complete complex problem sets",
                ]}
                shortDescription={`Searches for electrical engineering homework help have grown steadily because students don’t just want hints—they want clear, correct solutions they can trust.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png" />
            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Real EE Experts Who Make Concepts Clear",
                        text: "Your assignment isn’t handled by a general tutor—it's solved by someone who understands electrical engineering deeply and can break down solutions in a simple, logical way.",
                    },
                    {
                        heading: "Reliable, Clean, and Instruction-Focused Solutions",
                        text: "Every answer is well-organized, accurate, and aligned with your instructions. Need explanations? They’re written in a friendly, easy-to-understand tone.",
                    },
                    {
                        heading: "Honest, Student-Friendly Service",
                        text: "No hidden fees. No reused content. No complicated process. Everything is original, private, and tailored to your task.",
                    },
                ]}
            />
            <WhatsAppButton />
            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Electrical Engineering Tasks"
                bullets={[
                    "TutorHives handles assignments across multiple EE domains, including:",
                    "Circuit Theory & Network Analysis",
                    "Electrical Machines & Power Systems",
                    "Control Systems & Automation",
                    "Signal Processing & Communications",
                    "Digital Logic & Microcontrollers",
                    "Electromagnetics (EMF, fields, waves)",
                    "Electronics (analog & digital)",
                    "Power Electronics & Converters",
                    "Transformers, motors & generators",
                    "MATLAB, Simulink and numerical EE problems",
                ]}
            />
            <WhyStudentsPrefer
                title="You Receive Clear, Ready-to-Submit Work"
                points={[
                    "Your final solution includes:",
                    "Fully solved numerical problems",
                    "Neatly drawn diagrams and labeled circuit illustrations",
                    "Step-by-step explanations (optional)",
                    "Formulas, reasoning and correct units",
                    "Proper formatting based on instructions",
                    "The focus is on clarity, accuracy and making your life easier.",
                ]}
            />
            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="A Simple, Stress-Free 4-Step Flow"
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
                        title: "Request revisions ",
                        desc: "if anything needs adjustment (included).",
                    },
                ]}
            />
            <SubjectsWhatYouGet title="Why Students Choose TutorHives"
                bullets={[
                    "Saves time during busy academic weeks",
                    "Provides clear explanations that make learning easier",
                    "Handles tough calculations and diagram-heavy tasks",
                    "Perfect for school, college and advanced EE courses",
                    "Transparent pricing with no surprises",
                    "Fast turnaround for urgent homework",

                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png" />
            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Electrical engineering doesn’t have to feel overwhelming. With TutorHives.com, students get accurate, professionally solved assignments that simplify complex concepts and help them stay on track. If you need dependable electrical engineering homework help, TutorHives is here to make the process smooth and stress-free. Upload your EE assignment today and get expert help without the hassle."
                ]}
            />
            <SubjectsFAQs faqs={faqData} />
        </>
    );
}