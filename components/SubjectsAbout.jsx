"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SubjectsAbout({
  title,
  description,
  bullets = [],
  shortDescription,
  image,
  darkImage
}) {
  return (
    <section className="overflow-hidden mt-20 pb-10">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
          
          {/* ===== Left Image ===== */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
          >
            <Image src={image} alt={title} className="dark:hidden" fill />
            {darkImage && (
              <Image src={darkImage} alt={title} className="hidden dark:block" fill />
            )}
          </motion.div>

          {/* ===== Right Content ===== */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right md:w-1/2"
          >
            <h2 className="mb-5 text-3xl font-bold text-black leading-snug">
              {title}
            </h2>

            <p className="text-[17px] text-black mb-6 leading-relaxed">
              {description}
            </p>

            <ul className="space-y-3 text-[17px] text-gray-800">
              {bullets.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-[#C59637] text-xl font-bold">✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[17px] mt-4 text-black mb-6 leading-relaxed">
              {shortDescription}
            </p>

            <button className="mt-8 px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#F9E3A6] via-[#E4BE67] to-[#C59637] text-black shadow-md hover:scale-105 transition-all">
                Sign Up Now!
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
