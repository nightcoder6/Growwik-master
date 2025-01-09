"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: "Luma-AI",
    image: "/case-card/1.png",
    title: "Discover how",
    company: "Luma AI",
    description:
      "enhanced their digital marketing strategies with our expertise.",
  },
  {
    id: "Maono-App",
    image: "/case-card/4.png",
    title: "Learn how",
    company: "Maono",
    description:
      "achieved digital marketing success through our tailored solutions.",
  },
  {
    id: "Punch-App",
    image: "/case-card/3.png",
    title: "Explore how",
    company: "Punch App",
    description:
      "transformed their online presence with our digital marketing services.",
  },
  {
    id: "Flam-App",
    image: "/case-card/2.png",
    title: "See how",
    company: "FlamApp AI",
    description:
      "revolutionized their digital outreach with our innovative strategies.",
  },
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
      <div className="min-h-screen">
        <main className="pt-32 px-6 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl font-bold mb-12 text-center"
          >
            Case Studies
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-xl"
              >
                <Link href={`/case-studies/${study.id}`}>
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={study.image}
                      alt={`${study.company} case study`}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-lg text-gray-300">{study.title}</p>
                    <h2 className="text-3xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                      {study.company}
                    </h2>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                      {study.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
