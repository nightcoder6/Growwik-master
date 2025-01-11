import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Illusion-Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient to blend the black section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-5"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-10 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
          {/* Left Column: Logo and Buttons */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left mb-8"
            >
              <Image
                src="/Logo-with-tag.svg"
                alt="PR Prabandhak Logo"
                width={400}
                height={150}
                className="mb-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/brand"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl text-center"
              >
                I&apos;m a Brand
              </Link>
              <Link
                href="/influencer"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-bold text-lg sm:text-xl text-center"
              >
                I&apos;m an Influencer
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Animated Description */}
          {/* Add the animated description here if needed */}
        </div>
      </div>
    </div>
  );
}
