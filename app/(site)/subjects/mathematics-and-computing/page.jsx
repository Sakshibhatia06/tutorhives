export const metadata = {
    title: "Mathematics and Computing Homework Help | TutorHives.com",
    description:
     "Get clear, accurate mathematics and computing homework solutions from TutorHives.com. Expert-solved assignments delivered on time.",
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
        question: "Can you help with both the math and the programming parts of my assignment?",
        answer:
            "Yes! Many mathematics-and-computing tasks involve a mix of formulas, logic, and code. We can solve the math, write the code, explain the logic behind it, or do all three—whatever your assignment requires.",
    },
    {
        id: 2,
        question: "What programming languages do you support?",
        answer:
            "We help with Python, C, C++, Java, MATLAB, R, and several other languages commonly used in math and computing courses. If your assignment uses a specific language, just upload it—we’ll match it with the right expert.",
    },
    {
        id: 3,
        question: "Will the solutions be easy to understand?",
        answer:
            "Absolutely. Whether it’s a proof, a matrix problem, an algorithm, or a code snippet, we explain the process clearly so the final solution actually makes sense to you.",
    },
    {
        id: 4,
        question: "Can you debug my code or fix errors?",
        answer:
            "Yes. If your code is giving errors or not producing the right output, we can fix it, rewrite parts, or optimize it. We can also explain what went wrong so you understand for next time.",
    },
    {
        id: 5,
        question: "What if my math problem needs a diagram, graph, or visual?",
        answer:
            "No problem! We can create graphs, flowcharts, tree diagrams, plots, or any visuals your assignment needs—clean, neat, and easy to follow.",
    },
    {
        id: 6,
        question: "Do you offer step-by-step explanations?",
        answer:
            "Of course. Many students ask for breakdowns of each step—especially for discrete math, calculus, proofs, or algorithm analysis. Just let us know, and we’ll include it.",
    },
    {
        id: 7,
        question: "Can you work on advanced topics too?",
        answer:
            "Yes. We help with everything from foundational math to advanced subjects like computational mathematics, algorithmic complexity, numerical methods, graph theory, linear algebra, data structures, recursion, and dynamic programming.",
    },
    {
        id: 8,
        question: "How fast can you complete an assignment?",
        answer:
            "It depends on complexity, but we handle urgent tasks every day. If your deadline is short, we’ll let you know immediately whether it’s doable—and we work fast.",
    },
    {
        id: 9,
        question: "Will my homework be original and private?",
        answer:
            "Yes. Every solution is created from scratch, and your files and details are kept fully confidential. Nothing is reused or shared.",
    },
    {
        id: 10,
        question: "How do I get started?",
        answer:
            "Just upload your assignment on TutorHives.com. Add your instructions, deadline, and any files. We’ll review it and send a clear, upfront quote before starting.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
            <SubjectsHeroSection
                title="Mathematics and Computing Homework Help – Expert, Step-By-Step Solutions You Can Trust"
                subtitle="Mathematics and computing often go hand-in-hand—especially when you’re working through coding challenges, algorithms, matrices or logic-based problems. But when a single question takes hours or the theory doesn’t match what you see on your screen, things can get frustrating fast. TutorHives.com offers friendly, reliable mathematics and computing homework help with step-by-step, expert-solved assignments that make even complex topics easy to understand. Whether it’s pure math, programming, or computational problem-solving, TutorHives is here to help you work smarter—not harder."
            />
              <WhatsAppButton />
            <SubjectsAbout
                title="Why Students Look for Mathematics & Computing Homework Help"
                description="This subject combo requires sharp logic, good math foundations, and a lot of problem-solving practice. Students usually reach out when they:"
                bullets={[
                    "Get stuck on algorithm-based math problems",
                    "Struggle with discrete math, graph theory or number theory",
                    "Find programming logic confusing",
                    "Run into debugging issues they can’t solve",
                    "Have difficulty with matrices, linear algebra or numerical methods",
                    "Need help connecting math concepts with actual code",
                    "Don’t have time to complete long problem sets or coding tasks",
                ]}
                shortDescription={`Searches for mathematics and computing homework help continue rising because students want clear, correct, step-by-step solutions—not just general hints.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Experts in Both Math and Computing",
                        text: "Your homework is handled by professionals who understand how mathematical logic translates into programming logic—and explain it in a simple, practical way.",
                    },
                    {
                        heading: "Clean, Easy-to-Follow Solutions",
                        text: "Every answer is well-organized, clearly explained, and tailored to your instructions. If your task involves both math steps and code, both will be presented cleanly and correctly.",
                    },
                    {
                        heading: "Honest, Student-Friendly Support",
                        text: "No reused answers. No hidden charges. No confusing process. Everything is original and confidential from start to finish.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Math & Computing Assignments"
                points={[
                    "TutorHives handles everything from foundational math to algorithm-heavy programming tasks, including:",
                    "Discrete Mathematics (logic, sets, relations, proof techniques)",
                    "Graph Theory (paths, trees, networks)",
                    "Number Theory",
                    "Linear Algebra & Matrices",
                    "Probability & Statistics",
                    "Algorithms & Data Structures",
                    "Complexity Theory (Big-O, runtime analysis)",
                    "Python, C, C++, Java and MATLAB assignments",
                    "Dynamic Programming & Recursion problems",
                    "Computational Mathematics",
                    "Numerical Methods",
                    "Coding logic, debugging, and step-by-step code explanations",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved math + computing assignments",
                    "Clean code with comments (if coding is required)",
                    "Step-by-step explanations for math sections",
                    "Graphs, diagrams or tables where needed",
                    "Solutions formatted exactly to your instructions",
                    "You get clarity, accuracy and a finished assignment you can rely on",
                ]}
            />

            <SubjectsStepsSection
                title="How It Works"
                subtitle="A Simple, Stress-Free 4-Step Process"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your assignment with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Get a clear quote before work begins",
                        desc: "Fair, transparent pricing based on complexity and urgency",
                    },
                    {
                        num: "3",
                        title: "Receive your solved homework",
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
                title="Why Students Choose TutorHives"
                bullets={[
                    "Perfect for subjects that blend math with computer science",
                    "Saves time when assignments pile up",
                    "Step-by-step solutions make learning easier",
                    "Works for school, college and advanced courses",
                    "Fast delivery for urgent homework",
                    "Fair, transparent pricing",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Mathematics and computing don’t have to feel overwhelming or confusing. TutorHives.com gives students clear, step-by-step, expert-solved solutions that make even the toughest questions feel manageable. If you’re looking for dependable mathematics and computing homework help, TutorHives is ready to make things easier. Upload your assignment today and get expert help delivered with clarity and care.",
                ]}
            />


            <SubjectsFAQs faqs={faqData} />

        </>
    );
}