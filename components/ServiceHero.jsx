"use client";
import Image from "next/image";

export default function ServiceHero({
  title,
  subtitle,
  buttonText = "Get Assignment Help Now",
  bgColor = "#B88635",
  whatsappMessage = "Hi, I need help with my assignment",
  whatsappNumber = "918000000000", // change to your number
}) {
  // WhatsApp Link
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      className="w-full py-24 md:py-32 mt-20 flex items-center justify-center text-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container max-w-5xl mx-auto px-4">

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold mb-5 text-white leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mt-4 opacity-90 max-w-2xl mb-6 mx-auto">
          {subtitle}
        </p>

        {/* WhatsApp CTA */}
        <a
          href={whatsappURL}
          target="_blank"
          className="
            bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition
          "
        >
          {buttonText}
        </a>

        {/* Reviews Image */}
        <div className="mt-14">
          <p className="text-white font-semibold text-lg md:text-xl mb-5">
            Trusted by 1.1M+ Happy Students
          </p>

          <div className="flex justify-center">
            <Image
              src="/images/imagee-reviews.png"
              alt="Trusted reviews"
              width={800}
              height={200}
              className="w-full max-w-[800px]"
              style={{
                filter: "brightness(110%) contrast(100%) saturate(100%) blur(0px) hue-rotate(180deg)"
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

