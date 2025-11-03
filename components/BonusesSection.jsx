"use client";
import { Award, FileCheck, Users, Repeat, Tag, Gift, ShieldCheck, BadgeDollarSign } from "lucide-react";

const bonuses = [
  { icon: Award, color: "#FFB800", title: "$20 Reward", desc: "Upon registration" },
  { icon: FileCheck, color: "#38BDF8", title: "Free plagiarism", desc: "Reports" },
  { icon: Users, color: "#10B981", title: "Multiple experts", desc: "For assignment" },
  { icon: Repeat, color: "#F97316", title: "Unlimited", desc: "Rewrites/revisions" },
  { icon: Tag, color: "#EC4899", title: "Free Citation", desc: "& References" },
  { icon: Gift, color: "#A855F7", title: "Redeemable", desc: "Reward points" },
  { icon: ShieldCheck, color: "#0EA5E9", title: "Lifetime access", desc: "To your solutions" },
  { icon: BadgeDollarSign, color: "#22C55E", title: "Moneyback", desc: "Guarantee" },
];

export default function BonusesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What rewards will you enjoy?
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Bonuses
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {bonuses.map((item, i) => {
          const IconComp = item.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-12 flex flex-col items-center text-center transition-all duration-300 relative hover:translate-x-1"
            >
              {/* Right side golden glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-all duration-300"
                   style={{
                     boxShadow: "0px 0px 10px 4px rgba(255, 200, 0, 0.6)",
                     borderRadius: "12px"
                   }}
              ></div>

              <div className="relative z-10 mb-4">
                <IconComp size={36} color={item.color} />
              </div>

              <h4 className="font-semibold text-gray-900 text-lg relative z-10">{item.title}</h4>
              <p className="text-gray-500 text-sm mt-1 relative z-10">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
