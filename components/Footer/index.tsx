"use client";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[#caa04c] text-white pt-10 pb-6">

      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/tutor-hives.png"
          width={120}
          height={90}
          alt="Tutor Hives Logo"
        />

        {/* Social Icons */}
        <div className="flex gap-4">
          <a className="bg-[#b38737] p-2 rounded-md" href="https://www.facebook.com/profile.php?id=61579365031792#"><i className="fab fa-facebook-f"></i></a>
          <a className="bg-[#b38737] p-2 rounded-md" href="https://www.instagram.com/tutors_hive/"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/30 my-6"></div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-white/90">
            {[
              { title: "Assignment", path: "/services/assignments" },
              { title: "Do My Assignment", path: "/services/do-my-assignment" },
              { title: "Do My Homework", path: "/services/do-my-homework" },
              { title: "Do My Maths Homework", path: "/services/do-my-maths-homework" },
              { title: "Lab Report", path: "/services/lab-report" },
              { title: "Live Session", path: "/services/live-session" },
              { title: "Online Tutoring", path: "/services/online-tutoring" },
              { title: "Project Report Writing", path: "/services/project-report-writing" },
              { title: "Paper Writing Help", path: "/services/paper-writing-help" },
              { title: "Project Report Help", path: "/services/project-report-help" },
              { title: "Presentation Writing", path: "/services/presentation-writing" },
              { title: "Pay Someone To Do My Homework", path: "/services/pay-someone-to-do-my-homework" },
              { title: "Paying Someone To Write Your Paper", path: "/services/paying-someone-to-write-your-paper" },
              { title: "Speech Writing", path: "/services/speech-writing" },
              { title: "Video Solutions", path: "/services/video-solutions" },
              { title: "Write Research Paper", path: "/services/write-research-paper" },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.path} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Subjects</h3>
          <ul className="space-y-2 text-white/90">
            {[
              { id: 37, title: "Accounting", path: "/subjects/accounting" },
              { id: 38, title: "Biology", path: "/subjects/biology" },
              { id: 39, title: "Chemistry", path: "/subjects/chemistry" },
              { id: 40, title: "Computer Science", path: "/subjects/computer-science" },
              { id: 41, title: "Economics", path: "/subjects/economics" },
              { id: 42, title: "Electrical Engineering", path: "/subjects/electrical-engineering" },
              { id: 43, title: "Finance", path: "/subjects/finance" },
              { id: 44, title: "Mathematics", path: "/subjects/mathematics" },
              { id: 45, title: "Mathematics and Computing", path: "/subjects/mathematics-and-computing" },
              { id: 46, title: "Mechanical Engineering", path: "/subjects/mechanical-engineering" },
              { id: 47, title: "Nursing", path: "/subjects/nursing" },
              { id: 48, title: "Programming", path: "/subjects/programming" },
              { id: 49, title: "Physics", path: "/subjects/physics" },
              { id: 50, title: "Writing", path: "/subjects/writing" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={item.path}
                  className="hover:underline transition-all"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* About */}
        import Link from "next/link";

        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-white/90">
            {[
              { label: "Blogs", href: "/blog" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms and Conditions", href: "/terms-and-conditions" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/30 mt-10 mb-6"></div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-white/90 text-sm gap-4">
        <p>©{new Date().getFullYear()} Tutor Hives. All Rights Reserved.</p>

        <div className="flex items-center gap-2">
          <a href="https://wa.me/918521389694?text=Hi%20Tutor%20Hives%0AI%20need%20help%20with%20my%20assignment" className="font-medium">+91 8521389694</a>
        </div>
      </div>
    </footer>
  );
}
