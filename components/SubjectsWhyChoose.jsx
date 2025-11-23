"use client";

import { motion } from "framer-motion";

export default function SubjectsWhyChoose({ title, points = [] }) {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-black mb-10 text-center"
        >
          {title}
        </motion.h2>

        {/* Points Container */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#f9f5ef] p-6 rounded-xl shadow-md border border-[#e9d9b8] transition-all cursor-pointer hover:shadow-lg"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#C59637] mb-3">
                {item.heading}
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
