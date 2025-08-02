"use client";
import React, { useState } from "react";
import FloatingElements from "./FloatingElements";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaGift,
  FaRocket,
  FaUserCheck,
} from "react-icons/fa";
import CountdownTimer from "./CountdownTimer";
import { benefits } from "@/constants/constant";

const BookTrialBanner = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 28);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      console.log(`Thank you for booking your trial, ${email}!`);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
        <FloatingElements />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Success Animation */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <FaCheckCircle className="text-white text-3xl" />
            </div>

            <h2 className="text-4xl font-bold text-white mb-4">
              🎉 You're All Set!
            </h2>
            <p className="text-xl text-red-100 mb-6">
              We've sent your free trial details to <strong>{email}</strong>
            </p>
            <p className="text-red-100 mb-8">
              Check your inbox and get ready to transform your fitness journey!
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Another Trial
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-800/30 to-black/40"></div>

      <FloatingElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold mb-6 animate-pulse">
            <FaGift />
            Limited Time Offer
          </div>

          <h2 className="text-5xl lg:text-5xl font-bold text-white  mb-4 leading-tight">
            Start Your Fitness Journey
            <span className="text-yellow-300"> 100% FREE</span>
          </h2>

          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            No commitment, no strings attached. Experience our world-class
            facilities, meet our expert trainers, and see why thousands choose
            FitnessPro.
          </p>

          {/* CountDown Timer */}
          <div className="mb-8">
            <p className="text-red-100 mb-4 flex items-cenrer justify-center gap-2">
              Offer expires in:
            </p>
            <CountdownTimer targetDate={offerEndDate} />
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-5 gap-4 mb-10">
            {benefits.map((benefits, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-200"
              >
                <FaCheckCircle className="text-green-400 text-xl mx-auto mb-2" />
                <p className="text-white text-sm font-medium">{benefits}</p>
              </div>
            ))}
          </div>

          {/* Email Form */}
          <div className="bg-white/10 backdrop-blur-sm ronded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {" "}
              Book Your Free Trial Now!
            </h3>

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <FaRocket className="group-hover:animate-bounce" />
                  Start Free Trial
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            <p className="text-red-100 text-sm mt-4">
              By signing up, you agree to our terms and privacy policy.
              <br />
              <strong>No spam, unsubscribe anytime.</strong>
            </p>
          </div>
          {/* Additional CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-2">
              <FaCalendarAlt />
              Schedule a Tour
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-2">
              <FaUserCheck />
              Talk to a Trainer
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-8 text-red-100">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">10,000+ Happy Members</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Certified Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-sm">Certified Trainers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrialBanner;
