"use client";

const HowItWorksSubjectsSection = ({
  title,
  subtitle,
  points = [],
}) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 text-center mb-8">
          {subtitle}
        </p>

        {/* Content Box */}
        <div className="bg-gray-50 rounded-2xl shadow-sm p-8 border border-gray-200">
          <ul className="space-y-4">
            {points.map((item, index) => (
              <li
                key={index}
                className="text-gray-700 text-lg flex gap-3 items-start"
              >
                <span className="text-[#6a480f] text-xl mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSubjectsSection;
