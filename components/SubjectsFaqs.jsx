"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function SubjectsFAQs({ faqs = [] }) {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">FAQs</h2>

        <p className="text-gray-600 mt-3">
          Find answers to the most common questions students have about homework help services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4 space-y-4">
        {faqs.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => toggle(item.id)}
          >
            <div className="flex justify-between items-center p-4">
              <p className="font-medium text-gray-800">
                {item.id}. {item.question}
              </p>

              {active === item.id ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
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
