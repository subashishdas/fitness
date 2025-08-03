import React from "react";
import { FaLightbulb, FaRocket } from "react-icons/fa";

const StoryTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">
            How It All Began
          </h2>
          <p className="text-gray-400 mb-4 leading-relaxed">
            FitnessPro was born from a simple observation: too many people felt
            intimidated by traditional gyms. Our founder, Sarah Johnson, a
            former Olympic athlete, wanted to create a space where fitness was
            accessible, enjoyable, and sustainable for everyone.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            What started as a single gym in 2009 has grown into a community of
            over 10,000 members across 5 locations. But our mission remains the
            same: to help every person discover the joy of movement and the
            confidence that comes with being fit and healthy.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 bg-primary rounded"></div>
            <div>
              <div className="text-2xl font-bold text-red-500">15+ Years</div>
              <div className="text-gray-400">of transforming lives</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-2xl p-8">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop"
              alt="Gym Interior"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Mission And Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <FaRocket className="text-red-500 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            To empower individuals to achieve their fitness goals through expert
            guidance, state-of-the-art facilities, and a supportive community
            that celebrates every victory.
          </p>
        </div>
        <div className="bg-gray-800/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-yellow-500 text-2xl" />
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            To be the leading fitness community that transforms lives, builds
            confidence, and creates lasting healthy habits for people from all
            walks of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryTab;
