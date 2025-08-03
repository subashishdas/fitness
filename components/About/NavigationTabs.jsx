"use client";
import React from "react";

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-2 flex gap-2 overflow-x-auto scrollbar-hide whitespace-nowrap">
      {[
        { id: "story", label: "Our Story" },
        { id: "values", label: "Our Values" },
        { id: "team", label: "Meet the Team" },
        { id: "timeline", label: "Timeline" },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? "bg-red-500 text-white"
              : "text-gray-400 hover:text-white hover:bg-gray-700/50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
