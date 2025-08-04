import React from "react";

const ContactCard = ({ info }) => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-colors duration-300 text-center">
      <div
        className={`${info.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <info.icon className={`${info.color} text-2xl`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
      {info.details.map((detail, idx) => (
        <p key={idx} className="text-gray-400 text-sm">
          {detail}
        </p>
      ))}
    </div>
  );
};

export default ContactCard;
