"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Star, Award, Clock, BarChart2, Users, Heart } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Proven Results",
      description:
        "We've helped restaurants increase revenue by 30-150% within the first 3 months.",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Industry Expertise",
      description:
        "10+ years specializing exclusively in restaurant marketing.",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Quick Setup",
      description: "Get your campaigns running in just 3-5 business days.",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Data-Driven",
      description: "Real-time optimization based on performance metrics.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Dedicated Team",
      description: "Your own account manager and creative team.",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "No Long Contracts",
      description: "Month-to-month service you can cancel anytime.",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative blue elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-50"></div>
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
            Why Our Clients Choose Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We deliver measurable results and exceptional service that keeps
            restaurants coming back
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16 bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-blue-600 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            We&apos;re happy to discuss how we can help your specific
            restaurant.
          </p>
          <Link href="/GetStarted">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition-colors">
              Schedule a Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
