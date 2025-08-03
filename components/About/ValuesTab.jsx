import React from "react";
import { values } from "@/constants/aboutConstant";


const ValuesTab = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          What We Stand For
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our values guide everything we do, from how we design our programs to
          how we interact with every member of our community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-gray-700/50`}>
                <value.icon className={`text-2xl ${value.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesTab;
