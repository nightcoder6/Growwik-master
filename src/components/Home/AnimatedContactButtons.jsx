"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const AnimatedContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      if (!("ontouchstart" in window)) {
        setIsOpen(true);
      }
    };

    const handleMouseLeave = () => {
      if (!("ontouchstart" in window)) {
        setIsOpen(false);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mb-2"
            >
              <a
                href="mailto:contact@PR Prabandhak.com"
                className="bg-gradient-to-r from-[#FFB200] to-[#FF8C00] text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                aria-label="Send us an email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mb-2"
            >
              <a
                href="https://wa.me/+917760519545"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#FFB200] to-[#FF8C00] text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                aria-label="Contact us on WhatsApp"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.button
        className="bg-gradient-to-r from-[#FFB200] to-purple-600 text-white p-4 rounded-3xl hover:from-[#FFA500] hover:to-purple-700 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default AnimatedContactButtons;
