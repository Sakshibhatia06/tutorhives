"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What kind of chemistry homework can TutorHives solve?",
    answer:
      "Almost anything. Whether it’s balancing equations, stoichiometry, organic chemistry basics or more advanced physical chemistry problems, TutorHives provides fully solved, accurate answers.",
  },
  {
    id: 2,
    question: "Can you help if my deadline is soon?",
    answer:
      "Yes. Many students come to TutorHives with urgent homework. As long as the task is manageable within the timeframe, it can be delivered quickly.",
  },
  {
    id: 3,
    question: "Who actually solves the assignments?",
    answer:
      "Your homework is completed by chemistry specialists who know the subject well and understand how to present answers clearly and correctly.",
  },
  {
    id: 4,
    question: "Will I get step-by-step explanations?",
    answer:
      "If you’d like them, yes. You can request detailed steps showing formulas, reasoning and the logic behind each answer.",
  },
  {
    id: 5,
    question: "Is everything original?",
    answer:
      "Absolutely. Every assignment is solved from scratch. Nothing is copied or reused.",
  },
   {
    id: 6,
    question: "How do I send my assignment?",
    answer:
      "Just upload your files and instructions on TutorHives.com. You’ll get a quote before any work begins.",
  },
   {
    id: 7,
    question: "What if something needs fixing?",
    answer:
      "Revisions are included. If something doesn’t match your instructions, the expert will adjust it.",
  },
   {
    id: 8,
    question: "How do you decide the price?",
    answer:
      "Pricing depends on how complex the task is and how soon you need it. Everything is shared upfront—no hidden charges.",
  },
  {
    id: 9,
    question: "Is my information kept private?",
    answer:
      "Yes. Your assignments, details and conversations are always kept confidential",
  },
];

export default function SubjectsFAQs() {
  const [active, setActive] = useState(1);

  const toggle = (id) => {
    setActive(active === id ? 0 : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          FAQs
        </h2>

        <p className="text-gray-600 mt-3">
          Find answers to the most common questions students have about homework help services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4 space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => toggle(item.id)}
          >
            <div className="flex justify-between items-center p-4">
              <p className="font-medium text-gray-800">{item.id}. {item.question}</p>

              {active === item.id 
                ? <ChevronDown className="w-5 h-5 text-gray-500"/> 
                : <ChevronRight className="w-5 h-5 text-gray-500"/>}
            </div>

            {active === item.id && (
              <div className="bg-white p-4 text-gray-600 border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
