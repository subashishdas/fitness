import React from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TransformationSlide = ({ client }) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BeforeAfterSlider
            beforeImage={client.beforeImage}
            afterImage={client.afterImage}
          />
        </div>

        {/* Client Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              {client.name}
            </h3>
            <p className="text-red-400 font-medium">{client.program}</p>
            <p className="text-gray-400 text-sm mt-1">{client.duration}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-500">
                {client.weightLoss}
              </div>
              <div className="text-xs text-gray-400 mt-1">Weight Lost</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center lg:text-left">
              <div className="text-2xl font-bold text-red-500">
                {client.muscleGain}
              </div>
              <div className="text-xs text-gray-400 mt-1">Muscle Gained</div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400" size={16} />
              ))}
            </div>
            <span className="text-gray-400 text-sm">5.0</span>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-4 relative">
            <FaQuoteLeft className="text-red-500/30 text-2xl absolute top-2 left-2" />
            <p className="text-gray-300 text-sm leading-relaxed mt-4">
              "{client.testimonial}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationSlide;
