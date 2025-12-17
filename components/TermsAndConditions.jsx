const TermsAndConditions = () => {
  const terms = [
    {
      title: "Introduction",
      content:
        "By accessing or using TutorHives’ website and services, you agree to these Terms & Conditions. If you do not agree, please refrain from using our services.",
    },
    {
      title: "Services",
      content:
        "TutorHives offers online tutoring through verified and qualified tutors. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.",
    },
    {
      title: "Eligibility",
      content:
        "Users must be at least 13 years old to use TutorHives. For minors, usage must be authorized by a parent or guardian.",
    },
    {
      title: "Payments & Refunds",
      content:
        "Fees are applied based on the chosen tutoring plan. Refunds are subject to our refund policy; sessions that have already been conducted are generally non-refundable.",
    },
    {
      title: "Conduct",
      content:
        "Users are expected to interact respectfully with tutors and other users. Any form of academic dishonesty, harassment, or misuse of the platform may result in suspension or account termination.",
    },
    {
      title: "Liability",
      content:
        "TutorHives provides educational guidance and support but cannot guarantee specific academic outcomes. Users are responsible for their own learning and application of knowledge.",
    },
    {
      title: "Changes to Terms",
      content:
        "TutorHives may update these Terms & Conditions from time to time. Continued use of the platform constitutes acceptance of any updates.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Terms & Conditions
      </h1>

      <div className="space-y-6">
        {terms.map((term, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {index + 1}. {term.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{term.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
