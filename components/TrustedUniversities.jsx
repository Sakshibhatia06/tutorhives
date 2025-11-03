"use client";

const universities = [
  { name: "Kennesaw State University", img: "/images/university1.png" },
  { name: "Duke University", img: "/images/university2.png" },
  { name: "Central Michigan University", img: "/images/university3.png" },
  { name: "Victoria University", img: "/images/university4.png" },
  { name: "Northern Illinois University", img: "/images/university5.png" },

  { name: "University of California", img: "/images/university6.png" },
  { name: "Miami University", img: "/images/university7.png" },
  { name: "Oxford University", img: "/images/university8.png" },
  { name: "The University of Chicago", img: "/images/university9.png" },
  { name: "University of Georgia", img: "/images/university10.png" },
];

export default function TrustedUniversities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-gray-600 font-medium">
          Trusted by 1,20,000+ Students Worldwide
        </p>

        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2 leading-snug">
          Trusted by students from various universities, Tutor Hives <br /> 
          excels in homework help.
        </h2>

        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          Tutor Hives has garnered trust from students across the globe, with over 100,000 students from elite universities using our services. Universities set the stage for success, and we make their academic journey easier to navigate.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 px-4">
        {universities.map((uni, i) => (
          <div key={i} className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
              <img src={uni.img} alt={uni.name} className="w-full h-full object-cover"/>
            </div>
            <p className="text-sm font-semibold text-gray-800 mt-3">
              {uni.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
