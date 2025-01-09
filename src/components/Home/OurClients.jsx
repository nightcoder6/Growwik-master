"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const clients = [
  { name: "Britannia", logo: "/brands/Britannia.svg" },
  { name: "DTOOR", logo: "/brands/dTooR.svg" },
  { name: "FLIMORA", logo: "/brands/Filmora-Go.svg" },
  { name: "FLAMAPP", logo: "/brands/FlamApp.svg" },
  { name: "FREEDOM-OIL", logo: "/brands/Freedom-Oil.svg" },
  { name: "HANGOUT-HUB", logo: "/brands/Hangout-Hub.svg" },
  { name: "LUMA-AI", logo: "/brands/Luma-AI.svg" },
  { name: "MANIPAL-EDUCATION", logo: "/brands/Manipal-Education.svg" },
  { name: "MAONO", logo: "/brands/Maono.svg" },
  { name: "METASHOT", logo: "/brands/Metashot.svg" },
  { name: "MOJ", logo: "/brands/Moj.svg" },
  { name: "PUNCH TRADING", logo: "/brands/Punch-Trading.svg" },
  { name: "ROOTER", logo: "/brands/Rooter.svg" },
];

// Split clients into two rows
const row1 = [...clients.slice(0, Math.ceil(clients.length / 2))];
const row2 = [...clients.slice(Math.ceil(clients.length / 2))];

// Duplicate arrays for seamless infinite scroll
const row1Doubled = [...row1, ...row1];
const row2Doubled = [...row2, ...row2];

function OurClients() {
  const router = useRouter();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-4xl font-bold mb-12"
        >
          Clients We&apos;ve Worked With
        </motion.h1>

        <div ref={ref} className="relative">
          {/* First Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-8 mb-8 overflow-hidden whitespace-nowrap"
          >
            <motion.div
              animate={{
                x: [0, -100 * (row1.length)],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-8"
            >
              {row1Doubled.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative min-w-[200px] h-24 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex gap-8 overflow-hidden whitespace-nowrap"
          >
            <motion.div
              animate={{
                x: [-100 * (row2.length), 0],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-8"
            >
              {row2Doubled.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="relative min-w-[200px] h-24 bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <button 
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95"
            onClick={() => router.push("/case-studies")}
          >
            Case Studies
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default OurClients;

