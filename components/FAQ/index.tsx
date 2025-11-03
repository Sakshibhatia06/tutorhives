"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How does online homework help work?",
    answer:
      "You simply upload your homework questions or assignment details on our platform, choose the deadline, and one of our subject experts will provide step-by-step solutions, explanations, or live guidance.",
  },
  {
    id: 2,
    question: "Is online homework help considered cheating?",
    answer:
      "No. We provide learning assistance, explanations, and guided solutions to help you understand concepts — not do your work for dishonest purposes.",
  },
  {
    id: 3,
    question: "Can I get last-minute homework help?",
    answer:
      "Yes, we offer urgent homework support for tight deadlines, including same-day and overnight help.",
  },
  {
    id: 4,
    question: "What subjects do you cover for homework help?",
    answer:
      "We cover a wide range of subjects including mathematics, engineering, business, computer science, literature, and many more.",
  },
  {
    id: 5,
    question: "How much does online homework help cost?",
    answer:
      "Cost depends on the subject, difficulty level, and deadline — but we offer flexible pricing and student-friendly rates.",
  },
];

export default function FAQ() {
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
