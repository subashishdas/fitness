"use client";
import React, { useEffect, useRef, useState } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import axios from "axios";

const Gallery = () => {
  const galleryRef = useRef(null);
  const [images, setImages] = useState([]);
  const [lgInstance, setLgInstance] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Use refs to track current values without causing re-renders
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);

  // Update refs when state changes
  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  // Fetch images - only depends on page number
  useEffect(() => {
    const fetchImages = async () => {
      // Check current values using refs
      if (loadingRef.current || !hasMoreRef.current) return;

      setLoading(true);
      try {
        const response = await axios.get(`/api/gallery?q=gym&page=${page}`);
        const newImages = response.data;

        if (newImages.length === 0) {
          setHasMore(false);
          return;
        }

        setImages((prev) => [...prev, ...newImages]);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]); // Only depends on page

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check current values using refs
      if (loadingRef.current || !hasMoreRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // No dependencies needed

  // Initialize LightGallery when we first get images
  useEffect(() => {
    if (images.length > 0 && galleryRef.current && !lgInstance) {
      const instance = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        licenseKey: "0000-0000-000-0000",
        download: true,
      });
      setLgInstance(instance);
    }
  }, [images.length > 0, lgInstance]);

  // Refresh LightGallery when new images are added (but instance exists)
  useEffect(() => {
    if (lgInstance && images.length > 0) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        lgInstance.refresh();
      }, 100);
    }
  }, [images.length, lgInstance]);

  // Cleanup LightGallery on unmount
  useEffect(() => {
    return () => {
      if (lgInstance) {
        lgInstance.destroy();
      }
    };
  }, [lgInstance]);

  return (
    <div>
      <div
        ref={galleryRef}
        className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 px-4"
      >
        {images.map((src, index) => (
          <a
            href={src}
            key={`${src}-${index}`}
            className="block overflow-hidden rounded-lg cursor-pointer"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      {loading && (
        <div className="text-center py-4">
          <p>Loading more images...</p>
        </div>
      )}

      {!hasMore && images.length > 0 && (
        <div className="text-center py-4">
          <p>No more images to load</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
