"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const benefits = [
  {
    title: "No Plagiarism",
    desc: "Original solutions that effectively reduce the potential for negative marking.",
    icon: "/images/certificate-icon-vector.jpg",
  },
  {
    title: "24/7 support",
    desc: "When homework problems strike, we’re here for students at all hours.",
   
    icon: "/images/text-2xl.png",
  },
  {
    title: "On-time Submission",
    desc: "No matter how hard the job is, we guarantee submission before the deadline.",
    icon: "/images/browser-icon-vector.jpg",
  },
  {
    title: "Rewrites that satisfy",
    desc: "Access unlimited revisions of your homework until you are fully pleased with the work.",
    icon: "/images/sketch-creative-icon-design-vector.jpg",
  },
  {
    title: "Confidentiality",
    desc: "Your information will always remain fully protected.",
    icon: "/images/lock.webp",
  },
  {
    title: "Accurate, Grade Boosting solutions",
    desc: "100% correct solutions in 250+ subjects to help improve your GPA.",
    icon: "/images/altsome_logo-1.jpg",
  },
];


export default function HomeworkBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">
          Tutor Hives Homework Help Benefits
        </h2>

        <p className="text-gray-600 mt-2 mb-14">
          Tutor Hives is dedicated to crafting a conducive platform that helps students ascend to success.
        </p>

        <div className="grid sm:grid-cols-2 gap-12 text-left">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-5 items-start"
            >
             
  <Image src={item.icon} width={80} height={80} alt={item.title} className="object-cover" />


              <div>
                <h3 className="font-semibold text-gray-900 text-[25px]">{item.title}</h3>
                <p className="text-gray-600 text-lg mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="mt-14 bg-[#b48232] text-white px-8 py-4 rounded-md text-sm font-medium hover:opacity-90 transition">
          Get College Homework Help Now!
        </button>
      </div>
    </section>
  );
}
