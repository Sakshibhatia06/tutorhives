export const metadata = {
    title: "Programming Homework Help | TutorHives.com",
    description:
        "Get expert programming homework help with clean code, clear explanations, and fast delivery. TutorHives.com solves assignments in Python, Java, C++, and more.",
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
        question: "What programming languages do you support?",
        answer:
            "We cover Python, Java, C++, C#, JavaScript, R, MATLAB, SQL, PHP, and more. If it’s part of your course, we can help.",
    },
    {
        id: 2,
        question: "Can you help with debugging my code?",
        answer:
            "Absolutely. If your code isn’t running or gives errors, we can fix it and explain what went wrong.",
    },
    {
        id: 3,
        question: "Will the code be original?",
        answer:
            "Yes. Every program is written from scratch for your specific assignment — nothing is reused.",
    },
    {
        id: 4,
        question: "Can I get explanations for the code?",
        answer:
            "Yes! We can include comments, logic walkthroughs, and step-by-step explanations so you understand how everything works.",
    },
    {
        id: 5,
        question: "Can you complete urgent programming assignments?",
        answer:
            "Yes. If the deadline is realistic, we can handle urgent tasks quickly.",
    },
    {
        id: 6,
        question: "Do you help with data structures and algorithms?",
        answer:
            "Definitely. We solve problems involving trees, graphs, recursion, dynamic programming, sorting, searching, and more.",
    },
    {
        id: 7,
        question: "Can you work on larger programming projects?",
        answer:
            "Yes — as long as the project is within your course scope. Just upload the details for review.",
    },
    {
        id: 8,
        question: "How do I submit my task?",
        answer:
            "Upload your files and instructions on TutorHives.com. You’ll get a quote before we start.",
    },
    {
        id: 9,
        question: "What if I need revisions?",
        answer:
            "Revisions that match your original instructions are free.",
    },
    {
        id: 10,
        question: "Is my information private?",
        answer:
            "Yes. Your files and personal details are kept fully confidential.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
              <WhatsAppButton />
            <SubjectsHeroSection
                title="Programming Homework Help – Clean, Expert Code & Step-By-Step Solutions"
                subtitle="Programming is fun when everything works — and incredibly frustrating when it doesn’t. A missing bracket, a wrong loop, an unexpected error… and suddenly an assignment that should take one hour takes six. When the code won’t run or the logic feels impossible, having the right support can save your grades and your sanity. TutorHives.com provides friendly, reliable programming homework help with clean, well-commented code and easy-to-understand explanations. Whether you're stuck on an intro assignment or a complex project, TutorHives helps you move forward confidently."
            />
            <SubjectsAbout
                title="Why Students Look for Programming Homework Help"
                description="Programming requires problem-solving, logic, debugging, and strong understanding of the language. Students usually reach out when they:"
                bullets={[
                    "Get stuck debugging errors they can’t identify",
                    "Can’t figure out loops, arrays, functions, or recursion",
                    "Struggle with object-oriented programming",
                    "Need help understanding algorithms or data structures",
                    "Want clean, readable code that follows best practices",
                    "Don’t have enough time to finish large programming tasks",
                    "Need code explanations that actually make sense",
                ]}
                shortDescription={`Searches for programming homework help keep increasing because students want correct, working code — with explanations — not just vague hints.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Real Programmers, Not Generic Helpers",
                        text: "Your assignments are completed by developers who understand coding logic deeply and know how to write clean, optimized, academic-friendly code.",
                    },
                    {
                        heading: "Readable, Well-Commented Solutions",
                        text: "We don’t just deliver code — we explain it. Every solution includes comments, logic breakdowns, and optional step-by-step reasoning.",
                    },
                    {
                        heading: "Simple, Honest & Student-Focused",
                        text: "No reused code. No hidden fees. No confusing process. Everything is original, private, and tailored specifically for your task.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve Programming Assignments in Multiple Languages"
                points={[
                    "Python",
                    "Java",
                    "C / C++",
                    "JavaScript",
                    "C#",
                    "R programming",
                    "PHP",
                    "MATLAB",
                    "SQL",
                    "HTML / CSS / Web Tasks",
                    "Ruby, Swift, Kotlin, Go",
                    "Basic and advanced programming logic",
                    "Loops, arrays, strings, functions",
                    "Object-Oriented Programming (OOP)",
                    "Data Structures (linked lists, stacks, queues, trees, graphs)",
                    "Algorithms (sorting, searching, recursion, dynamic programming)",
                    "Debugging and code optimization",
                    "File handling and exception handling",
                    "Database integration & SQL queries",
                    "API usage (explanatory tasks)",
                    "Small projects and modular programs",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully working code",
                    "Clean formatting",
                    "Comments explaining each part of the program",
                    "Logical flow that’s easy to read",
                    "Optional step-by-step explanations",
                    "Solutions exactly aligned to your instructions",
                    "Your final submission is polished, professional, and easy to understand",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="Fast, Simple 4-Step Flow"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your programming assignment with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a clear, upfront quote — no surprises",
                        desc: "Fair and transparent pricing",
                    },
                    {
                        num: "3",
                        title: "Get your completed code",
                        desc: "Clean, working, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if needed",
                        desc: "Free revisions included to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Students Love TutorHives"
                bullets={[
                    "Coding becomes easier to understand",
                    "Saves hours of debugging and confusion",
                    "Works for beginners and advanced students",
                    "Clean, readable code that instructors appreciate",
                    "Fast delivery for urgent assignments",
                    "Fair pricing with no hidden charges",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Programming doesn’t have to feel overwhelming or stressful. With TutorHives.com, students get clean, functional code with clear explanations that actually help them learn. If you’re stuck, stressed, or running out of time, TutorHives is here to support you every step of the way. Upload your programming assignment today and get expert help delivered quickly and clearly.",
                ]}
            />
            <SubjectsFAQs faqs={faqData} />

        </>
    );
}