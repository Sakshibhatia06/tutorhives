"use client";

import { motion } from "framer-motion";

export default function WhyStudentsPrefer({ title, bullets = [] }) {
  return (
    <section className="py-16 bg-[#FAF7F0]">
      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-10 text-center"
        >
          {title}
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {bullets.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-md border border-[#e9d9b8] hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-[#C59637] text-2xl font-bold">✔</span>
                <p className="text-gray-800 text-[17px] leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
