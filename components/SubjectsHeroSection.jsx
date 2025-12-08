"use client";

export default function SubjectsHeroSection({ title, subtitle, buttonText }) {
  return (
    <section className="w-full bg-[#BD8B3A] mt-25 py-28 text-center px-4">
      <h1 className="text-white text-3xl md:text-5xl font-bold leading-snug max-w-4xl mx-auto">
        {title}
      </h1>

      <p className="text-white text-sm md:text-lg mt-6 max-w-3xl mx-auto">
        {subtitle}
      </p>

       <div className="flex justify-center mt-8">
  <a
    href="https://wa.me/918521389694?text=Hi%20I%20need%20homework%20help"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition text-center"
  >
    Get Homework Help now!
  </a>
</div>
    </section>
  );
}
