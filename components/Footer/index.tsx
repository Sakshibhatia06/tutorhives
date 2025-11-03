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
          <a className="bg-[#b38737] p-2 rounded-md" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="bg-[#b38737] p-2 rounded-md" href="#"><i className="fab fa-instagram"></i></a>
          <a className="bg-[#b38737] p-2 rounded-md" href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/30 my-6"></div>

      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-white/90">
            {[
              "Assignment","Live Sessions","Lab Report Help","Project Report Writing",
              "Speech Writing Service","Presentation Writing Service","Video Solutions",
              "Online Tutoring","Do My Homework","Do My Assignment","Paper Writing Services",
              "Pay Someone To Do My Homework"
            ].map((i)=> <li key={i}>{i}</li>)}
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
          <a href="https://wa.me/919234514356" className="font-medium">+91 9234514356</a>
        </div>
      </div>
    </footer>
  );
}
