"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/lib/ScrollContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollToSection } = useScroll();
  const router = useRouter();

  const navItems = [
    { label: "About Us", section: "aboutUs" },
    { label: "Our Services", section: "servicePage" },
    {
      label: "Contact Us",
      section: "contactForm",
      sublinks: [
        { label: "BRAND", section: "/brand" },
        { label: "INFLUENCER", section: "/influencer" },
      ],
    },
    { label: "Case Study", section: null },
    { label: "Blogs", section: null },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section, label) => {
    const isHomePage =
      typeof window !== "undefined" && window.location.pathname === "/";

    if (label === "Contact Us") {
      setIsServicesOpen(!isServicesOpen);
    } else if (section) {
      if (isHomePage) {
        scrollToSection(section, false); // Scroll directly
      } else {
        if (!localStorage.getItem("scrollTarget")) {
          localStorage.setItem("scrollTarget", section);
        }
        router.push("/");
      }
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    } else {
      router.push(label === "Blogs" ? "/blogs" : "/case-studies");
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    }
  };

  const handelSublinkClick = (section) => {
    if (section) {
      router.push(section);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full bg-black py-2 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Image
                src="/Logo-with-tag.svg"
                alt="Growwik Logo"
                width={80}
                height={30}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group"
              >
                {item.section ? (
                  <div>
                    <button
                      onClick={() => handleNavClick(item.section, item.label)}
                      className="button-underline text-white relative overflow-hidden group"
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </button>
                    {item.sublinks && (
                      <div className="absolute hidden group-hover:block pt-2 -left-4">
                        <div className="bg-black py-2 px-4 rounded shadow-lg">
                          {item.sublinks.map((sublink) => (
                            <button
                              key={sublink.label}
                              onClick={() => router.push(sublink.section)}
                              className="block whitespace-nowrap py-2 text-white hover:text-gray-300 transition-colors"
                            >
                              {sublink.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.label === "Blogs" ? "/blogs" : "/case-studies"}
                    className="button-underline text-white relative overflow-hidden group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          
          {/* Mobile Menu Toggle */}
          <motion.button
            className="xl:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} // Add rotation animation
            transition={{ duration: 0.3 }} // Control the duration of the rotation
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="xl:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav>
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label === "Contact Us" ? (
                        <div>
                          <div className="flex items-center w-full">
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="button-underline text-white relative overflow-hidden group text-left flex items-center"
                            >
                              {item.label}
                              <motion.span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                              />
                            </button>
                            <motion.div
                              animate={{ rotate: isServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`ml-2.5`}
                            >
                              <ChevronDown className="w-5 h-5 text-white" />
                            </motion.div>
                          </div>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                className="ml-4 mt-2 space-y-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.sublinks.map((sublink) => (
                                  <button
                                    key={sublink.label}
                                    onClick={() =>
                                      handelSublinkClick(sublink.section)
                                    }
                                    className="block text-white hover:text-gray-300 transition-colors"
                                  >
                                    {sublink.label}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            handleNavClick(item.section, item.label)
                          }
                          className="button-underline text-white relative overflow-hidden group"
                        >
                          {item.label}
                          <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </button>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div
                className="mt-4 flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white text-sm">PROUDLY SPONSOR</span>
                <Link href={"https://www.soa.ac.in/"}>
                  <Image
                    src="/newone.svg"
                    alt="Growwik Logo"
                    width={40}
                    height={6}
                  />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
