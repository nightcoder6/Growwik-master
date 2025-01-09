"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const testimonials = [
  {
    name: "Dala Chan",
    role: "Overseas marketing specilist",
    company: "Hollyland",
    image:
      "/review/1.jpg",
    star: 4.8,
    quote:
      "Working with Growwik Media was a wonderful experience. Their influencer marketing campaign for our Lark M2 and M2 Max products allowed us to connect with audiences in India, the US, and Canada in a truly impactful way. The engagement levels were exceptional, and their meticulous approach truly stood out. We’re thrilled with the results and can’t wait to collaborate with them again in the future!",
    site: "https://www.hollyland.com/",
  },
  {
    name: "Salabh Jaishwal",
    role: "founder's office",
    company: "Punch Trade",
    image:
      "/review/2.png",
    star: 4.7,
    quote:
      "The Growwik team redefined our approach to meme marketing for Punch with their creativity and innovation. They seamlessly positioned our product in the market, making it feel authentic and relatable rather than overly promotional. Their efforts achieved visibility comparable to major brands like Zerodha—a truly remarkable accomplishment. Finding such a smart and impactful marketing strategy is a rare gem.",
    site: "https://www.punch.trade/",
  },
  {
    name: "Prabhakar Chaudhary",
    role: "Growth manager",
    company: "Flamapp AI",
    image:
      "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid",
    star: 4.9,
    quote:
      "Despite operating within a tight budget and a one-day campaign window, Growwik Media exceeded our expectations for Flamapp AI. Their seamless coordination of UGC influencers with our AR newspaper ads was impressive. The campaign not only ran smoothly but also delivered excellent results, showcasing their expertise in executing high-pressure projects with remarkable finesse.",
    site: "https://www.flamapp.ai/",
  },
  {
    name: "Christina Cyr",
    role: "Founder & CEO",
    company: "dTooR",
    image:
      "/review/4.png",
    star: 4.7,
    quote:
      "Partnering with Growwik Media for Cyrcle Phone’s marketing campaign was a transformative experience. They effectively leveraged influencers and organic conversations to spotlight our phone’s sustainable and modular design. Their strategic and thoughtful approach created buzz and expanded our audience reach, significantly enhancing interest in our eco-friendly product.",
    site: "https://www.cyrclephone.com/",
  },
  {
    name: "Barkley",
    role: "Growth and product",
    company: "Luma AI",
    image:
      "/review/5.png",
    star: 5,
    quote:
      "Collaborating with Growwik Media for our Luma AI influencer campaign marked a significant milestone for us. Their creative presentation of the drone shoot feature was so impactful that it naturally resonated with the CSK cricket team. This campaign not only boosted visibility but also positioned Luma AI as a trusted and recognized brand in the market.",
    site: "https://lumalabs.ai/dream-machine/creations",
  },
  {
    name: "Vera Chan",
    role: "overseas marketing director",
    company: "Maono",
    image:
      "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?semt=ais_hybrid",
    star: 4.9,
    quote:
      "Growwik Media's influencer marketing campaign for Maono was an outstanding success. Their emphasis on targeted engagement effectively drove sales while generating genuine excitement around the brand. Their strategic approach amplified our message, reaching and captivating new audiences in a meaningful way. The results were nothing short of exceptional.",
    site: "https://www.maono.com/",
  },
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Whats our clients says?
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-[#363636] shadow-xl rounded-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  width={200}
                  height={200}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  <Link href={testimonials[currentIndex].site}>
                    {testimonials[currentIndex].company}
                  </Link>
                </div>
                <p className="mt-2 text-white">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-[#FFB200]">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < testimonials[currentIndex].star
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-white ml-1">
                    {testimonials[currentIndex].star.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
