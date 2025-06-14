"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Calendar,
  Phone,
  ClipboardCheck,
  Users,
  ArrowRight,
  CheckCircle,
  Mail,
} from "lucide-react";

const Started = () => {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      title: "Book Your Free Consultation",
      description:
        "Schedule a 30-minute call with our restaurant marketing specialist",
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Strategy Session",
      description:
        "We'll analyze your current marketing and identify growth opportunities",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      title: "Custom Plan",
      description:
        "Receive a tailored marketing proposal designed for your restaurant",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Launch & Grow",
      description:
        "We implement your campaign while you focus on running your business",
    },
  ];

  const benefits = [
    "No upfront costs - pay only when you're ready to start",
    "30-day results guarantee",
    "Dedicated account manager",
    "Transparent monthly reporting",
    "Cancel anytime - no long-term contracts",
  ];

  // Animation variants
  const containerVariants:Variants= {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-28 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Ready to Grow Your Restaurant?
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-8"
            >
              Get started with performance-driven marketing in just 4 simple
              steps.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2 mx-auto">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
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
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded-full mb-5 mx-auto">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Why Restaurants Love Working With Us
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
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Schedule Your Free Consultation
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Restaurant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@yourrestaurant.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              Still Have Questions?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Contact us directly and we&apos;ll be happy to discuss how we can help
              your restaurant grow.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2">
                Call Us Now <Phone className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-full text-lg font-medium border border-gray-300 shadow-sm transition-colors flex items-center gap-2">
                Email Us <Mail className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Started;
