"use client";
import Image from "next/image";

export default function GlobalPartnerSection() {
  return (
    <section className="bg-[#caa04c] py-28 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tutor Hives — Your Global Partner
            <br /> in Academic Success
          </h2>

          <p className="text-white/90 mt-6 text-lg leading-relaxed">
            Tutor Hives bridges educational gaps across the world. With 300,000+
            orders and 100,000+ happy students, we're trusted in the UK, USA,
            Canada, Australia, Singapore, and the UAE.
          </p>

          <button className="mt-10 bg-gradient-to-r from-[#F9E3A6] via-[#E4BE67] to-[#C59637] text-black font-semibold px-8 py-4 rounded-xl shadow-md hover:scale-105 transition-all">
            Get My Homework Done
          </button>
        </div>

        {/* RIGHT MAP */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f7d69230] to-[#b8860b30] blur-3xl rounded-full"></div>

          <div className="relative w-[350px] h-[330px] md:w-[660px] md:h-[400px]">
            <Image
              src="/images/globe.png"
              alt="Golden World Map"
              fill
              className="object-contain drop-shadow-xl"
              style={{
                filter:
                  " sepia(119%) saturate(137%) brightness(140%) contrast(139%) hue-rotate(-10deg) drop-shadow(rgba(255, 215, 140, 0.5) 0px 0px 20px)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

