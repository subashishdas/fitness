import { departments } from "@/constants/contactConstant";
import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const DepartmentTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Contact by Department
        </h2>
        <p className="text-gray-400">
          Get in touch with the right team for faster, more specialized
          assistance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-card/50 rounded-2xl p-6 hover:bg-card/70 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">{dept.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{dept.description}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span className="text-gray-300 text-sm">{dept.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
                <span className="text-gray-300 text-sm">{dept.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentTab;
