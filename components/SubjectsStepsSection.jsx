"use client";
import { motion } from "framer-motion";

export default function SubjectsStepsSection({
  title = "Successfully Complete Homework Help in 4 Steps.",
  subtitle = "It’s THAT Simple.",
  steps = [],
  bgColor = "#FFF3B0",
}) {
  return (
    <section className="py-20" style={{ backgroundColor: bgColor }}>
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
        <p className="italic text-gray-700 mt-2 mb-10 text-sm">{subtitle}</p>

        {/* Dynamic Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div
                className="p-8 h-full min-h-[260px] lg:min-h-[350px] border border-transparent flex flex-col justify-start relative"
                style={{
                  background:
                    "linear-gradient(to right, #ffffff 60%, rgba(255,243,176,0.6) 100%)",
                  boxShadow: "-10px 0 18px rgba(0,0,0,0.4)",
                }}
              >
                <p className="text-3xl mt-10 font-bold text-gray-800 mb-4">
                  {step.num}
                </p>
                <h3 className="font-semibold text-2xl mt-2 text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

         <a
    href="https://wa.me/917000000000?text=Hi%20I%20need%20homework%20help"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 inline-block bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition text-center"
  >
    Get Homework Help now!
  </a>
      </div>
    </section>
  );
}
