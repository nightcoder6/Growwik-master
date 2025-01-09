"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function LatestWorks() {
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const videos = [
    {
      id: 1,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/1.mp4?alt=media&token=86e643a5-fdbf-489c-9375-45bdd7798b00",
      logo: "/logos/Maono.svg",
    },
    {
      id: 2,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/2.mp4?alt=media&token=b2fe76d9-b5bc-4cdf-8824-aa5b1a95b6cb",
      logo: "/logos/FlamApp.svg",
    },
    {
      id: 3,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/3.mp4?alt=media&token=320a5e8f-c7a9-4819-ab34-602c3748f169",
      logo: "/logos/Hangout-Hub.svg",
    },
    {
      id: 4,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/4.mp4?alt=media&token=e1e377a5-dc47-41e8-87eb-de6ed80c6cba",
      logo: "/logos/Punch-Trading.svg",
    },
    {
      id: 5,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/5.mp4?alt=media&token=37c265ad-7214-4998-bbc1-4d5034d11e0d",
      logo: "/logos/Luma-AI.svg",
    },
    {
      id: 6,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/6.mp4?alt=media&token=e68baaa3-b407-45f6-bc51-890e9c7b0a42",
      logo: "/logos/Maono.svg",
    },
    {
      id: 7,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/7.mp4?alt=media&token=ba0ce644-149c-4bc9-9edf-64422ac99a14",
      logo: "/logos/Maono.svg",
    },
    {
      id: 8,
      src: "https://firebasestorage.googleapis.com/v0/b/jobsco-05.appspot.com/o/8.mp4?alt=media&token=c6cd4039-6dba-4c9a-8868-6f4290b4fed8",
      logo: "/logos/Maono.svg",
    },
  ];

  // Observe if the LatestWorks section is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isPaused || !isInView) return; // Scroll only when section is in view

      const nextIndex = (activeIndex + 1) % videos.length;
      setActiveIndex(nextIndex);

      // Scroll active video into view for small screens
      if (window.innerWidth <= 768) {
        const videoElements = scrollContainer.children;
        const activeVideo = videoElements[nextIndex];
        if (activeVideo) {
          activeVideo.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        }
      } else {
        // Default scroll behavior for larger devices
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    const scrollInterval = setInterval(scroll, 10000);

    return () => clearInterval(scrollInterval);
  }, [isPaused, activeIndex, isInView]);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 2;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    slider.isDown = false;
  };

  const handleVideoInteraction = (isInteracting) => {
    setIsPaused(isInteracting);
  };

  return (
    <div className="relative overflow-hidden" ref={sectionRef}>
      {/* Gradient blending into the zebra illusion */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Black Section */}
      <div className="bg-black px-14 max-[432px]:px-6 py-16 relative z-20">
        <section className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold mb-12">
            Our Latest Work
          </h2>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 w-[300px] h-[500px] rounded-3xl overflow-hidden shadow-lg`}
              >
                <video
                  className="w-full h-full object-cover"
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  onMouseEnter={() => handleVideoInteraction(true)}
                  onMouseLeave={() => handleVideoInteraction(false)}
                  onTouchStart={() => handleVideoInteraction(true)}
                  onTouchEnd={() => handleVideoInteraction(false)}
                ></video>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={video.logo}
                    alt={`Logo ${index}`}
                    width={20}
                    height={20}
                    className="h-24 w-32"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
