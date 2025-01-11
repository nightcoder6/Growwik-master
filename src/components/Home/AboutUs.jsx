"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

function AboutUs() {
  const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black text-white px-4 py-16 md:px-8 lg:px-16 overflow-hidden">
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-white text-4xl font-bold mb-12"
          variants={itemVariants}
        >
          What We Do
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8"
          variants={itemVariants}
        >
          At PR Prabandhak Marketing, we craft tailor-made social media strategies
          that drive business results. We specialize in creating content-first
          campaigns, designed for each client&apos;s unique industry, audience,
          and objectives. With years of performance data and a deep
          understanding of cultural trends, we develop creative strategies that
          deliver industry-leading outcomes. Having worked with over 100 brands
          and 1,000+ influencers, we ensure each campaign is a personalized
          approach, maximizing engagement and success.
        </motion.p>
        {isInView && (
          <motion.p
            className="text-lg md:text-xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Whether you&apos;re a brand looking for meaningful engagement or an
            influencer seeking collaborations, our approach is results-driven.
            We combine data-driven insights with creative strategies, ensuring
            both brands and influencers see measurable growth and lasting impact
            in the digital landscape.
          </motion.p>
        )}

        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsInView(!isInView)}
          >
            {isInView ? "Read less" : "Read more"}
          </motion.button>
        </motion.div>
        {/* Founders Section */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="text-white text-4xl font-bold mb-12 text-left"
            variants={itemVariants}
          >
            Meet Our Founders
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-12"
            variants={containerVariants}
          >
            {/* Founder Card 1 */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <Image
                src="/founders/sudhir.jpg"
                alt="Sudhir Narwal"
                width={128} 
                height={128} 
                className="rounded-full mx-auto mb-4 border-4 border-gray-700"
              />
              <h3 className="text-2xl font-semibold mb-2">Sudhir Narwal</h3>
              <p className="text-lg">
                Sudhir brings a wealth of experience in digital marketing and
                creative strategies, ensuring every campaign delivers measurable
                results.
              </p>
            </motion.div>

            {/* Founder Card 2 */}
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <Image
                src="/founders/manish.jpg"
                alt="Manish Jha"
                width={128}
                height={10}
                className="rounded-full mx-auto mb-4 border-4 border-gray-700"
              />
              <h3 className="text-2xl font-semibold mb-2">Manish Jha</h3>
              <p className="text-lg">
                With a strong background in analytics and influencer marketing,
                Manish excels in driving engagement and fostering meaningful
                collaborations.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutUs;
