import { locations } from "@/constants/contactConstant";
import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const LocationTab = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Locations</h2>
        <p className="text-gray-400">
          Find the FitnessPro location nearest to you. All facilities offer
          world-class equipment and services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-colors duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-red-500/20 to-red-700/20"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                {location.name}
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-red-500 mt-1" />
                  <span className="text-gray-400 text-sm">
                    {location.address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-blue-500" />
                  <span className="text-gray-400 text-sm">
                    {location.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-yellow-500 mt-1" />
                  <span className="text-gray-400 text-sm">
                    {location.hours}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Amenities:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTab;
