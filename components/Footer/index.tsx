"use client";
import Image from "next/image";


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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

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


        {/* Branch */}
        <div>
          <h3 className="font-bold text-lg mb-4">Branch</h3>
          <ul className="space-y-2 text-white/90">
            {[
              "Accounting","Aerospace","Biological Science","Biomedical Engineering",
              "Biotechnology","Chemical Engineering","Chemistry","Computer Science Assignment",
              "Economics","Finance"
            ].map((i)=> <li key={i}>{i}</li>)}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-bold text-lg mb-4">Features</h3>
          <ul className="space-y-2 text-white/90">
            {[
              "Expert Tutors","Plagiarism Free Solutions","100% Correct Solutions","24/7 Availability",
              "Cost Effective","Solved on Time","Confidentiality","Essay Rewriter",
              "Paraphrase Writer","Grammar & Spell checker"
            ].map((i)=> <li key={i}>{i}</li>)}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-white/90">
            {[
              "Become a tutor","Careers (We’re Hiring!)","Blogs","FAQs","Refund Policy",
              "Privacy Policy","Terms and Conditions","Copyright Policy","Reviews"
            ].map((i)=> <li key={i}>{i}</li>)}
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
