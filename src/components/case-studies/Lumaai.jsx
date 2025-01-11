"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/lib/ScrollContext";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Lumaai() {
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
          src="/case-banner/Lumaai.png"
          alt="Luma AI Banner"
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
            Luma AI
            <span className="text-purple-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
            Revolutionizing 3D content creation with Neural Radiance Fields
            (NeRF) technology
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
            <h2 className="text-3xl font-bold mb-6">About Luma AI</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2021, Luma AI focuses on AI-powered 3D content creation
              using Neural Radiance Fields (NeRF) technology, catering to
              industries like architecture, product design, and digital art.
            </p>
            <div className="space-y-4">
              {[
                "Enhance brand visibility",
                "Expand user base",
                "Highlight cutting-edge capabilities",
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <Badge
                    variant="outline"
                    className="bg-purple-500/10 text-purple-400"
                  >
                    Goal {index + 1}
                  </Badge>
                  <span>{goal}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Priorities
              </h3>
              <p className="text-gray-300">
                Advancing immersive 3D experiences and making professional-grade
                tools accessible to content creators and businesses.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Challenges
              </h3>
              <p className="text-gray-300">
                Standing out in a competitive AI market, showcasing innovative
                features, and expanding their user base with organic growth.
              </p>
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
                Luma AI partnered with PR Prabandhak Media to amplify its global
                presence and showcase its 3D content creation platform. The
                campaign aimed to highlight Luma AI&apos;s unique features,
                drive app downloads, and position it as a go-to tool for
                creators, influencers, and businesses.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Strategy & Execution Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Strategy & Execution
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Strategy
              </h3>
              <p className="text-gray-300">
                The campaign strategy revolved around leveraging influencers to
                demonstrate Luma AI&apos;s ability to create &quot;drone shots
                without a drone.&quot; PR Prabandhak collaborated with 35 influencers
                from diverse niches, including travel, food, and sports, to
                produce visually stunning and relatable content.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Execution
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Generate curiosity with the tagline &quot;Drone shots without
                  a drone.&quot;
                </li>
                <li>
                  Showcase the platform&apos;s usability for creators and
                  businesses.
                </li>
                <li>
                  Organically reach a broad audience through engaging and
                  authentic influencer content.
                </li>
              </ul>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Content Planning Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Content Planning
            </h2>
            <Card className="p-6 bg-black/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Key Elements
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Tagline: &quot;Drone shots without a drone&quot; to spark
                  interest and curiosity.
                </li>
                <li>
                  Influencers created cinematic 3D visuals using Luma AI&apos;s
                  tools.
                </li>
                <li>
                  Reels and videos centered on travel, sports, and food to
                  appeal to diverse audiences.
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                An organic highlight was when the Chennai Super Kings (CSK)
                cricket team created their own reel using Luma AI&apos;s
                technology. The reel went viral, showcasing how creators and
                teams could easily use the platform to produce visually stunning
                content, even without formal collaboration.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Challenges Faced Section */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Challenges Faced
          </h2>
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <p className="text-gray-300">
              The key challenge was to stand out in a highly competitive AI
              market and achieve organic growth in user engagement and app
              downloads without heavy reliance on paid promotions. PR Prabandhak
              addressed this by focusing on the campaign&apos;s unique creative
              angle and leveraging influential voices across platforms.
            </p>
          </Card>
        </motion.div>
      </section>

      {/* Outcomes Section */}
      <section ref={statsRef} className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">126M+</h3>
              <p className="text-gray-300 mt-2">Views across Instagram</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">200M+</h3>
              <p className="text-gray-300 mt-2">Total Impressions</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">400K</h3>
              <p className="text-gray-300 mt-2">App Downloads</p>
            </div>
          </div>
          <Card className="p-6 bg-black/50 border-zinc-800">
            <p className="text-gray-300">
              The campaign was a massive success, achieving global recognition
              for Luma AI. Additionally, the viral success of organic reels,
              like the one created by CSK, demonstrated Luma AI&apos;s
              capabilities, cementing its position as a leader in 3D content
              creation.
            </p>
          </Card>
        </div>
      </section>

      {/* High-Profile Collaborations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              High-Profile Collaborations
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-6 bg-black/50 border-zinc-800">
                <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                  CSK Team
                </h3>
                <div className="relative mb-6" style={{ minHeight: "600px" }}>
                  <iframe
                    src="https://www.instagram.com/reel/C5gpEcCS3je/embed"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                  />
                </div>
                <motion.p
                  className="text-sm text-zinc-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  A standout moment was an organic reel created by the Chennai
                  Super Kings (CSK) cricket team, which showcased Luma AI&apos;s
                  technology. Using the tagline &quot;Drone shots without a
                  drone,&quot; CSK produced a visually captivating 3D video that
                  resonated with fans and reached a massive audience.
                </motion.p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Posts Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  influencer: "Nayan Shelke",
                  post_reach: "16M+",
                  post_url: "https://www.instagram.com/reel/CzLN8uFLy8T/",
                },
                {
                  influencer: "Tejas Gowda",
                  post_reach: "6M+",
                  post_url: "https://www.instagram.com/reel/C1yhRo7PWLb/",
                },
              ].map((post, index) => (
                <Card key={index} className="p-6 bg-black/50 border-zinc-800">
                  <h3 className="text-xl font-semibold mb-2 text-[#FFB200]">
                    {post.influencer}
                  </h3>
                  <p className="text-gray-300 mb-4">Reach: {post.post_reach}</p>
                  <a
                    href={post.post_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Post <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Top Performing Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://www.instagram.com/reel/CzLN8uFLy8T/",
            "https://www.instagram.com/reel/C365LH-pzcR/",
            "https://www.instagram.com/reel/C2jbLLFRvfP/",
            "https://www.instagram.com/reel/C01IX-4LeUH/",
            "https://www.instagram.com/reel/C4NFRijRBOt/",
          ].map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-[9/16] relative"
            >
              <iframe
                src={`${url}embed`}
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <p className="text-gray-300 text-lg">
              The campaign demonstrated the impact of strategic partnerships and
              authentic influencer content in amplifying brand awareness and
              driving substantial user engagement without paid advertising. Luma
              AI&apos;s unique approach to creating immersive 3D content
              resonated with creators and audiences alike, establishing the
              platform as a leader in AI-powered content creation.
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
              achieve similar results for your brand using innovative AI
              technologies.
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

export default Lumaai;
