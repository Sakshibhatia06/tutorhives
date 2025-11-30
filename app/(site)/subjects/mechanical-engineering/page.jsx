export const metadata = {
    title: "Mechanical Engineering Homework Help | TutorHives.com",
    description:
        "Get expert-solved mechanical engineering homework and assignments from TutorHives.com. Clear, accurate, ready-to-submit solutions for students.",
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
        question: "What types of mechanical engineering homework can you solve?",
        answer:
            "We help with statics, dynamics, thermodynamics, fluid mechanics, machine design, solid mechanics, heat transfer, vibrations, numerical problems and more.",
    },
    {
        id: 2,
        question: "Can you help with urgent mechanical engineering assignments?",
        answer:
            "Absolutely. We handle urgent tasks regularly. If it's doable in your timeline, we’ll complete it quickly without compromising quality.",
    },
    {
        id: 3,
        question: "Do you provide diagrams, sketches or engineering drawings?",
        answer:
            "Yes — if required, we can create clean, precise diagrams or labeled sketches to match your assignment instructions.",
    },
    {
        id: 4,
        question: "Will the solutions have step-by-step explanations?",
        answer:
            "Yes. Many students request detailed steps, and we’re happy to include them so you can understand the logic behind the answers.",
    },
    {
        id: 5,
        question: "Can you help with simulation or CAD tasks?",
        answer:
            "We can help with theory-based questions, explanations, and problem-solving related to CAD/FEA concepts. However, we do not produce full CAD models or simulations.",
    },
    {
        id: 6,
        question: "Is all the work original?",
        answer:
            "100% yes. Every assignment is solved from scratch based on your instructions.",
    },
    {
        id: 7,
        question: "How do I submit my mechanical engineering homework?",
        answer:
            "Just upload your files and instructions on TutorHives.com. We’ll send a clear quote before starting.",
    },
    {
        id: 8,
        question: "What if I need changes to the solution?",
        answer:
            "Revisions matching your original instructions are free.",
    },
    {
        id: 9,
        question: "How is pricing determined?",
        answer:
            "It depends on complexity, length and deadline — but you always get a full, upfront price before we begin.",
    },
    {
        id: 10,
        question: "Will my information stay private?",
        answer:
            "Yes. Everything you share is confidential and securely handled.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>

            <Header />
              <WhatsAppButton />
            <SubjectsHeroSection
                title="Mechanical Engineering Homework Help – Expert, Accurate & Easy-to-Understand Solutions"
                subtitle="Mechanical Engineering is one of the most exciting — and toughest — fields out there. Between long numerical problems, engineering diagrams, system modeling and theory-heavy questions, things can get overwhelming fast. When deadlines are tight or certain concepts just won’t click, the right support can save hours of frustration. TutorHives.com provides friendly, reliable mechanical engineering homework help with fully solved solutions that are easy to understand and ready to submit. Whether it’s thermodynamics, mechanics, design or simulation, TutorHives helps simplify the toughest tasks."
            />
            <SubjectsAbout
                title="Why Students Look for Mechanical Engineering Homework Help"
                description="Mechanical Engineering blends physics, math, design, problem-solving and technical reasoning. Students often reach out because they:"
                bullets={[
                    "Struggle with long numerical problems",
                    "Find thermodynamics or fluid mechanics confusing",
                    "Get stuck drawing or interpreting engineering diagrams",
                    "Need help with machine design or manufacturing processes",
                    "Don’t have time for complex multi-step solutions",
                    "Face difficulty understanding dynamics or mechanical vibrations",
                    "Need clean, correct solutions for simulation-based tasks",
                ]}
                shortDescription={`Searches for mechanical engineering homework help have grown because students want reliable, easy-to-follow, step-by-step solutions, not vague explanations.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Experts Who Know Mechanical Engineering Inside Out",
                        text: "Assignments are solved by engineering professionals with real academic and practical experience. They break down complex problems into clear, logical steps.",
                    },
                    {
                        heading: "Clean, Organized, Ready-to-Submit Solutions",
                        text: "You get diagrams, formulas, explanations, calculations and reasoning — all formatted neatly to match your assignment’s requirements.",
                    },
                    {
                        heading: "Simple, Student-Friendly Experience",
                        text: "No reused work. No hidden fees. No complicated process. Just original, private, tailored homework solutions.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Mechanical Engineering Assignments"
                points={[
                    "TutorHives supports both basic and advanced mech-eng topics, including:",
                    "Engineering Mechanics (Statics & Dynamics)",
                    "Thermodynamics & Heat Transfer",
                    "Fluid Mechanics",
                    "Machine Design & Manufacturing Processes",
                    "Strength of Materials / Solid Mechanics",
                    "Mechanical Vibrations",
                    "Kinematics & Mechanisms",
                    "Finite Element Analysis (FEA) basics",
                    "CAD-related theory tasks (no full 3D modeling)",
                    "Numerical problem solving & calculations",
                    "Engineering drawings, diagrams and interpretations",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved assignments",
                    "Step-by-step explanations",
                    "Diagrams, sketches or data tables when required",
                    "Correct formulas, units and reasoning",
                    "Instructions followed exactly as provided",
                    "TutorHives focuses on clarity, accuracy and making the work easy to understand",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="A Simple & Stress-Free 4-Step Flow"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your assignment with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a clear quote",
                        desc: "Fair and transparent pricing",
                    },
                    {
                        num: "3",
                        title: "Get your solved solution",
                        desc: "Clean, accurate, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if something needs adjustment",
                        desc: "Included revisions to match your original instructions",
                    },
                ]}
            />
            <SubjectsWhatYouGet
                title="Why Students Choose TutorHives"
                bullets={[
                    "Saves hours on tough numerical tasks",
                    "Makes complex engineering concepts easier",
                    "Perfect for both school and college-level ME courses",
                    "Fast turnaround for urgent homework",
                    "No hidden fees, no confusion",
                    "Explanations available upon request",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />
            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Mechanical Engineering doesn’t have to feel overwhelming. With TutorHives.com, students get clear, accurate and professionally solved assignments that make even difficult concepts feel manageable. If you're looking for dependable mechanical engineering homework help, TutorHives is here to make things easier. Upload your ME assignment today and get expert solutions delivered quickly and clearly.",
                ]}
            />
            <SubjectsFAQs faqs={faqData} />
        </>
    );
}