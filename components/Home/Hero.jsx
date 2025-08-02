import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-100px)] py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-50"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-red-500/10 to-red-700/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-4 flex items-center flex-col md:flex-row gap-10 relative z-10">
        {/* Text Content */}
        <div className="flex-1 max-w-xl text-center md:text-left p-6 rounded-xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-600/30 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-red-400 text-sm font-medium">
              Transform Your Body
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-wider leading-tight mb-6">
            Start{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Training
            </span>
            <br />
            Today
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-4 font-mono text-base md:text-lg leading-relaxed mb-8">
            Transform your body and mind with our cutting-edge fitness programs.
            Join thousands who've already started their journey to greatness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start ">
            <button className="custom-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 cursor-pointer group relative overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <span className="bg-white rounded-full p-2 transition-all duration-300 ease-out group-hover:translate-x-2 relative z-10">
                <FaChevronRight className="text-red-600" size={14} />
              </span>
            </button>
            <button className="  border-2 border-primary text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-card  hover:border-white cursor-pointer">
              Explore More
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8 justify-center md:justify-start">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">10k+</div>
              <div className="text-gray-400 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">500+</div>
              <div className="text-gray-400 text-sm">Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 relative">
          {/* Glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-full blur-3xl scale-75"></div>

          <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <Image
              src="/workout-animate.svg"
              alt="Fitness Training Illustration"
              width={500}
              height={500}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-80 animate-bounce"></div>
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600 rounded-full opacity-60 animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
