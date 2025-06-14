import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-50 bg-amber-50 relative ">
      <div className="relative container mx-auto px-4 md:px-6">
        {/* Mobile Top Image (hidden on desktop) */}
        <motion.div
          className="block lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Leela Farmhouse exterior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-12">
          {/* Desktop Image (hidden on mobile) */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="z-10 w-full h-80 md:h-[700px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Leela Farmhouse exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
              Nestled in the picturesque countryside near Pune, Leela Farmhouse
              has been welcoming guests since 2010. What began as a family
              retreat has blossomed into a beloved destination for those seeking
              tranquility and authentic Maharashtrian hospitality.
            </p>
            <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base">
              Our 10-acre property combines modern comforts with rustic charm,
              offering a perfect blend of relaxation and adventure. From our
              organic farm-to-table dining to our curated local experiences,
              every detail reflects our passion for creating memorable moments.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Video CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a
                  href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                >
                  <div className="bg-white/20 p-1 sm:p-2 rounded-full">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium">Watch Our Story</span>
                </a>
              </motion.div>

              {/* Signature */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-amber-600">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    The Patil Family
                  </p>
                  <p className="text-xs sm:text-sm text-amber-600">
                    Founders, Leela Farmhouse
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Image */}
        <motion.div
          className="relative lg:absolute mx-auto lg:mx-0 mt-8 lg:mt-0 md:-bottom-40 lg:right-10 w-full lg:w-2/3 h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Leela Farmhouse interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
