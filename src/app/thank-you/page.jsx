"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function ThankYouPage() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await controls.start("visible");
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-[#FFB200]">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-3xl w-full px-6 py-12 bg-black bg-opacity-80 rounded-2xl shadow-2xl border border-[#FFB200]"
      >
        <motion.div
          variants={itemVariants}
          className="text-center space-y-6 mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex justify-center"
          >
            <CheckCircle className="w-24 h-24 text-[#FFB200]" />
          </motion.div>
          <h1 className="text-4xl font-bold text-white">Thank You!</h1>
          <p className="text-xl text-[#FFD700]">
            Thank You for Connecting with PR Prabandhak!
          </p>
          <p className="text-lg text-gray-300">
            We&apos;ve received your details and are excited to move forward
            with you. Our team will reach out soon to discuss the next
            steps.Stay tuned!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <AnimatedButton href="/" label="Home" />
          <AnimatedButton href="/blogs" label="Blog" />
          <AnimatedButton href="/case-studies" label="Case Studies" />
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedButton({ href, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-lg"
    >
      <Link
        href={href}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFB200] to-[#FF8C00] text-black font-semibold rounded-lg shadow-md hover:from-[#FFA500] hover:to-[#FF7F00] transition duration-300 ease-in-out"
      >
        {label}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <motion.div
        className="absolute inset-0 bg-white mix-blend-overlay"
        initial={{ x: "100%" }}
        whileHover={{ x: 0 }}
        transition={{ type: "tween" }}
      />
    </motion.div>
  );
}
