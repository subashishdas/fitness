"use client";
import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import TransformationSlide from "@/components/Home/TransformationSlide";
import { transformations } from "@/constants/constant";
import { motion } from "motion/react";

const TransformationCarousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 p-3 rounded-full cursor-pointer z-10 shadow-lg"
        onClick={onClick}
      >
        <FaChevronRight className="text-white text-xl" />
      </motion.div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 p-3 rounded-full cursor-pointer z-10 shadow-lg"
        onClick={onClick}
      >
        <FaChevronLeft className="text-white text-xl" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="rounded-2xl overflow-hidden">
      {transformations.map((client, index) => (
        <div key={index} className="px-4">
          <TransformationSlide client={client} />
        </div>
      ))}
    </Slider>
  );
};

export default TransformationCarousel;
