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

