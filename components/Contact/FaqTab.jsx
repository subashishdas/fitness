import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FaqTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400">
          Quick answers to common questions. Can't find what you're looking for?
          Contact us directly!
        </p>
      </div>
      <div className="space-y-6">
        {[
          {
            q: "What are your membership options and pricing?",
            a: "We offer flexible membership plans starting at $29/month for basic access, $49/month for premium, and $79/month for unlimited access with all amenities. Contact our membership team for current promotions.",
          },
          {
            q: "Do you offer personal training services?",
            a: "Yes! We have certified personal trainers available for one-on-one sessions, small group training, and specialized programs. Sessions start at $60/hour with package discounts available.",
          },
          {
            q: "What safety measures do you have in place?",
            a: "We maintain the highest safety standards with regular equipment maintenance, certified staff on-site, first aid stations, and comprehensive cleaning protocols throughout the day.",
          },
          {
            q: "Can I freeze or cancel my membership?",
            a: "Yes, we offer flexible options to freeze your membership for up to 3 months per year, and you can cancel anytime with 30 days notice. No long-term contracts required.",
          },
          {
            q: "Do you have childcare services?",
            a: "Select locations offer supervised childcare services during peak hours for members. Please contact your preferred location for availability and scheduling.",
          },
          {
            q: "What group classes do you offer?",
            a: "We offer 50+ weekly classes including yoga, spin, HIIT, Zumba, pilates, and strength training. Check our app or website for current schedules and reservations.",
          },
        ].map((faq, index) => (
          <div key={index} className="bg-card/50 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <FaQuestionCircle className="text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqTab;
