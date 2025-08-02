import React from "react";
import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  return (
    <div className="w-full h-96 overflow-hidden rounded-xl">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        sliderLineColor="#fff"
        handleSize={40}
        alt="Before After"
        aspectRatio="tall"
      />
    </div>
  );
};

export default BeforeAfterSlider;
