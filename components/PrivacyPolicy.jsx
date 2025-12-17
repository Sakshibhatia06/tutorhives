const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information such as name and email address, academic details, usage data, and payment-related data. Payment information is securely processed by third-party payment providers.",
    },
    {
      title: "Why We Collect It",
      content:
        "The collected information is used to provide our services, match students with suitable tutors, process payments, communicate with users, and improve overall user experience.",
    },
    {
      title: "Data Security",
      content:
        "We implement industry-standard security measures to protect your personal data. However, no online transmission or storage system can be guaranteed to be 100% secure.",
    },
    {
      title: "Third Parties",
      content:
        "We may share necessary information with trusted third-party service providers such as payment processors and analytics tools. TutorHives does not sell or rent personal data to third parties.",
    },
    {
      title: "Children’s Privacy",
      content:
        "Users under the age of 13 must have parental or guardian consent to use our services. We do not knowingly collect personal data from children without proper authorization.",
    },
    {
      title: "Contact Us",
      content:
        "For requests related to data access, correction, or deletion, please contact us at tutor4study24x7@gmail.com.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Privacy Policy
      </h1>

      <div className="space-y-6">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {index + 1}. {policy.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {policy.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
