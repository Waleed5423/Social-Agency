"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/Ill3.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400 h-[85vh]">
      {/* Content Container */}
      <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text Content */}
          <div className="space-y-4 text-center lg:text-left text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-bold leading-snug"
            >
              We Help Scale Your Restaurant and Increase Customers with Paid Ads
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-blue-100 max-w-md mx-auto lg:mx-0"
            >
              Boost your takeout, dine-in, and pickup sales with smart, local
              Facebook & Instagram campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-3 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition-colors"
              >
                Book a Free Consultation Call
              </motion.button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-xl overflow-hidden">
              <Image
                src={img1}
                alt="Restaurant marketing illustration"
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute inset-0 overflow-hidden z-0"
      >
        {/* Top Left Circle */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/80"></div>

        {/* Top Right Circle */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/40"></div>

        {/* Bottom Left Circle */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/50"></div>

        {/* Bottom Right Circle */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
      </motion.div>

      {/* Background fade animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 z-[-1]"
      />
    </section>
  );
};

export default HeroSection;
