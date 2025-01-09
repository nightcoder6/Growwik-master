"use client";

import Image from "next/image";
import { useState } from "react";

function ServicePage() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const services = [
    {
      title: "Influencer Marketing",
      defaultImg: "/service/influencer.jpg",
      activeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      description:
        "Leverage influencers to reach your target audience. Connect with those who resonate with your brand to amplify your message.",
    },
    {
      title: "Meme Marketing",
      defaultImg: "/service/meme-marketing.jpg",
      activeColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      description:
        "Utilize viral memes to create engaging content, capturing attention and enhancing your brand's visibility.",
    },
    {
      title: "Content Creation",
      defaultImg: "/service/content-creation.jpg",
      activeColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
      description:
        "High-quality content tailored to your brand's voice, including videos, graphics, blogs, and more.",
    },
    {
      title: "Social Media Management",
      defaultImg: "/service/social-media.jpg",
      activeColor: "bg-gradient-to-r from-red-500 to-pink-500",
      description:
        "Manage your social presence, grow your online footprint, and foster customer relationships through strategic planning.",
    },
    {
      title: "Performance Marketing",
      defaultImg: "/service/performance.jpg",
      activeColor: "bg-gradient-to-r from-teal-400 to-green-400",
      description:
        "Drive results with performance marketing strategies, optimizing campaigns for maximum ROI.",
    },
    {
      title: "SEO",
      defaultImg: "/service/seo.jpg",
      activeColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      description:
        "Boost your site's visibility on search engines, enhancing organic traffic with expert SEO techniques.",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <section className="bg-black px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Services We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative perspective-1000 cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`relative w-full h-[250px] transform transition-transform duration-700 ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full bg-black text-white rounded-3xl overflow-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <Image
                    src={service.defaultImg}
                    alt={service.title}
                    fill
                    className="object-cover rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute w-full h-full flex items-center justify-center rounded-3xl text-center p-6 ${service.activeColor}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-lg">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
