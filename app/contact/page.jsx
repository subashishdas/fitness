"use client";
import NavigationTabs from "@/components/About/NavigationTabs";
import ContactCard from "@/components/Contact/ContactCard";
import ContactTab from "@/components/Contact/ContactTab";
import DepartmentTab from "@/components/Contact/DepartmentTab";
import FaqTab from "@/components/Contact/FaqTab";
import LocationTab from "@/components/Contact/LocationTab";
import FloatingElements from "@/components/Home/FloatingElements";
import { contactInfo, navigationTabs } from "@/constants/contactConstant";
import React, { useState } from "react";
import { FaCalendarAlt, FaHeadset } from "react-icons/fa";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("contact");
  return (
    <div>
      {/* Hero Section*/}
      <section className="relative py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6">
              Get In <span className="text-yellow-300">Touch</span>
            </h1>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Have questions about memberships, classes, or just want to learn
              more? We're here to help you on your fitness journey. Reach out to
              us anytime!
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                <FaCalendarAlt />
                Schedule a Tour
              </button>
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 cursor-pointer">
                <FaHeadset />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} info={info} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <NavigationTabs
              navigationTabs={navigationTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === "contact" && <ContactTab />}
          {activeTab === "locations" && <LocationTab />}
          {activeTab === "departments" && <DepartmentTab />}
          {activeTab === "faq" && <FaqTab />}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 ">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Our friendly team is always ready to help. Don't hesitate to reach
              out - we're here to support your fitness journey every step of the
              way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                <FaCalendarAlt />
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center gap-2">
                <FaHeadset />
                Live Chat Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
