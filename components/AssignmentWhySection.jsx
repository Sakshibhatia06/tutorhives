import Image from "next/image";

export default function AssignmentWhySection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Is Demand For Online Assignment Help Rising?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The onset of COVID-19 caused a tremendous change in students’ lives. The education system is undergoing a
            transformation due to online learning help. Students are becoming aware of learning challenges and academic gaps.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Statistics show that 53% of university students are opting for assignment help services to improve learning.
            These services help them stay stress-free, boost performance, and manage time better.
          </p>

          <p className="text-gray-700 leading-relaxed">
            These figures clearly reflect why assignment help services are rising globally. Students are more
            comfortable seeking expert guidance to achieve academic success.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/images/assignment.png"  // your image path
            alt="Assignment Help Features"
            width={600}
            height={500}
            className="rounded-xl w-full h-auto shadow-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}
