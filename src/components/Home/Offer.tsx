"use client";

import React from "react";
import { motion,Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Offer = () => {
  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const services = [
    {
      title: "Full Campaign Setup",
      description:
        "We handle everything inside Meta Ads Manager — no tech headaches for you.",
    },
    {
      title: "Local Targeting",
      description:
        "We only show your ads to hungry customers within a few kilometers of your location — the people most likely to walk in or order.",
    },
    {
      title: "Offer Strategy & Creative",
      description:
        "We help you build compelling promos (like '2-for-1 Wraps' or 'Free Fries with Any Order') that drive action.",
    },
    {
      title: "Ad Copy & Design",
      description:
        "We write scroll-stopping captions and design high-converting image/video creatives.",
    },
    {
      title: "Daily Optimization",
      description:
        "We monitor your ads and tweak them to keep costs low and results high.",
    },
    {
      title: "Simple Reporting",
      description:
        "You get clear, easy-to-read updates showing how many people clicked, called, messaged, or walked in.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-14"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            What We Offer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Comprehensive restaurant marketing services designed to fill your
            tables and boost takeout orders.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-400/20 p-2 rounded-full">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-50">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-16">
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full text-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
