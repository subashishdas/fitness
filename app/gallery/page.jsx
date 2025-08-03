import Gallery from "@/components/Gallery/Gallery";
import React from "react";

const GalleryPage = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 pb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="text-sm text-gray-300 text-center">
            Every rep. Every result. Captured.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );
};

export default GalleryPage;
