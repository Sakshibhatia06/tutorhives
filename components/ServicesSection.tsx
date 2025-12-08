"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Online Assignment Help",
    desc: "Got study-related doubts or need assistance? Clear your questions, find the right solutions, and talk to an expert.",
    img: "/images/image1.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Essay Writing Service",
    desc: "Let your ideas flow, and our expert writers will turn them into A+ essays for your assignments.",
    img: "/images/image2.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Live Session",
    desc: "Get clarity on every concept—enjoy personalized one-on-one expert sessions that ensure no doubts linger.",
    img: "/images/image3.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Lab Report Writing Services",
    desc: "With perfect accuracy, strong structure, and exact precision, your lab reports will easily earn an A+.",
    img: "/images/image4.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Project Report Writing Service",
    desc: "When innovation and creativity align with scientific excellence, your projects will undoubtedly stand out.",
    img: "/images/image5.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Speech Writing Service",
    desc: "With our words and your delivery, you’ll have a speech that captures attention and boosts your grades.",
    img: "/images/image6.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Presentation Writing Service",
    desc: "Achieve excellence in your presentations—trust our expert presentation writing service.",
    img: "/images/image7.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Video Solutions",
    desc: "Incorporate AV elements into your assignments to ensure complete clarity on every problem you face.",
    img: "/images/image8.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
  {
    title: "Online Tutoring",
    desc: "It’s time to eliminate your study concerns. Get interactive online tutoring to clarify confusion and solve your queries.",
    img: "/images/image9.png", // update your image path
    whatsapp: "https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment"
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full px-5 md:px-10 py-24 space-y-16">
      {services.map((service, index) => (
        <div
          key={service.title}
          className={`grid md:grid-cols-2 gap-10 rounded-3xl p-8 md:p-12 bg-[#EDE1D6] items-center 
          border border-[#e3d4c8]`}
        >
          {/* Image Left / Right alternate */}
          <div className={`${index % 2 !== 0 ? "order-2" : ""}`}>
            <div className="rounded-2xl overflow-hidden border border-[#e3d4c8]">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover bg-[#836fc2]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              {service.title}
            </h2>
            <p className="text-[16px] text-[#4b4b4b] leading-relaxed max-w-md">
              {service.desc}
            </p>

            <Link
              href={service.whatsapp}
              target="_blank"
              className="inline-block w-fit border border-[#b89236] text-[#1a1a1a] px-6 py-2 rounded-full hover:bg-[#b89236] hover:text-white transition font-medium"
            >
              Know more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
