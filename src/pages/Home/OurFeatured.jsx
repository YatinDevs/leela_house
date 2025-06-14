import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Users,
} from "lucide-react";
import CountUp from "react-countup";

const OurFeatured = () => {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const leftCarouselImages = [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  const rightGalleryImages = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  // Auto-rotate right gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRightImage((prev) => (prev + 1) % rightGalleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextLeftImage = () => {
    setCurrentLeftImage((prev) => (prev + 1) % leftCarouselImages.length);
  };

  const prevLeftImage = () => {
    setCurrentLeftImage(
      (prev) =>
        (prev - 1 + leftCarouselImages.length) % leftCarouselImages.length
    );
  };

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="py-16 md:py-24 bg-amber-50 relative">
      <div className="container mx-auto px-4">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-medium"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Premium Retreat
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Our Premier Property
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Carousel */}
          <div className="flex flex-col h-full">
            {/* Carousel with Navigation */}
            <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={leftCarouselImages[currentLeftImage]}
                alt="Property showcase"
                className="w-full h-full object-cover"
              />

              {/* Carousel Navigation */}
              <button
                onClick={prevLeftImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-2 rounded-full shadow-md z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextLeftImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-2 rounded-full shadow-md z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {leftCarouselImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentLeftImage === index
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stats and Video */}
            <motion.div className="flex flex-col md:flex-row gap-6 mt-auto">
              {/* Stats */}
              <div className=" flex flex-col items-start justify-around gap-4 bg-amber-500 rounded-2xl p-6">
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-amber-700/50 p-3 rounded-full">
                    <CalendarDays className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 text-2xl font-bold">
                      <CountUp end={12} duration={3} />+
                    </h3>
                    <p className="text-amber-100 text-sm">
                      Years of Excellence
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="bg-amber-700/50 p-3 rounded-full">
                    <Users className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100">
                      <CountUp end={1500} duration={3} />+
                    </h3>
                    <p className="text-amber-100 text-sm">Happy Guests</p>
                  </div>
                </div>
              </div>

              {/* Video Button */}
              <motion.div
                className="flex-1 aspect-square relative rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={openVideo}
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  Watch Video Tour
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Full Height Gallery */}
          <div className="h-full">
            <motion.div
              className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={currentRightImage}
            >
              <img
                src={rightGalleryImages[currentRightImage]}
                alt="Featured property"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />

              {/* Gallery Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {rightGalleryImages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentRightImage === index
                        ? "bg-white w-4"
                        : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="Property Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurFeatured;
