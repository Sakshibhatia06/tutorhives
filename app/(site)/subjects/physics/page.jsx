export const metadata = {
    title: "Physics Homework Help | TutorHives.com",
    description:
        "Get expert-solved physics homework and assignment solutions from TutorHives.com. Clear, accurate, and easy to understand for all levels.",
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
        question: "What types of physics homework can you solve?",
        answer:
            "We cover mechanics, electricity, magnetism, thermodynamics, optics, waves, modern physics, fluid mechanics and more.",
    },
    {
        id: 2,
        question: "Can you explain the steps behind each solution?",
        answer:
            "Yes! If you want step-by-step explanations, we’ll include clear reasoning, formulas, and diagrams to help you understand how the answer is reached.",
    },
    {
        id: 3,
        question: "Do you help with physics diagrams, graphs or vector drawings?",
        answer:
            "Absolutely. We can create neat, clear visuals like force diagrams, ray diagrams, vector breakdowns, graphs, and more.",
    },
    {
        id: 4,
        question: "Can you help with urgent physics assignments?",
        answer:
            "Yes. We frequently handle urgent tasks — as long as the deadline is realistic, we’ll work quickly.",
    },
    {
        id: 5,
        question: "Will the solutions be original?",
        answer:
            "Yes. Every problem is solved from scratch based on your instructions. Nothing is copied or reused.",
    },
    {
        id: 6,
        question: "How do I upload my assignment?",
        answer:
            "Just upload your questions and instructions on TutorHives.com. You’ll receive a clear quote before we begin.",
    },
    {
        id: 7,
        question: "What if I need revisions?",
        answer:
            "Revisions matching your original instructions are free.",
    },
    {
        id: 8,
        question: "How do you determine the cost?",
        answer:
            "Pricing depends on difficulty, length and deadline — but we always give an upfront price with no hidden fees.",
    },
    {
        id: 9,
        question: "Is my information kept private?",
        answer:
            "Yes. Your files and personal details are kept confidential and secure.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
            <SubjectsHeroSection
                title="Physics Homework Help – Clear, Accurate & Expert-Solved Assignments"
                subtitle="Physics is fascinating… until the equations, diagrams, and concepts start piling up. When your assignments require more time or clarity than you have, getting the right support can make all the difference. TutorHives.com offers friendly, reliable physics homework help with fully solved answers that are easy to understand and ready to submit. From mechanics and electricity to modern physics, we make tough topics feel manageable again."
            />
              <WhatsAppButton />
            <SubjectsAbout
                title="Why Students Look for Physics Homework Help"
                description="Physics blends math, logic, real-world reasoning, and detailed calculations — all at once. Many students reach out because they:"
                bullets={[
                    "Get stuck on multi-step numerical problems",
                    "Struggle with forces, motion, or energy concepts",
                    "Find electricity, magnetism or circuits confusing",
                    "Need help drawing or interpreting diagrams and graphs",
                    "Feel overwhelmed by formula-heavy chapters",
                    "Don’t have enough time for long problem sets",
                    "Want clear, step-by-step explanations to learn from",
                ]}
                shortDescription={`It’s no surprise that searches for physics homework help continue to grow — students want clear, correct, step-by-step solutions, not vague hints.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Experienced Physics Problem-Solvers",
                        text: "Your assignments are handled by experts who know physics inside out and can explain even complex ideas in a simple, friendly way.",
                    },
                    {
                        heading: "Neat, Organized, Ready-to-Submit Solutions",
                        text: "Expect clean calculations, labeled diagrams, correct formulas, and explanations that make sense.",
                    },
                    {
                        heading: "A Simple, Honest, Student-Friendly Approach",
                        text: "No copied answers. No hidden fees. No confusing process. Everything is original, private, and tailored specifically for your assignment.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Physics Assignments"
                points={[
                    "Mechanics (motion, forces, energy, momentum)",
                    "Electricity & Magnetism (circuits, fields, charges)",
                    "Waves & Oscillations",
                    "Optics & Light",
                    "Thermodynamics",
                    "Modern Physics (quantum basics, relativity basics)",
                    "Rotational Motion & Torque",
                    "Fluid Mechanics",
                    "Graphing, diagrams, and interpretation tasks",
                    "Vector problems & trigonometric physics",
                    "Heat, work, and thermodynamic processes",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved physics problems",
                    "Clean step-by-step explanations",
                    "Correct formulas, units, and reasoning",
                    "Diagrams, sketches, graphs where needed",
                    "Solutions tailored to your exact instructions",
                    "We make sure your work is both correct and easy to understand",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="Simple, Stress-Free 4-Step Process"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your physics assignment with instructions and deadline",
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
                        desc: "Polished, accurate, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if anything needs adjusting",
                        desc: "Free revisions included to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Students Choose TutorHives"
                bullets={[
                    "Saves time on long physics problem sets",
                    "Makes confusing concepts easier to understand",
                    "Works for all physics levels (school, college, advanced)",
                    "Fast turnaround for urgent assignments",
                    "No hidden fees — just simple, honest help",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Physics doesn’t have to feel confusing or overwhelming. With TutorHives.com, you get clear, accurate, step-by-step solutions that make tough concepts easier and homework stress-free. If you're looking for dependable physics homework help, TutorHives is ready to support you. Upload your physics assignment today and get expert help delivered quickly and clearly.",
                ]}
            />

            <SubjectsFAQs faqs={faqData} />
        </>
    );
}