import { milestones } from "@/constants/aboutConstant";
import React from "react";

const TimelineTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
        <p className="text-gray-400">
          From humble beginnings to industry leader - here's how we've grown
          together.
        </p>
      </div>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-500/30"></div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div className="relative z-10 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {milestone.year}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineTab;
