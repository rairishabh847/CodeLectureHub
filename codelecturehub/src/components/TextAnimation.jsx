import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const messages = [
  "Welcome to Tailwind CSS",
  "Build Fast, Design Better",
  "Utility-First CSS Framework",
  "Happy Coding! 🚀"
];

export default function TextAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold absolute"
      >
        {messages[index]}
      </motion.div>
    </div>
  );
}
