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

function Maono() {
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
          src="/case-banner/MAONO.png"
          alt="Maono Banner"
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
            Maono
            <span className="text-purple-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-300">
            Empowering global audio experiences since 2014
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
            <h2 className="text-3xl font-bold mb-6">About Maono</h2>
            <p className="text-gray-300 mb-6">
              Founded in 2014, Maono is a global leader in audio technology,
              specializing in microphones, sound cards, and headphones for
              content creators, podcasters, and professionals. Operating in over
              153 countries, Maono is committed to empowering users worldwide
              with accessible, professional-grade tools to enhance their audio
              experience.
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
                  Mission
                </Badge>
                <span>
                  Empowering users with professional-grade audio tools
                </span>
              </motion.div>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Global Presence
              </h3>
              <p className="text-gray-300">
                Operating in over 153 countries, bringing high-quality audio
                solutions to creators worldwide.
              </p>
            </Card>
            <Card className="p-6 bg-zinc-900/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Product Range
              </h3>
              <p className="text-gray-300">
                Specializing in microphones, sound cards, and headphones for
                various audio needs.
              </p>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Campaign Objective Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Campaign Objective</h2>
            <p className="text-gray-300 text-lg">
              Increase brand awareness and product adoption for Maono&apos;s
              audio technology products among tech and creative audiences in
              USA, Canada, India, and East Asian Countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campaign Overview Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Campaign Overview
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
              Influencer Partnerships
            </h3>
            <p className="text-gray-300 mb-4">
              Collaborated with 200+ nano and micro influencers on YouTube and
              Instagram, focusing on showcasing Maono&apos;s high-quality
              microphones and audio equipment.
            </p>
          </Card>
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
              Content Strategy
            </h3>
            <p className="text-gray-300 mb-4">
              Influencers created engaging content highlighting key features
              such as superior sound quality and ease of use for creators and
              professionals.
            </p>
          </Card>
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
              Platforms
            </h3>
            <div className="flex space-x-2">
              <Badge
                variant="outline"
                className="bg-purple-500/10 text-purple-400"
              >
                YouTube
              </Badge>
              <Badge
                variant="outline"
                className="bg-purple-500/10 text-purple-400"
              >
                Instagram
              </Badge>
            </div>
          </Card>
          <Card className="p-6 bg-zinc-900/50 border-zinc-800">
            <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
              Approach
            </h3>
            <p className="text-gray-300">
              Engaged influencers specializing in tech reviews and content
              creation to produce product demonstrations and tutorials.
            </p>
          </Card>
        </div>
      </section>

      {/* Target Audience & Markets Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Target Audience & Markets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-black/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Target Audience
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Content creators</li>
                <li>Tech enthusiasts</li>
                <li>Gamers</li>
                <li>Professionals requiring top-notch audio equipment</li>
              </ul>
            </Card>
            <Card className="p-6 bg-black/50 border-zinc-800">
              <h3 className="text-xl font-semibold mb-4 text-[#FFB200]">
                Target Markets
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>USA</li>
                <li>Canada</li>
                <li>India</li>
                <li>East Asian Countries</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={statsRef} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Campaign Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">30M+</h3>
              <p className="text-gray-300 mt-2">Total Reach</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">10M+</h3>
              <p className="text-gray-300 mt-2">YouTube Views</p>
            </div>
            <div className="stat-item text-center">
              <h3 className="text-4xl font-bold text-purple-500">4.2M+</h3>
              <p className="text-gray-300 mt-2">Likes and Comments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Performing Videos Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Top Performing Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                channel: "Short Circuit",
                host: "Linus",
                title: "Maono Product Showcase",
                url: "https://www.youtube.com/embed/8URpq4N8AD8?start=244",
                duration: "4:04",
                views: 597000,
              },
              {
                channel: "Tech Source",
                title: "Black Friday Sales Special",
                url: "https://www.youtube.com/embed/B2EDOXEnq2k?start=960",
                duration: "16:00",
                views: 148000,
              },
              {
                channel: "ToastyBro",
                title: "Game Streaming with Maono Products",
                url: "https://www.youtube.com/embed/Z7rQKhRRdYk?start=30",
                duration: "0:30",
                views: 69000,
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 bg-black/50 border-zinc-800">
                  <div className="aspect-video relative mb-4">
                    <iframe
                      src={video.url}
                      className="absolute inset-0 w-full h-full rounded-lg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#FFB200]">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-1">
                    Channel: {video.channel}
                  </p>
                  {/* <p className="text-gray-300 text-sm mb-1">Duration: {video.duration}</p> */}
                  <p className="text-gray-300 text-sm">
                    Views: {video.views.toLocaleString()}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Videos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Other Notable Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                channel: "Tech Venom",
                url: "https://youtu.be/-HZdhdlFZbA?si=wWKsZmSUT8apfIWy",
              },
              {
                channel: "Kunal Malhotra",
                url: "https://youtu.be/F3e8MCGaAuo?si=2Gud7P9nNDhK3Xp_",
              },
              {
                channel: "Most Techy",
                url: "https://youtu.be/8URpq4N8AD8?si=e8XemQqlMb54uxar",
              },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 bg-zinc-900/50 border-zinc-800">
                  <h3 className="text-lg font-semibold mb-4 text-[#FFB200]">
                    {video.channel}
                  </h3>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Key Insights</h2>
            <p className="text-gray-300 text-lg">
              Collaborations with big influencers such as Linus, Edward, and
              Matt significantly increased product sales and adoption among
              content creators and audio professionals.
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
            
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={handleContactUsClick}>
                Contact Us
              </Button>
           
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Maono;
