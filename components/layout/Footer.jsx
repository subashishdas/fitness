"use client";

import { programs, quickLinks } from "@/constants/constant";
import React from "react";
import {
  FaCertificate,
  FaClock,
  FaDumbbell,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
  FaStar,
  FaTwitter,
  FaYoutube,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-red-500">
          <FaDumbbell size={60} />
        </div>
        <div className="absolute top-20 right-20 text-red-500">
          <FaDumbbell size={40} />
        </div>
        <div className="absolute bottom-20 right-1/3 text-red-500">
          <FaDumbbell size={50} />
        </div>
        <div className="absolute bottom-10 right-1/3 text-red-500">
          <FaDumbbell size={35} />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="custom-gradient rounded-full p-2">
                <FaDumbbell className="text-white text-3xl" />
              </div>
              <span className="text-3xl font-bold text-white">Fitness</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transform your body and mind with our world-class fitness
              programs. Join thousands who've already started their journey to a
              healthier, stronger you.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                <span className="text-sm">
                  123 Fitness Street, Wellness City, WC 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-red-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaEnvelope className="text-red-500 flex-shrink-0" />
                <span className="text-sm">info@fitnesspro.com</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <FaClock className="text-red-500" />
                <h4 className="text-white font-semibold">Operating Hours</h4>
              </div>
              <div className="space-y-1 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="text-red-400">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-red-400">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-red-400">7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded"></div>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors duration-200"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded"></div>
              Programs
            </h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors duration-200"></div>
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NewsLetter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Motivated!
              </h3>
              <p className="text-gray-400">
                Get weekly workout tips, nutrition advice, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social & Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200 group"
                >
                  <FaFacebook
                    className="text-gray-400 group-hover:text-white"
                    size={18}
                  />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200 group"
                >
                  <FaInstagram
                    className="text-gray-400 group-hover:text-white"
                    size={18}
                  />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200 group"
                >
                  <FaTwitter
                    className="text-gray-400 group-hover:text-white"
                    size={18}
                  />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-red-500 p-3 rounded-full transition-colors duration-200 group"
                >
                  <FaYoutube
                    className="text-gray-400 group-hover:text-white"
                    size={18}
                  />
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <FaCertificate className="text-red-500" />
                <span>Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-red-500" />
                <span>Secure & Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span>5-Star Rated</span>
              </div>
            </div>
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-all duration-200 hover:scale-110 group"
            >
              <FaArrowUp
                className="text-white group-hover:animate-bounce"
                size={18}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-black/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>© 2025 Fitness. Made with</span>
              <FaHeart className="text-red-500" size={14} />
              <span>for fitness enthusiasts by Shubhz_code.</span>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-red-400 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
