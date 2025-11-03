"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { subtitle, description } = headerInfo;

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          {subtitle}
        </h2>

        <p className="text-gray-500 text-sm md:text-base mb-4">
          {description}
        </p>

        {/* underline bar */}
        <div className="w-16 h-[3px] bg-[#C69C3F] mx-auto rounded-full mt-2"></div>
      </motion.div>
    </>
  );
};

export default SectionHeader;
