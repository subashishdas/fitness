"use client";
import React from "react";
import { FaDumbbell, FaFire, FaRocket } from "react-icons/fa";

const FloatingElements = () => {
  return (
    <>
      {/* Floating Icons */}
      <div className="absolute top-10 left-10 text-red-500/20 animate-bounce">
        <FaDumbbell size={40} />
      </div>
      <div
        className="absolute top-20 right-20 text-red-500/20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <FaFire size={35} />
      </div>
      <div
        className="absolute bottom-20 left-20 text-red-500/20 animate-bounce"
        style={{ animationDelay: "2s" }}
      >
        <FaRocket size={30} />
      </div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/30 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400/40 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-red-600/30 rounded-full animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </>
  );
};

export default FloatingElements;
