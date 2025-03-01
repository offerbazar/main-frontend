"use client";

import { motion } from "framer-motion";

const Marquee = ({ items, speed = 30 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full py-2 my-5">
      <motion.div
        className="flex gap-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="text-lg font-semibold text-gray-700">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
