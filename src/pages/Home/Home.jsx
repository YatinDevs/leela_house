import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurFeatured from "./OurFeatured";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurFeatured />
      <Gallery />
    </div>
  );
}

export default Home;
