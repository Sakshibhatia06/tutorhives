export const metadata = {
    title: "Finance Homework Help | TutorHives.com",
    description:
        "Get clear, accurate finance homework and assignment solutions from TutorHives.com. Expert help, fast delivery, and stress-free support for students."
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
        question: "What types of finance homework can you help with?",
        answer:
            "Pretty much all finance topics—TVM, valuation, ratios, capital budgeting, portfolio theory, corporate finance, Excel tasks and more.",
    },
    {
        id: 2,
        question: "Can you complete urgent finance assignments?",
        answer:
            "Yes! Many students come to us with last-minute deadlines. If it’s manageable, we’ll complete it quickly.",
    },
    {
        id: 3,
        question: "Who solves the finance homework?",
        answer:
            "Experienced finance professionals who understand the subject deeply and know how to present answers clearly.",
    },
    {
        id: 4,
        question: "Can I get step-by-step explanations?",
        answer:
            "Yes. You can ask for detailed steps, explanations and reasoning for calculations or graphs.",
    },
    {
        id: 5,
        question: "Will the work be original?",
        answer:
            "Absolutely. Every assignment is created from scratch. Nothing is copied or reused.",
    },
    {
        id: 6,
        question: "How do I submit my homework?",
        answer:
            "Just upload your instructions and files on TutorHives.com. Our team will review everything and send you a quote.",
    },
    {
        id: 7,
        question: "What if I need changes to the solution?",
        answer:
            "Revisions that fit your original instructions are free. Just tell us what you need updated.",
    },
    {
        id: 8,
        question: "How do you decide the price?",
        answer:
            "Pricing depends on how complex the assignment is and how soon you need it. Everything is shared upfront—no hidden fees.",
    },
    {
        id: 9,
        question: "Is my information private?",
        answer:
            "Yes. Your files, messages and personal details are always kept confidential.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
            <SubjectsHeroSection
                title="Finance Homework Help – Expert-Solved Assignments Made Simple"
                subtitle="Finance can be fascinating—until you're staring at formulas, spreadsheets, valuation problems, or case studies that refuse to make sense. When deadlines are tight or certain concepts feel overwhelming, getting the right support can save hours of stress. TutorHives.com offers friendly, reliable finance homework help with fully solved assignments that are easy to follow and ready to submit. Whether you're working through time value of money or complex financial modeling, TutorHives makes things feel manageable again."
            />
              <WhatsAppButton />
            <SubjectsAbout
                title="Why Students Look for Finance Homework Help"
                description="Finance is a mix of math, logic, business understanding, and analytical thinking. It can be rewarding, but also pretty demanding. Students usually look for help when they:"
                bullets={[
                    "Struggle with time value of money or discounted cash flow",
                    "Get stuck on corporate finance problems or financial ratios",
                    "Find risk, return, and portfolio questions confusing",
                    "Need help preparing neat, accurate Excel-based solutions",
                    "Don’t have time to write long analysis-based answers",
                    "Feel overwhelmed by multi-step calculations",
                ]}
                shortDescription={`Searches for finance homework help keep rising because students want clear, correct, professional solutions—not vague hints or incomplete steps.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Finance Experts Who Explain Clearly",
                        text: "Each assignment is solved by a finance specialist who knows how to break down complex ideas into simple, understandable steps.",
                    },
                    {
                        heading: "Organized, Instruction-Friendly Solutions",
                        text: "Every solution is clean, structured, and delivered exactly how your instructor expects it. If you request explanations, they're written in easy-to-understand language.",
                    },
                    {
                        heading: "Straightforward, Honest Service",
                        text: "No reused content. No hidden charges. No complicated process. Just original, private, student-focused help every time.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Solve a Wide Range of Finance Assignments"
                points={[
                    "Time Value of Money (TVM)",
                    "Discounted Cash Flow (DCF) & Valuation",
                    "Corporate Finance & Capital Budgeting",
                    "Financial Ratios, Statements & Analysis",
                    "Portfolio Theory & Risk/Return Concepts",
                    "Cost of Capital (WACC, CAPM, Beta)",
                    "Bond Pricing & Yield Calculations",
                    "Stock Valuation & Dividend Models",
                    "Break-even, Forecasting & Budgeting",
                    "Excel-based finance problems",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Fully solved, ready-to-submit assignments",
                    "Accurate formulas, calculations, and explanations",
                    "Clean, neat tables or spreadsheets (when required)",
                    "Explanations written clearly upon request",
                    "Formatting exactly based on your instructions",
                    "TutorHives focuses on clarity, accuracy, and making your assignment stress-free",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="A Simple, Student-Friendly 4-Step Flow"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your finance homework with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a clear quote",
                        desc: "Fair and transparent pricing based on complexity and urgency",
                    },
                    {
                        num: "3",
                        title: "Get your fully solved solution",
                        desc: "Organized, accurate, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if needed",
                        desc: "Revisions are included to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Students Love Using TutorHives"
                bullets={[
                    "Saves time when you're overloaded with work",
                    "Makes tough finance concepts much easier",
                    "Clean, accurate calculations you can trust",
                    "Works for school, college, and advanced finance courses",
                    "Quick turnaround for tight deadlines",
                    "No hidden fees, no confusion",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Finance doesn’t have to feel stressful or intimidating. With TutorHives.com, students get fully solved, accurate assignments that make learning easier. If you’re looking for dependable finance homework help, TutorHives is ready to step in and simplify the process. Upload your finance assignment today and get expert solutions delivered with clarity and care.",
                ]}
            />
            =
            <SubjectsFAQs faqs={faqData} />

        </>
    );
}