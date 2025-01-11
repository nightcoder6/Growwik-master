import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/PR Prabandhak/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/PR Prabandhakmedia/profilecard/?igsh=MWwyeDBoNWtyZTgzZA==",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com",
    },
  ];
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="col-span-1">
            <Link href="/">
            <Image
                src="/Logo-with-tag.svg"
                alt="PR Prabandhak Logo"
                width={200}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">
              Navigation Link
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/brand"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="mr-2">{">"}</span>Brand
                </Link>
              </li>
              <li>
                <Link
                  href="/influencer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="mr-2">{">"}</span>Influencer
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="mr-2">{">"}</span>Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  <span className="mr-2">{">"}</span>Case Study
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">
              Social Links
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3 hover:text-gray-300 text-white transition-colors duration-300 group"
                  >
                    <span className="inline-block rounded-full transition-colors duration-300">
                      <link.icon className="w-5 h-5" />
                    </span>
                    <span className="text-base">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-red-500 text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Link
                  href="tel:+917760519545"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  +91 7760519545
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="mailto:Contact@PR Prabandhak.com"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  Contact@PR Prabandhak.com
                </Link>
              </li>
              <li>
                No. 47, 4th Cross, 2nd Main, HSR Layout, Sector 7, Bangalore,
                Karnataka - 560102
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-base text-white">
            © {currentYear} PR Prabandhak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
