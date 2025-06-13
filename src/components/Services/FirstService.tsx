"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  MapPin,
  Gift,
  BarChart2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import serviceImage from "@/assets/Ill5.svg";

const FirstService = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Facebook & Instagram Ads",
      description:
        "High-converting ad campaigns designed specifically for restaurants",
    },
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Local Targeting Strategy",
      description: "Reach hungry customers within 5 miles of your location",
    },
    {
      icon: <Gift className="w-8 h-8 text-blue-600" />,
      title: "Offer & Campaign Creation",
      description: "Irresistible promotions that drive immediate action",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "Ad Reporting & Sales Tracking",
      description: "Clear metrics showing exactly how your ads perform",
    },
  ];

  const benefits = [
    "No long-term contracts - cancel anytime",
    "Average 3-5x return on ad spend",
    "Dedicated restaurant marketing experts",
    "Custom creative tailored to your brand",
    "Weekly performance reports",
    "24/7 campaign monitoring",
  ];

  // Animation variants
  const containerVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-4xl font-bold leading-tight"
              >
                Restaurant Advertising That Actually Works
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-blue-100"
              >
                We specialize in simple, profitable ad campaigns that bring real
                customers through your doors.
              </motion.p>
              <motion.div variants={itemVariants}>
                <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2">
                  Book Your Free Strategy Call{" "}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center items-center"
            >
              <Image
                src={serviceImage}
                alt="Restaurant digital marketing"
                className="w-90 h-90"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Our Restaurant Advertising Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="bg-blue-50 py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16"
            >
              How Our Process Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Strategy Session",
                  description:
                    "We'll analyze your restaurant and create a custom ad plan",
                },
                {
                  title: "2. Campaign Setup",
                  description:
                    "Our team builds and launches your high-converting ads",
                },
                {
                  title: "3. Growth & Scaling",
                  description: "We optimize and expand what's working",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Our Restaurant Advertising
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-8 rounded-xl"
          >
            <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-lg overflow-hidden">
              {/* Placeholder for video or image */}
              <div className="w-full h-64 bg-blue-200 flex items-center justify-center">
                <span className="text-blue-600 font-medium">
                  Video Walkthrough
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Ready to Fill Your Restaurant?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Get more customers through your doors with ads that actually
              convert.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors">
                Book Your Free Strategy Call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FirstService;
