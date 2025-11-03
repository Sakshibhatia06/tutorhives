"use client";
import Image from "next/image";

export default function TutorHero() {
  return (
    <section className="w-full bg-[#b58338] text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 items-center gap-12">

        {/* LEFT SIDE TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-10">
            Tutor Hives, Your Go-To Solution:
          </h1>

          {/* CURVE UNDERLINE */}
          <div className="relative mt-6 mb-6">
            <svg width="260" height="60" viewBox="0 0 260 60" fill="none">
              <path
                d="M10 40C70 10 190 10 250 40"
                stroke="#5e3a13"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="text-lg max-w-xl">
            Anytime <span className="font-bold">you need assistance</span>, all the help you require is right here!
          </p>
        </div>

        {/* RIGHT SIDE IMAGE WITH GOLDEN FILTER */}
        <div className="relative overflow-hidden w-full h-[350px] md:h-[450px]">
          <Image
            src="/images/review.png"
            alt="Tutor illustration"
            fill
            className="object-contain drop-shadow-xl"
              style={{
                filter:
                  " sepia(147%) saturate(219%) brightness(110%) contrast(96%) hue-rotate(-10deg) drop-shadow(rgba(255, 215, 140, 0.5) 0px 0px 20px)",
              }}
          />
        </div>

      </div>
    </section>
  );
}
