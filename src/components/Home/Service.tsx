"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/Ill4.svg";

const Services = () => {
  // Animation variants
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section className="bg-white pt-8 pb-20 px-5 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background circles */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      >
        {/* Top Right Circle */}
        <div className="absolute -top-10 -right-20 w-84 h-84 rounded-full bg-blue-700"></div>

        {/* Middle Left Circle */}
        <div className="absolute top-2/3 -left-20 w-80 h-80 rounded-full bg-blue-600/80"></div>

        {/* Bottom Center Circle */}
        <div className="absolute top-20 left-30 transform -translate-x-1/2 w-46 h-46 rounded-full bg-blue-600/70"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-blue-600"
            >
              Our Proven Approach
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-700">
              At TableTurn Media, we specialize in scaling local brands through
              high-performance Meta ad campaigns.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-700">
              With our proven strategy and hands-on management, we don&apos;t
              just run ads — we drive real business. Our guarantee? Once we take
              control of your ad campaigns, our team will increase your customer
              base and generate more revenue within a set time frame. Simple as
              that.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <button className="bg-blue-600 cursor-pointer  hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition-colors duration-300">
                Learn More About Our Process
              </button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <Image
                src={img1}
                alt="Marketing strategy illustration"
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Service Features */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Service 1 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-200"
            whileHover={{ y: -5 }}
            variants={itemVariants}
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Performance Ads
            </h3>
            <p className="text-gray-600">
              Data-driven campaigns optimized for maximum conversions and ROI.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-200"
            whileHover={{ y: -5 }}
            variants={itemVariants}
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Local Targeting
            </h3>
            <p className="text-gray-600">
              Precision targeting to reach hungry customers in your area.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-200"
            whileHover={{ y: -5 }}
            variants={itemVariants}
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Guaranteed Results
            </h3>
            <p className="text-gray-600">
              We deliver measurable growth or we&apos;ll make it right.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
