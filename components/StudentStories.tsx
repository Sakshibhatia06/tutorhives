"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Emma",
    text: `"During my semester exams, I was swamped with numerous assignments. However, a classmate recommended this service, and they delivered my assignment the very next day! Truly a stress reliever!"`,
  },
  {
    name: "Amelia",
    text: `"This website is a lifesaver. Even at the last minute, they accepted my assignment and delivered it before the deadline. I'm highly impressed with their quality and support!"`,
  },
  {
    name: "Noah",
    text: `"Amazing academic support! Thanks to their help, I completed my tasks on time and scored high. Totally recommend their assignment services."`,
  },
  {
    name: "Liam",
    text: `"Excellent quality work and timely delivery. The support team is fantastic — always ready to help. I improved my grades significantly!"`,
  },
  {
    name: "Sophia",
    text: `"Professional tutors and zero plagiarism — exactly what I needed! I trust them with my assignments every time."`,
  },
  {
    name: "Ethan",
    text: `"They saved me multiple times with urgent deadlines. Assignments were clear, detailed, and well-referenced. Superb experience!"`,
  },
  {
    name: "Ava",
    text: `"Great platform for academic help. I received personalized assistance and it helped me understand my topics better!"`,
  },
  {
    name: "Oliver",
    text: `"Fast, reliable, and affordable. The best assignment help service I’ve used so far!"`,
  },
];

export default function StudentStories() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Student Stories
        </h2>
        <p className="text-gray-600">
          We have got{" "}
          <span className="font-bold text-black">
            3k+ positive student ratings
          </span>{" "}
          from around the globe. Their reviews show how we helped them grow
          academically.
        </p>
      </div>

      <div className="mt-10 max-w-7xl mx-auto px-4">
       <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{
    clickable: true,
    el: ".custom-pagination",
  }}
  autoplay={{ delay: 5000 }}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-10"
>
  {testimonials.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="bg-[#FFF4C2] rounded-lg p-8 shadow-md text-center flex flex-col justify-between h-[260px] md:h-[280px]">
        <p className="text-gray-800 italic mb-6 text-sm md:text-base leading-relaxed">
          {item.text}
        </p>
        <h3 className="font-bold text-gray-900">{item.name}</h3>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
<div className="custom-pagination mt-6 flex justify-center gap-2"></div>


      </div>
    </section>
  );
}
