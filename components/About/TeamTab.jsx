import { team } from "@/constants/aboutConstant";
import React from "react";

const TeamTab = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the passionate leaders who drive our mission forward every day.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors duration-300"
          >
            <div className="relative h-64">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-red-400 font-medium mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTab;
