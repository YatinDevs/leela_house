import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      image_url:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Farmhouse Experience",
      description: "Escape to our serene farmhouse retreat near Pune",
      ctaHighlight: "Premium Accommodations",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1",
    },
    {
      id: 2,
      image_url:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Gourmet Dining Experience",
      description: "Enjoy authentic Maharashtrian cuisine in nature's lap",
      ctaHighlight: "Special Dining Packages",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2",
    },
    {
      id: 3,
      image_url:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Perfect Getaway Destination",
      description: "Create unforgettable memories with your loved ones",
      ctaHighlight: "Weekend Specials",
      video_url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomEffect, setZoomEffect] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setZoomEffect(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      setZoomEffect(false);
    }, 300);
  };

  const prevImage = () => {
    setZoomEffect(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
      );
      setZoomEffect(false);
    }, 300);
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setZoomEffect(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setZoomEffect(false);
      }, 300);
    }
  };

  const currentItem = heroContent[currentIndex] || {};

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center text-white overflow-hidden shadow-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentItem.image_url})`,
            }}
            key={currentItem.id}
            initial={{ opacity: 0, scale: zoomEffect ? 1.1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: zoomEffect ? 0.9 : 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </motion.div>
        </AnimatePresence>

        {/* Play Button for Video */}
        {currentItem.video_url && (
          <motion.a
            href={currentItem.video_url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-20 mb-24  bg-amber-600 hover:bg-amber-600 text-white p-4 md:p-6 rounded-full shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Play className="w-5 h-5 md:w-8 md:h-8" />
          </motion.a>
        )}

        {/* Navigation Arrows */}
        {heroContent.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full z-10 backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </>
        )}

        {/* Text Content */}
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto px-4"
          key={currentItem.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentItem.ctaHighlight && (
            <motion.div
              className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-medium"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {currentItem.ctaHighlight}
            </motion.div>
          )}
          <h1 className="mt-20 text-3xl md:text-center sm:text-5xl lg:text-6xl font-bold mb-4">
            {currentItem.title || "Welcome to Leela Farmhouse"}
          </h1>
          {currentItem.description && (
            <p className="mt-4 text-center text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {currentItem.description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Thumbnail Navigation Container */}
      <div className="absolute -mt-18 left-0 right-0 z-10 px-4">
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-[#fff] backdrop-blur-sm rounded-xl  p-4 ">
            <div className="flex justify-around gap-4">
              {heroContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  onClick={() => selectImage(index)}
                  className={`cursor-pointer group relative rounded-lg overflow-hidden transition-all duration-300 ${
                    currentIndex === index
                      ? "ring-2 ring-amber-500"
                      : "ring-1 ring-gray-200"
                  }`}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-20 w-32 md:h-40 md:w-52">
                    <img
                      src={item.image_url}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all ${
                        currentIndex === index
                          ? "bg-black/40"
                          : "bg-black/20 group-hover:bg-black/30"
                      }`}
                    >
                      <Play
                        className={`w-5 h-5 ${
                          currentIndex === index
                            ? "text-white"
                            : "text-white/80 group-hover:text-white"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <p className="text-xs text-white font-medium truncate">
                      {item.ctaHighlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div>
        <div className="absolute z-20 px-4 w-full -mt-0">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mx-auto w-full max-w-6xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                  Leela Farmhouse
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Your perfect weekend getaway near Pune with premium amenities
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition font-semibold w-full"
                >
                  View Packages
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-white border border-amber-600 hover:bg-amber-50 text-amber-600 px-6 py-3 rounded-lg transition font-semibold w-full"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div> */}
      {/* CTA Section */}
    </div>
  );
};

export default HeroSection;
