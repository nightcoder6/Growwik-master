"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[400px] bg-black overflow-hidden mt-20 lg:mt-24 min-[810px]:px-16">
  {/* Background gradient */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-b from-black/70 to-black w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Image
      src="/influencer back.jpg"
      alt="Zebra pattern background"
      fill
      className="object-cover"
      quality={100}
      priority
    />
  </motion.div>

  {/* Content container */}
  <div className="relative z-10 p-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-2">
        <h1 className="text-white text-3xl lg:text-4xl font-semibold">
          We&apos;re happy to have you on board with us.
        </h1>
        <p className="text-white text-lg lg:text-xl">
          Please share the details.
        </p>
      </div>
    </motion.div>

    {/* Animated Arrow */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
      }}
      className="mt-12 flex justify-start max-[810px]:justify-center"
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="48"
          height="120"
          viewBox="0 0 48 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M24 0L24 116M24 116L44 96M24 116L4 96"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  </div>
</section>

  );
}
