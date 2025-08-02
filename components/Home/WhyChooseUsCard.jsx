import React from "react";
import { FaCrown, FaStar, FaChevronRight } from "react-icons/fa";

const WhyChooseUsCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  highlight = false,
}) => {
  return (
    <div
      className={`group relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 overflow-hidden ${
        highlight
          ? "border-red-500/50 bg-gradient-to-br from-red-600/10 to-red-800/10"
          : "border-gray-700/50 hover:border-red-500/30"
      } hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10`}
    >
      {/* Background decoration */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          highlight ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
      </div>

      <div className="relative z-10">
        {/* Icon and header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-4 rounded-xl transition-all duration-300 ${
              highlight
                ? "bg-red-500 text-white"
                : "bg-gray-700/50 text-red-400 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110"
            }`}
          >
            <Icon size={24} />
          </div>

          {/* Rating stars for highlighted card */}
          {highlight && (
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} size={12} className="text-yellow-400" />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3
            className={`text-xl font-bold transition-colors duration-300 ${
              highlight ? "text-red-400" : "text-white group-hover:text-red-400"
            }`}
          >
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed text-sm">{description}</p>

          {/* Features list */}
          {features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <div className="w-1.5 h-1.5 custom-gradient-dot rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Learn more link */}
        <div className="mt-6 pt-4 border-t border-gray-700/30">
          <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-200 text-sm font-medium group/btn">
            Learn More
            <FaChevronRight
              size={10}
              className="group-hover/btn:translate-x-1 transition-transform duration-200 mt-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
