export const metadata = {
    title: "Writing Homework Help | TutorHives.com",
    description:
        "Get expert writing homework help from TutorHives.com. Essays, summaries, reports, reflections, and more — clearly written and ready to submit.",
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
        question: "What types of writing assignments can you help with?",
        answer:
            "Essays, reflections, summaries, short responses, reports, research writing, creative writing, discussion posts and more.",
    },
    {
        id: 2,
        question: "Can you match my writing style?",
        answer:
            "Yes! You can request simple, conversational, academic, or formal writing — we match your tone and level.",
    },
    {
        id: 3,
        question: "Do you help with grammar and rewriting?",
        answer:
            "Absolutely. We can rewrite, polish, edit or fully rewrite drafts to make them clearer and more professional.",
    },
    {
        id: 4,
        question: "Can you help with citations and formatting?",
        answer:
            "Yes. We can format your work in APA, MLA, Chicago, or any style your instructor requires.",
    },
    {
        id: 5,
        question: "Is all writing original?",
        answer:
            "100%. Everything is written from scratch for your assignment — nothing is copied or reused.",
    },
    {
        id: 6,
        question: "Can you complete urgent writing tasks?",
        answer:
            "Yes. If the deadline is realistic, we can complete writing assignments quickly.",
    },
    {
        id: 7,
        question: "Will the finished work sound natural?",
        answer:
            "Yes. We write in clean, understandable language so your assignment sounds natural and clear.",
    },
    {
        id: 8,
        question: "How do I submit my assignment?",
        answer:
            "Just upload your instructions and files on TutorHives.com, and you’ll receive a quote right away.",
    },
    {
        id: 9,
        question: "What if I need revisions?",
        answer:
            "Revisions based on your original instructions are always free.",
    },
    {
        id: 10,
        question: "Is my information kept private?",
        answer:
            "Yes — your files, instructions and details are fully confidential.",
    },
];


export default function AccountingHomeworkHelp() {
    return (
        <>
            <Header />
               <SubjectsHeroSection
                title="Writing Homework Help – Clear, Polished & Professionally Written Assignments"
                subtitle="Writing assignments can feel simple at first… until you’re actually staring at a blank page trying to come up with the right words. Essays, summaries, research responses, reflections, reports — each one requires structure, clarity, grammar, and enough time to do it well. When deadlines pile up or ideas just won’t flow, getting supportive help can make all the difference. TutorHives.com offers friendly, reliable writing homework help with well-written, easy-to-understand assignments that match your style and instructions perfectly.
"/>
            <SubjectsAbout
                title="Why Students Look for Writing Homework Help"
                description="Writing takes time — a lot of it. And between classes, commitments, readings and research, students often need support when they:"
                bullets={[
                    "Struggle getting started or organizing ideas",
                    "Need help expressing thoughts clearly",
                    "Find grammar, flow, or structure confusing",
                    "Want a polished piece that sounds natural and academic",
                    "Don’t feel confident writing summaries or reflections",
                    "Stress over citations, formatting or word counts",
                    "Simply don’t have time to finish long writing tasks",
                ]}
                shortDescription={`That’s why searches for writing homework help continue to grow — students want clear, natural writing that meets academic expectations.`}
                image="/images/signup.png"
                darkImage="/images/about/about-dark-01.png"
            />
              <WhatsAppButton />

            <SubjectsWhyChoose
                title="Why TutorHives.com Is a Trusted Choice"
                points={[
                    {
                        heading: "Writers Who Understand Academic Standards",
                        text: "Assignments are written by professionals who know how to structure essays, follow instructions, and write in a clean, understandable voice that fits your grade level.",
                    },
                    {
                        heading: "Clear, Well-Organized, Student-Friendly Writing",
                        text: "Every piece is written in smooth, simple language. Whether it’s an essay, reflection or research-based response, the writing is clear, cohesive and easy to follow.",
                    },
                    {
                        heading: "Honest & Straightforward Process",
                        text: "No reused papers. No hidden fees. No overcomplicated instructions. Everything is original, private, and tailored specifically to your assignment.",
                    },
                ]}
            />

            <HowItWorksSubjectsSection
                title="What TutorHives.com Helps With"
                subtitle="We Write a Wide Range of Assignments"
                points={[
                    "Essays (narrative, persuasive, compare/contrast, analytical, etc.)",
                    "Summaries & paraphrasing assignments",
                    "Reflection papers",
                    "Short answers & responses",
                    "Reports",
                    "Creative writing tasks",
                    "Research-based writing",
                    "Discussion posts",
                    "Reading reflections",
                    "Book/movie/article reviews",
                    "Argumentative writing",
                    "Descriptive writing",
                ]}
            />

            <WhyStudentsPrefer
                title="What You Receive"
                bullets={[
                    "Clear, well-written, ready-to-submit content",
                    "Correct spelling, grammar, formatting and structure",
                    "Writing in your preferred tone (simple, professional, academic, etc.)",
                    "Optional citations or references",
                    "Work 100% tailored to your instructions",
                    "Whether it’s a large essay or a short paragraph, TutorHives writes it cleanly and professionally",
                ]}
            />

            <SubjectsStepsSection
                title="How the Process Works"
                subtitle="Simple 4-Step Workflow"
                bgColor="#FFF3B0"
                steps={[
                    {
                        num: "1",
                        title: "Upload your writing assignment with instructions and deadline",
                        desc: "Upload The Task, Requirements, Deadline",
                    },
                    {
                        num: "2",
                        title: "Receive a clear quote — honest and upfront",
                        desc: "Transparent pricing based on assignment requirements",
                    },
                    {
                        num: "3",
                        title: "Get your fully written homework",
                        desc: "Polished, formatted, and ready to submit",
                    },
                    {
                        num: "4",
                        title: "Request revisions if something needs adjusting",
                        desc: "Free revisions included to match your original instructions",
                    },
                ]}
            />

            <SubjectsWhatYouGet
                title="Why Students Love TutorHives"
                bullets={[
                    "Saves time and reduces writing stress",
                    "Clear, natural writing that matches your style",
                    "Perfect for all grade levels",
                    "Fast turnaround on urgent writing tasks",
                    "No hidden fees or complicated steps",
                ]}
                image="/images/Student-reviewing-solved-accounting-assignment.jpg"
                darkImage="/images/about/about-dark-01.png"
            />

            <WriteMyPaper
                title="Conclusion"
                paragraphs={[
                    "Writing doesn’t have to be stressful or time-consuming. With TutorHives.com, students get clear, polished and professionally written assignments that are ready to submit — without the overwhelm. If you’re searching for reliable writing homework help, TutorHives is here to make writing simpler, smoother and stress-free. Upload your writing assignment today and receive expert-written work you can trust.",
                ]}
            />
            <SubjectsFAQs faqs={faqData} />

        </>
    );
}