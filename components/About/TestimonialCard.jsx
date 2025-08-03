import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 relative">
      <FaQuoteLeft className="text-red-500/30 text-3xl absolute top-4 left-4" />
      <div className="pt-8">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" size={16} />
          ))}
        </div>
        <p className="text-gray-300 italic mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="text-white font-semibold">{testimonial.name}</div>
            <div className="text-gray-400 text-sm">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
