
"use client";
import Image from "next/image";
import { Check } from "lucide-react";

const points = [
  "You don’t understand your subjects",
  "Don’t have enough time / You have a part-time job",
  "You have a deadline that you are going to miss",
  "You are lagging behind your classmates",
  "GPA / Grades are going down & you need improvement",
  "Lack of good tutors in college / university",
];

export default function WhoIsThisFor() {
  return (
    <section className="relative bg-[#FFF3A9] pt-32 pb-20 mb-20 overflow-hidden">
      {/* Smooth Upper Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[200px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C400,40 900,260 1440,80 L1440,0 L0,0 Z"
            fill="#FFF3A9"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-5">
            Who Is This Online Assignment Help For?
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Students undergo countless struggles while they are in their college.
            If you are also facing academic problems and wondering who can help me with my assignment, we’re here.
          </p>

          <ul className="space-y-4">
            {points.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-[#C7A048] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center mt-12">
            <a
              href="https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition text-center"
            >
              Get Homework Help now!
            </a>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/confused_student.png"
            alt="Student"
            width={550}
            height={650}
            className="object-contain lg:translate-y-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}
