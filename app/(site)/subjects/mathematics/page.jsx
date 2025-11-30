export const metadata = {
    title: "Mathematics Homework Help | TutorHives.com",
    description:
       "Get accurate, step-by-step math homework and assignment solutions from TutorHives.com. Expert help for all topics and levels.",
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
        question: "What types of math homework can you solve?",
        answer:
            "Almost everything—from algebra and geometry to calculus, statistics, and advanced college-level math. If it’s part of your course, we can help.",
    },
    {
        id: 2,
        question: "Can you handle urgent math assignments?",
        answer:
            "Yes! Many students come to us when a deadline is close. If it’s realistic, we’ll complete it fast without compromising quality.",
    },
    {
        id: 3,
        question: "Who solves the math problems?",
        answer:
            "Experienced math professionals who understand the subject well and know how to explain solutions clearly.",
    },
    {
        id: 4,
        question: "Will I get steps for each problem?",
        answer:
            "Absolutely. Step-by-step explanations are our specialty—you can request detailed working for any solution.",
    },
    {
        id: 5,
        question: "Is everything you deliver original?",
        answer:
            "Yes. All solutions are created from scratch based on your instructions. Nothing is copied or reused.",
    },
    {
        id: 6,
        question: "How do I submit my assignment?",
        answer:
            "Simply upload your files and instructions on TutorHives.com. We’ll check them and send you a quote right away.",
    },
    {
        id: 7,
        question: "What if I need corrections?",
        answer:
            "Revisions that match your original instructions are free. Just let us know what needs to be updated.",
    },
    {
        id: 8,
        question: "How does pricing work?",
        answer:
            "Pricing depends on complexity and urgency. You always get a clear price upfront—no hidden fees.",
    },
    {
        id: 9,
        question: "Is my information kept private?",
        answer:
            "100%. Your files, messages and details are kept confidential.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
              <WhatsAppButton />
            <SubjectsHeroSection
                title="Mathematics Homework Help – Clear, Step-By-Step Expert Solutions"
                subtitle="Math can be incredibly rewarding—but it can also feel overwhelming when a single problem takes hours or a concept refuses to make sense. When deadlines approach or assignments become too time-consuming, having the right help can save a lot of stress. TutorHives.com offers friendly, reliable mathematics homework help with fully solved, step-by-step answers that are easy to understand and ready to submit. Whether you're stuck on algebra, calculus or advanced problem-solving, TutorHives helps bring clarity back to math."
            />
            <SubjectsAbout
                title="Why Students Look for Mathematics Homework Help"
                description="Math requires practice, patience, and strong conceptual understanding. It’s not surprising that students often look for help when they:"
                bullets={[
                    "Get stuck on multi-step problems",
                    "Struggle with algebraic manipulation or expressions",
                    "Find calculus, limits or derivatives confusing",
                    "Can’t understand trigonometry identities",
                    "Lose track of steps in geometry or proofs",
                    "Need help with statistics or probability",
                    "Simply don’t have time to complete a long problem set",
                ]}
                shortDescription={`Searches for mathematics homework help keep growing because students don’t just want the final answer—they want clear, step-by-step solutions that actually teach them the process.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Experts Who Explain Math in a Simple Way",
                        text: "Assignments are solved by math specialists who break down solutions into clean, logical steps that make sense even if the concept felt confusing at first.",
                    },
                    {
                        heading: "Clear, Organized, Instruction-Friendly Work",
                        text: "All solutions are written neatly, with each step explained clearly. If the problem requires graphs, formulas or diagrams, they’re included and well-labeled.",
                    },
                    {
                        heading: "Honest, Straightforward Support",
                        text: "No reused solutions. No hidden fees. No confusing process. Everything is original, private and created specifically for your math assignment.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve Math Assignments for All Levels"
                points={[
                    "Algebra (I & II)",
                    "Pre-Calculus & Calculus (Differentiation & Integration)",
                    "Geometry & Trigonometry",
                    "Statistics & Probability",
                    "Discrete Math",
                    "Number Theory",
                    "Linear Algebra & Matrices",
                    "Differential Equations",
                    "Vector Calculus",
                    "Word Problems & Applied Math",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved math problems",
                    "Clean, step-by-step explanations",
                    "Exact formulas and logical reasoning",
                    "Graphs, charts or diagrams where needed",
                    "Solutions tailored to your instructor’s requirements",
                    "TutorHives prioritizes clarity and precision to make math problems easy to follow",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="A Quick, Stress-Free 4-Step Process"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your math assignment with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a quote",
                        desc: "Fair, clear and upfront pricing based on complexity and urgency",
                    },
                    {
                        num: "3",
                        title: "Get your solved solutions",
                        desc: "Organized, accurate, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if something needs adjusting",
                        desc: "Revisions are included to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Students Choose TutorHives"
                bullets={[
                    "Clear, step-by-step explanations make learning easier",
                    "Saves time during busy weeks",
                    "Suitable for school, college and advanced math levels",
                    "Fast turnaround for urgent assignments",
                    "No hidden fees and no complicated process",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Math doesn’t have to feel confusing or overwhelming. With TutorHives.com, students get accurate, step-by-step solutions that simplify even the toughest problems. If you’re looking for reliable mathematics homework help, TutorHives is here to make math feel manageable again. Upload your math assignment today and receive clear, expert-solved solutions you can trust.",
                ]}
            />

            <SubjectsFAQs faqs={faqData} />

        </>
    );
}