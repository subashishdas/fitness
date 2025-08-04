import Image from "next/image";
import React from "react";
import { FaArrowRight, FaClock, FaFire } from "react-icons/fa";
import { motion } from "motion/react";
const TrainingProgramCard = ({
  name,
  image,
  description,
  duration = "30 min",
  intensity = "High",
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 100 }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="group bg-card/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:scale-105 hover:border-red-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header with image and badges */}
        <div
          variants={cardVariants}
          className="flex flex-col items-center mb-4"
        >
          {/* Image container with enhanced styling */}
          <div className="relative mb-4">
            <div className="w-24 h-24 custom-gradient rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            {/* Floating intensity badge */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <FaFire size={10} />
              {intensity}
            </div>
          </div>

          {/* Duration badge */}
          <div className="flex items-center gap-1 bg-gray-700/50 px-3 py-1 rounded-full mb-3">
            <FaClock size={12} className="text-gray-400" />
            <span className="text-xs text-gray-300">{duration}</span>
          </div>
        </div>

        {/* Content */}
        <div variants={cardVariants} className="text-center space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Action button */}
        <div variants={cardVariants} className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 custom-gradient text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Start Training
            <FaArrowRight
              size={12}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingProgramCard;
