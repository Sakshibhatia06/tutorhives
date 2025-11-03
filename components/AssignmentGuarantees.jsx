"use client";

export default function AssignmentGuarantees({ title = "Tutor Hives Guarantees The Best Assignment Help Online" }) {
  const guarantees = [
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 18a6 6 0 1112 0c0 2.8-1.6 5.2-4 6.3V28a2 2 0 01-2 2h0a2 2 0 01-2-2v-3.7c-2.4-1.1-4-3.5-4-6.3z"/>
          <path d="M10 14l2-2m16 2l-2-2M9 22H5m30 0h-4M12 26l-2 2m20-2l2 2"/>
        </svg>
      ),
      title: "Detailed solution with clarity",
      desc: "We assign expert tutors to ensure students get detailed, step-by-step solutions for their assignments.",
    },
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="21" cy="21" r="8"/>
          <path d="M21 13v8l5 3"/>
          <circle cx="21" cy="21" r="19" strokeDasharray="4 4"/>
        </svg>
      ),
      title: "Timely submission",
      desc: "Our tutors committedly work on your projects to provide you with the best on-time assignment help service.",
    },
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l8-8 8 8M13 4v20"/>
          <path d="M39 30l-8 8-8-8M29 38V18"/>
        </svg>
      ),
      title: "Unlimited rewrites",
      desc: "You get unlimited rewrites from our team once experts upload your homework solution to the dashboard.",
    },
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round">
          <circle cx="21" cy="21" r="10"/>
          <path d="M16 22l3 3 6-6M14 27h14"/>
        </svg>
      ),
      title: "Solid Boost in grades",
      desc: "We help with homework to provide you the scope to secure better grades for your assignments.",
    },
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="6" width="18" height="28" rx="2"/>
          <path d="M16 14h6m-6 6h10M18 22l2 2 4-4"/>
        </svg>
      ),
      title: "Error-free work with 0% plagiarism",
      desc: "Get a 100% original and accurate solution with a personalized touch by our experts based on your requirement.",
    },
    {
      icon: (
        <svg width="42" height="42" fill="none" stroke="#1E88E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="21" cy="21" r="10"/>
          <path d="M21 14v14M17 17a4 4 0 108 0"/>
        </svg>
      ),
      title: "Money Back guarantee",
      desc: "In case of dissatisfaction with the given solution, you can claim a full refund.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="relative border-l-4 border-gray-200 hover:border-yellow-500 transition pl-6 pb-6 min-h-[180px]"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute top-0 right-0 h-full border-r border-gray-200 hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
