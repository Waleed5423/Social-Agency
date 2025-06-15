"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote:
        "TableTurn Media doubled our takeout orders in just 2 months! Their targeted ads brought in exactly the right customers.",
      author: "Sarah Johnson",
      role: "Owner, The Rustic Spoon",
      rating: 5,
    },
    {
      quote:
        "After struggling with ads for years, these guys finally cracked the code for our restaurant. Our weekends are now fully booked!",
      author: "Michael Chen",
      role: "Manager, Bella Napoli",
      rating: 5,
    },
    {
      quote:
        "The team understands restaurant marketing like no one else. We've seen a 40% increase in revenue since working with them.",
      author: "David Rodriguez",
      role: "CEO, Taco Fiesta Chain",
      rating: 5,
    },
    {
      quote:
        "Outstanding results! Our daily orders increased by 60% and customer retention improved dramatically. Highly recommend!",
      author: "Emma Thompson",
      role: "Owner, Coastal Cafe",
      rating: 5,
    },
    {
      quote:
        "Professional team that delivers on promises. Our social media engagement skyrocketed and so did our profits.",
      author: "James Wilson",
      role: "Manager, Urban Grill",
      rating: 5,
    },
    {
      quote:
        "Best investment we made for our restaurant. ROI was visible within weeks and continues to grow month after month.",
      author: "Lisa Park",
      role: "CEO, Fusion Delights",
      rating: 5,
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideVariants: Variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="relative bg-blue-50 py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it - hear from restaurant owners
            who&apos;ve seen real results
          </motion.p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          {/* Testimonial Cards */}
          <div className="relative min-h-80 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div
                  className={`grid gap-6 h-full ${
                    isMobile ? "grid-cols-1" : "grid-cols-3"
                  }`}
                >
                  {testimonials
                    .slice(
                      currentIndex * itemsPerSlide,
                      (currentIndex + 1) * itemsPerSlide
                    )
                    .map((testimonial, index) => (
                      <div
                        key={currentIndex * itemsPerSlide + index}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="mb-4 text-blue-400">
                            <Quote className="w-6 h-6" />
                          </div>

                          <p className="text-gray-700 italic mb-6 text-sm leading-relaxed">
                            &quot;{testimonial.quote}&quot;
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                              {testimonial.author.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">
                                {testimonial.author}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link href="/Testimonials">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium shadow-md transition-colors">
            Read More Success Stories
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
