"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useScroll } from "@/lib/ScrollContext";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function FlamAppAI() {
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
          src="/case-banner/Flamapp.png"
          alt="FlamApp AI Banner"
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
            FlamApp AI
            <span className="text-purple-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
            Redefining marketing with immersive AR experiences
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">About FlamApp AI</h2>
            <p className="text-gray-300 mb-6">
              FlamApp AI specializes in augmented reality (AR) solutions,
              creating immersive experiences that redefine traditional marketing
              strategies. By integrating AR into campaigns, FlamApp bridges the
              gap between static media and interactive consumer engagement
              across FMCG, education, and fashion industries.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Our Focus
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Augmented Reality Solutions</li>
                <li>Immersive Marketing Experiences</li>
                <li>Cross-Industry Innovation</li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Campaign Overview Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Campaign Overview
            </h2>
            <Card className="p-6 bg-black/50 border-zinc-800">
              <p className="text-gray-300">
                FlamApp AI collaborated with Growwik Media to integrate AR
                technology into marketing campaigns for several prominent
                brands. The objective was to enhance consumer engagement,
                increase brand visibility, and position these brands as pioneers
                in AR-driven marketing.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Campaigns
          </h2>

          {/* Britannia NutriChoice Campaign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 bg-black/50 border-zinc-800">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB200]">
                Flam x Britannia NutriChoice
              </h3>
              <p className="text-gray-300 mb-6">
                Objective: Revolutionize print media engagement using AR
                technology.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Execution
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Published AR-enabled ads in leading newspapers: The Hindu,
                      The Times of India.
                    </li>
                    <li>
                      Readers could scan the ads to unlock branded videos
                      featuring dynamic content.
                    </li>
                    <li>
                      Partnered with 50+ nano influencers and 12+ micro
                      influencers to amplify reach on social media.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4" ref={statsRef}>
                    <div className="stat-item">
                      <p className="text-2xl font-bold text-purple-500">2M+</p>
                      <p className="text-sm text-gray-400">Scans</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-2xl font-bold text-purple-500">40K+</p>
                      <p className="text-sm text-gray-400">CTAs</p>
                    </div>
                    <div className="stat-item">
                      <p className="text-2xl font-bold text-purple-500">7M+</p>
                      <p className="text-sm text-gray-400">
                        Social Media Views
                      </p>
                    </div>
                    <div className="stat-item">
                      <p className="text-2xl font-bold text-purple-500">
                        800K+
                      </p>
                      <p className="text-sm text-gray-400">Likes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-2 text-[#FFB200]">
                  Notable Comments
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="bg-purple-500/10 text-purple-400"
                  >
                    Newspaper jinda ho gaya!
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-500/10 text-purple-400"
                  >
                    Is it real?
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-purple-500/10 text-purple-400"
                  >
                    Harry Potter newspaper!
                  </Badge>
                </div>
              </div>
              <a
                href="https://www.instagram.com/reel/example_britannia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Instagram Post <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Card>
          </motion.div>

          {/* MAHE Bangalore Campaign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 bg-black/50 border-zinc-800">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB200]">
                Flam x Manipal Education (MAHE Bangalore)
              </h3>
              <p className="text-gray-300 mb-6">
                Objective: Enhance student engagement through interactive
                AR-powered educational materials.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Execution
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Targeted MAHE (Manipal Academy of Higher Education) in
                      Bangalore.
                    </li>
                    <li>
                      Published AR-enabled content in: Vijay Karnataka, The
                      Times of India.
                    </li>
                    <li>
                      Developed immersive 3D content integrated into educational
                      tools and campaigns.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-500">6M+</p>
                      <p className="text-sm text-gray-400">Views</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-500">
                        3000+
                      </p>
                      <p className="text-sm text-gray-400">Registration CTAs</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">
                    Significantly boosted course sign-ups.
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/reel/example_manipal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Instagram Post <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Card>
          </motion.div>

          {/* AJIO Heeramandi Collection Campaign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-black/50 border-zinc-800">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB200]">
                Flam x AJIO Heeramandi Collection
              </h3>
              <p className="text-gray-300 mb-6">
                Objective: Promote AJIO&apos;s exclusive Heeramandi ethnic
                collection through AR-driven engagement.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Execution
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      AR ads showcased the collection in newspapers like: Vijay
                      Karnataka, Hindustan Times, The Hindu.
                    </li>
                    <li>
                      Collaborated with 100+ nano influencers from Karnataka,
                      Maharashtra, and Delhi.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-[#FFB200]">
                    Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-500">2M+</p>
                      <p className="text-sm text-gray-400">Views</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-500">
                        100K+
                      </p>
                      <p className="text-sm text-gray-400">Likes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-500">800+</p>
                      <p className="text-sm text-gray-400">Comments</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-300">
                    Enhanced brand visibility and positioned AJIO as a pioneer
                    in AR-driven fashion marketing.
                  </p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/reel/example_ajio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Instagram Post <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Content Planning Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Content Planning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Interactive Print Ads
                </h3>
                <p className="text-gray-300">
                  Enabled readers to scan ads and access dynamic video content,
                  enhancing engagement.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Influencer Collaborations
                </h3>
                <p className="text-gray-300">
                  Leveraged influencers to share AR experiences on social media,
                  broadening reach and engagement.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Educational Integration
                </h3>
                <p className="text-gray-300">
                  Developed AR-powered educational materials to make learning
                  more interactive and appealing.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Faced Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Challenges Faced
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Consumer Education
                </h3>
                <p className="text-gray-300">
                  Ensuring consumers understood how to access and interact with
                  AR content.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Technical Accessibility
                </h3>
                <p className="text-gray-300">
                  Making sure the AR experiences were easily accessible without
                  the need for additional applications.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Content Integration
                </h3>
                <p className="text-gray-300">
                  Seamlessly blending AR content with existing marketing
                  materials to maintain brand consistency.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Outcomes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Campaign Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Market Hype
                </h3>
                <p className="text-gray-300">
                  FlamApp&apos;s innovative campaigns created a buzz in the
                  advertising industry, leading to partnerships with major
                  brands like Flipkart, Samsung, and Aditya Birla Capital for
                  similar AR-driven advertisements.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Industry Recognition
                </h3>
                <p className="text-gray-300">
                  Organic LinkedIn posts praised FlamApp&apos;s AR technology,
                  with marketing professionals discussing the potential of
                  interactive advertising.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Proven Leadership
                </h3>
                <p className="text-gray-300">
                  FlamApp positioned itself as a thought leader in the AR
                  advertising domain, attracting both global and domestic brands
                  to explore AR-based campaigns.
                </p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-zinc-900/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  Cross-Industry Expansion
                </h3>
                <p className="text-gray-300">
                  Successfully demonstrated the potential of AR across FMCG,
                  education, and fashion, setting the foundation for future
                  campaigns in additional industries like retail and
                  entertainment.
                </p>
              </Card>
            </motion.div>
          </div>
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

export default FlamAppAI;
