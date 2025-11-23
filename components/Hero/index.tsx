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

  const VerifiedBadge = () => (
    <svg width="120" height="120" viewBox="0 0 130 130" fill="none">
      <defs>
        <radialGradient id="gold_grad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#f6d890" />
          <stop offset="50%" stopColor="#d2a347" />
          <stop offset="100%" stopColor="#8a6220" />
        </radialGradient>
      </defs>

      <circle cx="65" cy="65" r="63" fill="url(#gold_grad)" stroke="#eac16c" strokeWidth="3" />
      <circle cx="65" cy="65" r="48" fill="none" stroke="#f7d88b" strokeWidth="2" strokeDasharray="4 8" />
      <text x="65" y="32" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">VERIFIED</text>
      <text x="65" y="98" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">ANSWERS</text>
      <text x="65" y="73" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">100%</text>
    </svg>
  );

  const MoneyBackBadge = () => (
    <svg width="120" height="120" viewBox="0 0 130 130" fill="none">
      <defs>
        <radialGradient id="gold_grad2" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#f6d890" />
          <stop offset="50%" stopColor="#d2a347" />
          <stop offset="100%" stopColor="#8a6220" />
        </radialGradient>
      </defs>

      <circle cx="65" cy="65" r="63" fill="url(#gold_grad2)" stroke="#eac16c" strokeWidth="3" />
      <circle cx="65" cy="65" r="48" fill="none" stroke="#f7d88b" strokeWidth="2" strokeDasharray="4 8" />
      <text x="65" y="32" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">MONEY BACK</text>
      <text x="65" y="98" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">GUARANTEE</text>
      <text x="65" y="73" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="700">100%</text>
    </svg>
  );

  return (
    <section className="relative text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e7b85b] via-[#cd9a3a] to-[#b3812e] -z-10" />

      <div className="max-w-6xl mx-auto text-center mt-20 px-5 pt-28 pb-10">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold opacity-90 pb-4">
          Get Uniquely Crafted
        </h2>

       <h1 className="text-4xl md:text-6xl font-extrabold mt-1 mb-1 pb-4">
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
       <div className="flex justify-center mt-8">
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
        <div className="flex flex-col md:flex-row justify-between md:gap-32 gap-4 mt-10 text-center md:text-left">

  <div className="flex items-center justify-center md:justify-start gap-2 text-white text-2xl md:text-3xl font-semibold">
    ⭐ <span className="opacity-90">Trustpilot</span> 4.4
  </div>

  <div className="flex items-center justify-center md:justify-start gap-2 text-white text-2xl md:text-3xl font-semibold">
    ⭐ <span className="opacity-90">EduReviewer</span> 4.4
  </div>

</div>

      </div>

      {/* Bottom Curve Bar */}
      <div className="bg-[#8a6220] py-6 relative z-10">
        <p className="text-center text-white/90 text-xl mb-10">
          Trusted by 2.1M+ Happy Students
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center">

          <div className="flex flex-col items-center">
            <VerifiedBadge />
            <p className="text-2xl font-bold mt-2">86526+</p>
            <span className="text-sm opacity-95">Student Ratings</span>
          </div>

          <div className="flex flex-col items-center">
            <MoneyBackBadge />
            <p className="text-2xl font-bold mt-2">147526+</p>
            <span className="text-sm opacity-95">Delivered Orders</span>
          </div>

          <div className="flex flex-col items-center">
            <VerifiedBadge />
            <p className="text-2xl font-bold mt-2">15626+</p>
            <span className="text-sm opacity-95">Subject Matter Experts</span>
          </div>

        </div>
      </div>
    </section>
  );
}

