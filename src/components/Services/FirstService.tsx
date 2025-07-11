"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
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
import Link from "next/link";
import img2 from "@/assets/Ill8.svg";

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

  const testimonials = [
    "Increased our reservations by 40% in just 2 weeks!",
    "Best ROI we've ever had from marketing",
    "Finally found an agency that understands restaurants",
    "Our Friday nights are now fully booked",
    "Worth every penny - the ads pay for themselves",
    "Customer quality is so much better than other ads we've tried",
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
      <section className="relative bg-gradient-to-br min-h-[85vh] from-blue-600 to-blue-500 text-white py-10 px-5 sm:px-6 lg:px-8 grid place-items-center">
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
                className="text-4xl sm:text-5xl font-bold leading-tight"
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
                <Link href="/GetStarted">
                  <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2">
                    Book Your Free Strategy Call{" "}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
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
            className=" rounded-xl"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
              <Image
                src={img2} // Update with your image path
                alt="Restaurant advertising demonstration"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                quality={90}
              />
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
              <Link href="/GetStarted">
              <button className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors">
                Book Your Free Strategy Call
              </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-400"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              TRUSTED BY RESTAURANTS NATIONWIDE
            </span>
          </div>
        </div>

        <div className="mt-8">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <span
                  key={index}
                  className="inline-block mx-8 text-blue-600 font-medium text-xl"
                >
                  {testimonial}
                  <span className="mx-4 text-blue-400">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FirstService;
