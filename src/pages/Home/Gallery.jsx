import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const GallerySection = () => {
  // Dummy gallery data with Unsplash images
  const outdoorImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
      alt: "Farmhouse Exterior",
      category: "Outdoor",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Garden View",
      category: "Outdoor",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Swimming Pool",
      category: "Outdoor",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Outdoor Dining",
      category: "Outdoor",
    },
  ];

  const indoorImages = [
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxury Bedroom",
      category: "Indoor",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Living Area",
      category: "Indoor",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      alt: "Dining Room",
      category: "Indoor",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      alt: "Cozy Fireplace",
      category: "Indoor",
    },
  ];

  const outdoorRef = useRef(null);
  const indoorRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play for outdoor gallery (normal direction)
  useEffect(() => {
    if (!isAutoPlaying || !outdoorRef.current) return;

    const interval = setInterval(() => {
      if (outdoorRef.current) {
        outdoorRef.current.scrollBy({
          left: 600,
          behavior: "smooth",
        });

        if (
          outdoorRef.current.scrollLeft + outdoorRef.current.clientWidth >=
          outdoorRef.current.scrollWidth - 100
        ) {
          setTimeout(() => {
            outdoorRef.current.scrollTo({ left: 0, behavior: "smooth" });
          }, 1000);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-play for indoor gallery (reverse direction)
  useEffect(() => {
    if (!isAutoPlaying || !indoorRef.current) return;

    const interval = setInterval(() => {
      if (indoorRef.current) {
        indoorRef.current.scrollBy({
          left: -600,
          behavior: "smooth",
        });

        if (indoorRef.current.scrollLeft <= 100) {
          setTimeout(() => {
            indoorRef.current.scrollTo({
              left: indoorRef.current.scrollWidth,
              behavior: "smooth",
            });
          }, 1000);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setIsAutoPlaying(false);
      setTimeout(() => setIsAutoPlaying(true), 5000);
    }
  };

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Outdoor Gallery Carousel */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Outdoor Spaces
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-amber-600 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="relative">
            <button
              onClick={() => scrollCarousel(outdoorRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollCarousel(outdoorRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={outdoorRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {outdoorImages.map((image) => (
                <div
                  key={image.id}
                  className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indoor Gallery Carousel */}
        <div className="mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Indoor Comforts
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-amber-600 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          />

          <div className="relative">
            <button
              onClick={() => scrollCarousel(indoorRef, "left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scrollCarousel(indoorRef, "right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={indoorRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {indoorImages.map((image) => (
                <div
                  key={image.id}
                  className="min-w-[300px] sm:min-w-[400px] flex-shrink-0"
                >
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative h-64 sm:h-80">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-white font-bold text-lg">
                            {image.alt}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {image.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-amber-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Experience Farmhouse Living
              </motion.h2>
              <motion.p
                className="text-white/90 mb-8 text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Book your stay today and immerse yourself in rustic luxury.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
                >
                  Book Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold shadow-md transition-all"
                >
                  <Play className="w-4 h-4" />
                  Take a Tour
                </motion.button>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <motion.img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt="Farmhouse interior"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
