"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Sign up",
    desc: "Finish the registration process by providing your details at https://tutorhives.com/sign-up/",
  },
  {
    num: "2",
    title: "Place your order",
    desc: "Log into the dashboard to place your order and upload your questions.",
  },
  {
    num: "3",
    title: "Make Payment",
    desc: "You’ll receive a price quote and payment link tailored to your order.",
  },
  {
    num: "4",
    title: "Get Solution",
    desc: "After payment is confirmed, your homework will be ready before the indicated deadline.",
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 bg-[#FFF3B0]">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-semibold text-gray-900">
          Successfully Complete Homework Help in 4 Steps.
        </h2>
        <p className="italic text-gray-700 mt-2 mb-10 text-sm">It’s THAT Simple.</p>

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
                  boxShadow: "-10px 0 18px rgba(0,0,0,0.4)" // LEFT SHADOW HERE
                }}
              >

                <p className="text-3xl mt-10 font-bold text-gray-800 mb-4">{step.num}</p>
                <h3 className="font-semibold text-2xl mt-2 text-gray-900 mb-3">{step.title}</h3>
                <p className="text-lg text-gray-700 mt-2 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>


        <button className="mt-10 bg-[#b48232] text-white px-6 py-4 rounded-md text-sm hover:opacity-90">
          Get Homework Help
        </button>
      </div>
    </section>
  );
}
