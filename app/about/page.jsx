"use client";
import NavigationTabs from "@/components/About/NavigationTabs";
import StoryTab from "@/components/About/StoryTab";
import TeamTab from "@/components/About/TeamTab";
import TestimonialCard from "@/components/About/TestimonialCard";
import TimelineTab from "@/components/About/TimelineTab";
import ValuesTab from "@/components/About/ValuesTab";
import FloatingElements from "@/components/Home/FloatingElements";
import { stats, testimonials } from "@/constants/aboutConstant";
import React, { useState } from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa";

const page = () => {
  const [activeTab, setActiveTab] = useState("story");
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Us</span>
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              For over 15 years, we've been transforming lives through fitness.
              Our story is one of passion, dedication, and the unwavering belief
              that everyone deserves to feel strong, healthy, and confident.
            </p>
            <div className="flex justify-center">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                <FaPlay />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <stat.icon className="text-primary text-3xl" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {activeTab === "story" && <StoryTab />}
          {activeTab === "values" && <ValuesTab />}
          {activeTab === "team" && <TeamTab />}
          {activeTab === "timeline" && <TimelineTab />}
        </div>
      </section>

      {/* Testimonials Sections */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-400">
              Real stories from real people who've transformed their lives with
              us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Story?
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Become part of the FitnessPro family and start writing your own
              transformation story today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                Start Free Trial
                <FaChevronRight />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
