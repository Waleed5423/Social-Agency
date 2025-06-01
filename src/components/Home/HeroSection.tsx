"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Welcome to Innovation",
      subtitle: "Discover Amazing Possibilities",
      content:
        "Experience the future of technology with our cutting-edge solutions that transform the way you work and live.",
      gradient: "bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600",
    },
    {
      id: 2,
      title: "Unleash Your Potential",
      subtitle: "Rise Above Expectations",
      content:
        "Elevate your business to new heights with our comprehensive suite of tools designed for modern enterprises.",
      gradient: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Transform Your Vision",
      subtitle: "From Dreams to Reality",
      content:
        "Turn your boldest ideas into reality with our innovative platform that empowers creators and entrepreneurs.",
      gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
    },
    {
      id: 4,
      title: "Shape Tomorrow",
      subtitle: "Leading the Digital Revolution",
      content:
        "Join millions of users who trust our platform to deliver exceptional results and drive meaningful change.",
      gradient: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
    },
  ];

  const getSlideVariants = (slideIndex: number) => {
    const patterns = [
      {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      },
      // Bottom to top
      {
        initial: { y: "100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "-100%", opacity: 0 },
      },
      // Top to bottom
      {
        initial: { y: "-100%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: "100%", opacity: 0 },
      },
      // Right to left
      {
        initial: { x: "100%", opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
      },
    ];

    return patterns[slideIndex % 4];
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[calc(94vh-4rem)] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 flex items-center justify-center ${slides[currentSlide].gradient}`}
          variants={getSlideVariants(currentSlide)}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="w-full h-full flex">
            {/* Left Content */}
            <div className="w-2/3 flex flex-col justify-center text-white px-12 lg:px-25">
              <motion.h1
                className="text-2xl md:text-2xl lg:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-light mb-8 opacity-90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg lg:text-xl leading-relaxed opacity-80 mb-12 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {slides[currentSlide].content}
              </motion.p>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            </div>

            {/* Right Side - Empty space for SVG */}
            <div className="w-1/2 flex items-center justify-center">
              {/* SVG content will go here */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Animation Pattern Indicator */}
      <div className="absolute top-8 left-8 text-white  bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm">
        <span className="text-sm font-medium">
          {currentSlide === 0}
          {currentSlide === 1}
          {currentSlide === 2}
          {currentSlide === 3}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
