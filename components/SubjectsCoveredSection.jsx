"use client";

import { motion } from "framer-motion";

export default function SubjectsCoveredSection({ title, subjects = [] }) {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black text-center mb-6"
        >
          {title}
        </motion.h2>

        {/* Subtitle (Optional) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-10"
        >
          You can get the best-rated step-by-step explanations from expert tutors.
        </motion.p>

        {/* SUBJECT CHIPS */}
        <div className="flex flex-wrap justify-center gap-5">
          {subjects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 bg-white rounded-full shadow-md border border-gray-200 text-gray-800 font-medium 
                         hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
