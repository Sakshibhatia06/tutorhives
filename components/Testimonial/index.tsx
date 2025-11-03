"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


const testimonials = [
  {
    name: "Hermanpreet",
    role: "Homework Help",
    text: `"I was worried about missing my deadline, but Tutor Hives delivered my assignment on time with 100% original and accurate content. The detailed explanations really helped me understand the complex material, and I'll definitely seek their help again."`,
  },
  {
    name: "Richard",
    role: "Assignment Help",
    text: `"With an impossible deadline looming, Tutor Hives came through and delivered my homework early. The content was accurate, original, and well-explained, helping me understand even the most complex parts of the topic. I'll definitely be using their help again."`,
  },
  {
    name: "Peter",
    role: "Live Session",
    text: `"I was struggling with a fast-approaching deadline, but thanks to Tutor Hives, I got my assignment well before the due date. The solutions were 100% original, accurate, and filled with thorough explanations that made the topic much clearer. I'll return for more help in the future."`,
  },
  {
    name: "Gilbert",
    role: "Project Report",
    text: `"Tutor Hives saved me when I had a nearly impossible deadline. They delivered the paper before the due date with 100% original content, accurate answers, and detailed explanations."`,
  },
  {
    name: "Juliya",
    role: "Lab Report",
    text: `"I had a tight deadline for my homework, but Tutor Hives delivered my assignment ahead of schedule. The work was 100% original, precise, and filled with detailed explanations, making it easier for me to understand the subject. I'll definitely use their services for future tasks."`,
  },
  {
    name: "Amelia",
    role: "Essay Writing",
    text: `"Great service! I received my essay before the deadline and got an A. Quick responses and very professional — highly recommended!"`,
  },
];

// Helper component for a single Testimonial Card
function TestimonialCard({ name, role, text, index }) {
  return (
    <div
      className="bg-white mt-20 ml-10 rounded-2xl p-6 h-[250px]  flex flex-col items-start w-full flex-shrink-0" 
      style={{ boxShadow: "0 4px 18px rgba(0, 0, 0, 0.08)" }}
    >
      <div className="flex items-center gap-4 mb-4 ">
        {/* Avatar Placeholder */}
        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={`https://i.pravatar.cc/150?img=${index + 5}`}
            className="w-full h-full object-cover"
            alt={name}
          />
        </div>

        {/* Name and Role */}
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-600 text-sm leading-relaxed mt-auto">
        {text}
      </p>
    </div>
  );
}

export default function StudentStories() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-start gap-10 relative">

        {/* Left Heading */}
        <div className="w-full md:w-1/3 relative z-20">
          <h2 className="text-4xl flex justify-center items-center font-semibold text-gray-900 mb-6 leading-snug">
            Student Stories
          </h2>
        </div>

        {/* Right Slider Container */}
        <div className="relative w-full md:w-2/3 z-10">
          
          {/* Yellow Background Strip - Positioned behind the Swiper */}
          <div 
            className="absolute top-0 left-0 right-0 w-full rounded-[16px] -z-10"
            // Adjusted height to cover the cards properly
            style={{ backgroundColor: '#fff3cd', height: '100%', minHeight: '400px', width: '1200px' }}
          ></div>

          <Swiper
            spaceBetween={30}
            // Set slidesPerView to 3 for desktop to match the screenshot look
            slidesPerView={3} 
            loop
            // Autoplay delay set to 4000ms (4 seconds) as requested
            autoplay={{ delay: 4000, disableOnInteraction: false }} 
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // Added padding to the Swiper to offset the cards visually from the top of the container
            className="pt-10 pb-10" 
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard 
                  name={item.name} 
                  role={item.role} 
                  text={item.text} 
                  index={index} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}