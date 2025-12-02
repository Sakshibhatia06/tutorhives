"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["Live Sessions", "Assignment Help", "Project Guidance"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7b85b] via-[#cd9a3a] to-[#b3812e] -z-10" />

      <div className="max-w-6xl mx-auto text-center mt-20 px-5 pt-28 pb-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold opacity-90 pb-4">
          Get Uniquely Crafted
        </h2>

       <h1 className="text-4xl md:text-4xl font-extrabold mt-1 mb-1 pb-4">
  <span
    className={`inline-block transition-all duration-500 text-[#FFEAB3] 
      ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`}
  >
    {words[index]}
  </span>
</h1>


        <h3 className="text-lg md:text-2xl font-semibold opacity-95 mb-4">
          Available 24X7
        </h3>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 font-medium">
          Solutions shaped for you, available exactly when you <strong>need them</strong>
        </p>

        {/* Button */}
       <div className="flex justify-center mt-12">
  <a
    href="https://wa.me/917000000000?text=Hi%20I%20need%20homework%20help"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition text-center"
  >
    Get Homework Help now!
  </a>
</div>


        {/* Ratings */}
        <div className="flex md:flex-row justify-between md:gap-32 gap-4 mt-10 text-center md:text-left">
<div className="flex items-center gap-3">
  <img
    src="/images/trustpilot-1.png"
    alt="Trustpilot"
    className="md:h-[40px] h-[28px] w-auto object-contain mb-3"
  />
  <span className="text-white md:text-[34px] text-[24px] font-semibold leading-[1] flex items-center">
    4.4
  </span>
</div>


<div className="flex items-center gap-3">
  <img
    src="/images/edureviewer.png"
    alt="Trustpilot"
    className="h-[28px] w-auto md:h-[40px] object-contain"
  />
  <span className="text-white md:text-[34px] text-[24px]  font-semibold leading-[1] flex items-center">
    4.4
  </span>
</div>

</div>

      </div>

 <section className="bg-[#8b6e42] mt-10 w-full px-4 py-8">

  {/* Top Row */}
  <div
    className="
      flex md:flex-row
      items-center justify-center 
      gap-6 md:gap-[270px] 
      mt-[-60px] md:mt-[-90px]
    "
  >
    {/* Left Image */}
    <img
      src="/images/verified_answers (1).png"
      alt="Verified Answers"
      className="w-20 md:w-32 h-auto"
      style={{
        filter:
          "brightness(100%) contrast(120%) saturate(150%) blur(0px) hue-rotate(180deg)",
      }}
    />

    <span
      className="
        bg-[#8b6e42] text-white 
        px-6 py-2 
        rounded-3xl 
        text-[16px] md:text-md
        text-center 
      "
    >
      Trusted by 2.1 M+ Happy Students
    </span>

    {/* Right Image */}
    <img
      src="/images/money_back (1).png"
      alt="Money Back"
      className="w-20 md:w-32 h-auto"
      style={{
        filter:
          "brightness(100%) contrast(120%) saturate(150%) blur(0px) hue-rotate(180deg)",
      }}
    />
  </div>

  {/* Stats Numbers */}
  <div
    className="
      flex flex-col md:flex-row
      items-center md:justify-center 
      gap-6 md:gap-[180px]"
  >
    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-bold">86526+</h2>
      <p className="text-sm md:text-base mt-1">Student Ratings</p>
    </div>

    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-bold">147526+</h2>
      <p className="text-sm md:text-base mt-1">Delivered Orders</p>
    </div>

    <div className="text-center">
      <h2 className="text-xl md:text-3xl font-bold">15626+</h2>
      <p className="text-sm md:text-base mt-1">Subject Matter Experts</p>
    </div>
  </div>

</section>

    </section>
  );
}

