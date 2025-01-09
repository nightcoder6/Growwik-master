"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import { useScroll } from "@/lib/ScrollContext";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function PunchApp() {
  const statsRef = useRef(null);
  const { scrollToSection } = useScroll();

  useEffect(() => {
    // GSAP animation for stats
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleContactUsClick = () => {
    scrollToSection("contactForm", true);
  };
  return (
    <div className="min-h-screen bg-black text-white mt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <Image
          src="/case-banner/Punch.png"
          alt="Punch App Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Punch App
            <span className="text-purple-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
            Simplifying trading for novice and part-time traders
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About Punch App</h2>
            <p className="text-gray-300 mb-6">
              Punch App is a simplified trading platform designed for novice and
              part-time traders with a single-screen interface and intuitive
              tools.
            </p>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <Badge
                  variant="outline"
                  className="bg-purple-500/10 text-purple-400"
                >
                  Challenge
                </Badge>
                <span>
                  Introduce Punch to the market, resonating with beginners
                </span>
              </motion.div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Campaign Goal
              </h3>
              <p className="text-gray-300">
                Craft a content-driven campaign to make Punch App a household
                name without overt advertising.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Campaign Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Create Relatability: Ensure Punch App's presence in content that feels natural and aligns with audience behavior.",
              "Spark Curiosity: Encourage users to notice the app organically through subtle branding without explicit promotion.",
              "Build Credibility: Position Punch App as the community's preferred trading platform.",
              "High Engagement & Awareness: Create conversations and interactions that amplify brand awareness.",
            ].map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 bg-black/50 border-zinc-800">
                  <p className="text-gray-300">{objective}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Campaign Strategy
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Relatable Memes",
              description:
                "Create memes around common trading scenarios like market volatility, losses, and beginner mistakes.",
              impact:
                "Deeply resonated with audiences, subtly integrating Punch App's interface to spark curiosity.",
            },
            {
              title: "Unintentional Virality",
              description:
                "Memes were reshared by creators who mistook them for organic content.",
              impact: "Exponential reach and authenticity.",
            },
            {
              title: "Amplified Reach",
              description:
                "Paid content reshared across Punch's and influencers' platforms.",
              impact:
                "Blended seamlessly with organic posts, amplifying visibility.",
            },
            {
              title: "Interactive Videos",
              description:
                "Engaging videos offering trading advice while subtly using Punch App.",
              impact:
                "High save and share rates, creating ongoing conversations around the app.",
            },
            {
              title: "Twitter Extension",
              description:
                "Extended meme life to Twitter, boosting visibility.",
              impact:
                "Generated discussions among trading communities through retweets and comments.",
            },
          ].map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  {strategy.title}
                </h3>
                <p className="text-gray-300 mb-4">{strategy.description}</p>
                <p className="text-sm text-purple-400">{strategy.impact}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section ref={statsRef} className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Campaign Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">22M+</h3>
              <p className="text-gray-300 mt-2">Meme Impressions</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">7M+</h3>
              <p className="text-gray-300 mt-2">Meme Shares</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">50K</h3>
              <p className="text-gray-300 mt-2">App Downloads</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-black/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Organic Reach
              </h3>
              <p className="text-gray-300 mb-4">
                Paid memes unintentionally went viral as creators reshared them
                unknowingly.
              </p>
              <p className="text-sm text-purple-400">
                12,000+ comments generated
              </p>
            </Card>
            <Card className="p-6 bg-black/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Engaged Communities
              </h3>
              <p className="text-gray-300 mb-4">
                High save and share rates of tips & tricks videos, sparking
                ongoing curiosity and trust.
              </p>
              <p className="text-sm text-purple-400">
                Active engagement with audiences asking for additional insights
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Key Success Factors
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Authenticity First: Content built around audience experiences felt natural and relatable.",
            "Subtlety Over Promotion: Allowed audiences to discover the app, fostering intrigue and ownership.",
            "Unintentional Virality: Resharing of paid memes by creators amplified organic reach.",
            "Cross-Platform Synergy: Use of memes and interactive videos across platforms ensured wide reach.",
          ].map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <p className="text-gray-300">{factor}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-gray-300 text-lg">
              This campaign leveraged relatable content and storytelling to
              introduce Punch App to a wide audience, creating an authentic buzz
              and positioning it as a trusted, community-friendly trading
              platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zinc-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Want to Know More About This Case Study?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact our team to get more details on how we can help you
              achieve similar results for your brand.
            </p>

            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleContactUsClick}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default PunchApp;
