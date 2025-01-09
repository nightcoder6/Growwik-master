import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function Creators() {
  const creators = [
    {
      id: "Toasty Bros",
      image: "/creator/Toasty bros.jpeg",
      instaLink: "https://www.instagram.com/toastybros/",
      youtubeLink: "https://youtube.com/@toastybros?si=vBZDVej4f34DcfQa",
    },
    {
      id: "Shortcircuit",
      image:
        "/creator/Shortcircuit.jpg",
      instaLink: "https://www.instagram.com/shortcircuityt/",
      youtubeLink: "https://youtube.com/@shortcircuit?si=LEaE3GLeWrY01BDA",
    },
    {
      id: "Linua Tech",
      image:
        "/creator/Linus tech.jpg",
      instaLink: "https://www.instagram.com/linustech",
      youtubeLink: "https://youtube.com/@linustechtips?si=Ppu4019aB1XgKwhs",
    },
    {
      id: "Beebom",
      image:
        "/creator/Beebom.jpg",
      instaLink: "https://youtube.com/@beebomco?si=g-thdbCW6N9AGeiR",
      youtubeLink: "https://youtube.com/@beebomco?si=g-thdbCW6N9AGeiR",
    },
    {
      id: "Kunal Malhotra",
      image:
        "/creator/Kunal Mahlotra.jpg",
      instaLink: "instagram.com/the.photography.blogger",
      youtubeLink: "https://youtube.com/@kunalmalhotrakm?si=Oe8ejJfkj_bop0pO",
    },
    {
      id: "Tech Venoms",
      image:
        "/creator/tech venoms.jpg",
      instaLink: "https://youtube.com/@venomstech?si=rvRR5IO_H5acGleJ",
      youtubeLink: "https://youtube.com/@venomstech?si=rvRR5IO_H5acGleJ",
    },
    {
      id: "Techno Ruhez",
      image:
        "/creator/techno ruhez.jpg",
      instaLink: "instagram.com/technoruhez",
      youtubeLink: "https://youtube.com/@technoruhez?si=z725Vd-pxi5Y_80K",
    },
    {
      id: "Assasian Army",
      image:
        "/creator/Assain.jpg",
      instaLink: "instagram.com/assassinsarmy01?utm_medium=copy_link",
      youtubeLink: "https://youtube.com/@assassinsarmy?si=XZMIDCyK-bQLzOBX",
    },
    {
      id: "Purva jha",
      image:
        "/creator/Purv jha.jpg",
      instaLink:
        "https://www.instagram.com/puravjha/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
      youtubeLink: "https://youtube.com/@puravjha_?si=E42SKKxALavUGdJ9",
    },
    {
      id: "Nitavior",
      image:
        "/creator/Nitavior.jpg",
      instaLink: "https://www.instagram.com/nitavior/",
      youtubeLink: "https://www.instagram.com/nitavior/",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCreators = showAll ? creators : creators.slice(0, 5);

  return (
    <section className="bg-black text-white px-14 max-[432px]:px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold mb-12">
          Creators we have worked
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {visibleCreators.map((creator, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              {/* Circular Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full border-4 border-white">
                  <Image
                    src={creator.image}
                    alt={`Creator ${index + 1}`}
                    fill
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Creator ID */}
              <p className="text-lg font-medium">{creator.id}</p>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <Link href={creator.instaLink}>
                  <FaInstagram className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                </Link>
                <Link href={creator.youtubeLink}>
                  <FaYoutube className="w-6 h-6 cursor-pointer hover:text-gray-300 transition-colors" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More / Show Less Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Creators;
