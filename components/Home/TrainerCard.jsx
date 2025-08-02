"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaDumbbell,
  FaHeart,
  FaRunning,
  FaMedal,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const TrainerCard = ({ trainer }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSpecializationIcon = (specialization) => {
    const icons = {
      "Strength Training": FaDumbbell,
      "Cardio & HIIT": FaRunning,
      "Yoga & Wellness": FaHeart,
      CrossFit: FaMedal,
      "Personal Training": FaDumbbell,
      Nutrition: FaHeart,
    };
    return icons[specialization] || FaDumbbell;
  };

  const SpecIcon = getSpecializationIcon(trainer.specialization);

  return (
    <div
      className="group relative h-96 w-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isHovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-card/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden h-full relative group-hover:border-primary/50 transition-colors duration-300">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-gray-800"
              style={{ backgroundImage: `url(${trainer.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {trainer.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <SpecIcon className="text-red-500" size={16} />
                  <p className="text-red-400 font-medium">
                    {trainer.specialization}
                  </p>
                </div>
                <p className="text-gray-300 text-sm">{trainer.experience}</p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 right-4 bg-primary/80 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Hover to flip
              </div>
            </div>
          </div>
        </div>

        {/* Back Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-500/50 rounded-2xl h-full p-6 flex flex-col justify-between">
            {/* Quote */}
            <div className="text-center mb-4">
              <FaQuoteLeft className="text-red-500/50 text-3xl mx-auto mb-4" />
              <p className="text-gray-300 italic leading-relaxed">
                "{trainer.quote}"
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3 text text-center">
                <div className="text-xl font-bold text-red-500">
                  {trainer.clientsHelped}+
                </div>
                <div className="text-xs text-gray-400">Clients Helped</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-red-500">
                  {trainer.yearsExp}
                </div>
                <div className="text-xs text-gray-400">Years Experience</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white mb-2">
                Certifications:
              </h4>
              <div className="flex flex-wrap gap-1">
                {trainer.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3">
              {trainer.social.instagram && (
                <Link
                  href="#"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary transition-colors duration-200"
                >
                  <FaInstagram
                    className="text-gray-400 hover:text-white"
                    size={16}
                  />
                </Link>
              )}
              {trainer.social.facebook && (
                <Link
                  href="#"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary transition-colors duration-200"
                >
                  <FaFacebook
                    className="text-gray-400 hover:text-white"
                    size={16}
                  />
                </Link>
              )}
              {trainer.social.twitter && (
                <Link
                  href="#"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary transition-colors duration-200"
                >
                  <FaTwitter
                    className="text-gray-400 hover:text-white"
                    size={16}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
