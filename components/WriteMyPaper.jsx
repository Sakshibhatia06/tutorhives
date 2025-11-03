"use client";

export default function WriteMyPaper({
  title = "I Can't Write My Paper, What Should I Do?",
  paragraphs = [],
}) {
  // Use backup default content if no paragraphs passed
  const defaultParagraphs = [
    "Are you stressed about writing? Do you think your writing won’t be as good as you want it to be? If these reasons bother you and you find yourself unable to write your paper, you must seek the “Pay to Write My Paper” service from Tutor Hives. Reaching out to professional writing services like ours helps you write your paper without hindrances. Our AI-enabled tool is designed to work on the requirements provided by students.",
    "Collaborating with our paper writing tool will give you high-quality, unique, and error-free writing within a few minutes. Considering academic pressure, time constraints, and study challenges, Tutor Hives ensures you are provided with the needed assistance. It eases the task of assignment submission without putting you under stress and aids you in achieving academic excellence."
  ];

  const content = paragraphs.length > 0 ? paragraphs : defaultParagraphs;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20 max-w-5xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {title}
        </h2>

        {content.map((text, index) => (
          <p key={index} className="text-gray-700 mb-6 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

