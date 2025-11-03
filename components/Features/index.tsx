"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

const services = [
  {
    title: "Assignment Help",
    desc: "Turn impossible deadlines into achievable goals with Tutor Hives 24/7 original and accurate homework support.",
    color: "#5C67F2",
    icon: "/images/icon1.png",
  },
  {
    title: "Live Session",
    desc: "Get live expert support to transform difficult problems into easy solutions with Tutor Hives.",
    color: "#F4B73B",
    icon: "/images/icon2.jpg",
  },
  {
    title: "Project Report Writing",
    desc: "Stand out with well-crafted, detailed projects and earn top marks and praise.",
    color: "#63D0A9",
    icon: "/images/icon3.jpg",
  },
  {
    title: "Speech Writing",
    desc: "Impress your audience and secure A+ grades with impactful speech writing help.",
    color: "#EABA54",
    icon: "/images/icon4.png",
  },
  {
    title: "Essay Writing",
    desc: "Let your essays reflect excellence with expert structuring and writing.",
    color: "#E8805B",
    icon: "/images/icon5.png",
  },
  {
    title: "Presentation Writing",
    desc: "Get expertly designed and well-organized presentations from Tutor Hives.",
    color: "#C89C59",
    icon: "/images/icon6.avif",
  },
  {
    title: "Video Solutions",
    desc: "For detailed, step-by-step solutions to your homework problems.",
    color: "#556DFF",
    icon: "/images/icon7.png",
  },
  {
    title: "Lab Report writing",
    desc: "Hand over your lab writing to professionals and enjoy precise results.",
    color: "#F48B8B",
    icon: "/images/icon8.png",
  },
  {
    title: "Online Tutoring",
    desc: "Interactive online tutoring for clear answers to your questions.",
    color: "#61B1FF",
    icon: "/images/icon9.png",
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">

        <SectionHeader
          headerInfo={{
            subtitle: "Complete assistance for every homework problem you face.",
            description:
              "Unique problems call for specific homework approaches.",
          }}
        />

        <div className="grid grid-cols-1 ml-10 mr-10 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 xl:gap-12">
  {services.map((item, i) => (
    <div
      key={i}
      className="
      pt-16
        bg-white rounded-2xl 
        shadow-[0px_12px_35px_rgba(0,0,0,0.08)]
        border border-gray-100 
        transition-all duration-300
        p-6 relative
        hover:shadow-none hover:rounded-none hover:border-transparent
      "
    >
      {/* TOP STRIP */}
      <div
  className="absolute top-10 left-0 w-full flex items-center justify-between px-3 z-10"
  style={{
    background: `linear-gradient(90deg, ${item.color} 0%, rgba(255,255,255,0) 60%)`,
  }}
>
  <span className="text-sm font-medium text-gray-800">{item.title}</span>

  {/* Icon moved out of strip height control */}
  <div className="relative">
    <img 
      src={item.icon} 
      alt={item.title} 
      className="w-20 h-20 ml-2 -mt-6" /* pulls image up */
    />
  </div>
</div>


      {/* CONTENT */}
      <div className="pt-8">
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
