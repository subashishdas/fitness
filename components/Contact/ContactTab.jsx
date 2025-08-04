import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronRight,
  FaComment,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const ContactTab = () => {
  const [formStatus, setFormStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
    inquiryType: "general",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "email",
        inquiryType: "general",
      });

      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-400">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols- lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-card/50 rounded-2xl p-8">
          {formStatus === "success" && (
            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6 flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span className="text-green-400">
                Message sent successfully! We'll get back to you soon.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="general">General Information</option>
                  <option value="membership">Membership</option>
                  <option value="training">Personal Training</option>
                  <option value="classes">Group Classes</option>
                  <option value="corporate">Corporate Wellness</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Message *
              </label>
              <div className="relative">
                <FaComment className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Preferred Contact Method
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === "email"}
                    onChange={handleInputChange}
                    className="text-red-500"
                  />
                  <span className="text-gray-300">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === "phone"}
                    onChange={handleInputChange}
                    className="text-red-500"
                  />
                  <span className="text-gray-300">Phone</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {formStatus === "sending" ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <FaChevronRight />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          <div className="bg-card/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get Immediate Help
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <FaPhone className="text-blue-500" />
                </div>
                <div>
                  <div className="text-white font-medium">Call Us Now</div>
                  <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <FaHeadset className="text-green-500" />
                </div>
                <div>
                  <div className="text-white font-medium">Live Chat</div>
                  <div className="text-gray-400 text-sm">Available 24/7</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <FaCalendarAlt className="text-yellow-500" />
                </div>
                <div>
                  <div className="text-white font-medium">Schedule a Visit</div>
                  <div className="text-gray-400 text-sm">Book a free tour</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: FaFacebookF, color: "bg-blue-600 hover:bg-blue-700" },
                { icon: FaTwitter, color: "bg-blue-400 hover:bg-blue-500" },
                { icon: FaInstagram, color: "bg-pink-600 hover:bg-pink-700" },
                { icon: FaLinkedinIn, color: "bg-blue-700 hover:bg-blue-800" },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`${social.color} p-3 rounded-lg transition-colors duration-200`}
                >
                  <social.icon className="text-white" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;
