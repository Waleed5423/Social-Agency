"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PricingPlan = () => {
  const router = useRouter();
  const [currentPlan, setCurrentPlan] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const plans = [
    {
      name: "Starter",
      price: 299,
      description: "For restaurants testing ads for the first time",
      features: [
        "1 ad campaign per month",
        "Facebook & Instagram ad setup",
        "Radius-based local targeting",
        "1 custom graphic provided",
        "Weekly performance check-ins",
        "Clear ad spend recommendations",
        "Ad spend not included ($150–300/month suggested)",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: 499,
      description: "For restaurants looking for consistent customer flow",
      features: [
        "Up to 2 campaigns per month",
        "Custom audience targeting and retargeting",
        "2–3 branded graphics monthly",
        "Full ad management via Meta Ads Manager",
        "Bi-weekly performance reporting",
        "Basic Google Business listing review",
        "Call-to-action setup",
        "Ad spend not included ($300–600/month suggested)",
      ],
      popular: true,
    },
    {
      name: "Scale",
      price: 899,
      description: "For multi-location restaurants or aggressive growth goals",
      features: [
        "Unlimited campaigns and offer rotations",
        "Advanced audience segmentation",
        "Up to 5 branded graphics per month",
        "Conversion-focused strategy",
        "Detailed monthly reporting + strategy call",
        "Optional funnel advice",
        "Ad spend not included (flexible budget)",
      ],
      popular: false,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sliderVariants: Variants = {
    enter: (direction: string) => {
      return {
        x: direction === "right" ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: string) => {
      return {
        x: direction === "right" ? -300 : 300,
        opacity: 0,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const nextPlan = () => {
    setDirection("right");
    setCurrentPlan((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const prevPlan = () => {
    setDirection("left");
    setCurrentPlan((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleGetStarted = (planName: string) => {
    const price = plans.find((p) => p.name === planName)?.price;
    router.push(
      `/Plans-Form?plan=${encodeURIComponent(planName)}&price=${price}`
    );
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative blue elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-14 px-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Pay as you grow with no hidden fees. Get started risk-free.
          </motion.p>
        </motion.div>

        {/* Desktop Grid View - Adjusted for better responsiveness */}
        <motion.div
          className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl border-2 overflow-hidden transition-all flex flex-col h-full ${
                plan.popular
                  ? "border-blue-500 shadow-xl"
                  : "border-gray-200 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500">/mo</span>
                </div>

                <button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full py-3 rounded-lg font-medium mb-6 transition-colors ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative overflow-hidden h-[650px] mx-4">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentPlan}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`absolute inset-x-0 p-6 rounded-xl border-2 ${
                plans[currentPlan].popular
                  ? "border-blue-500 shadow-xl"
                  : "border-gray-200 shadow-md"
              } bg-white h-[600px]`}
            >
              {plans[currentPlan].popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-4 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {plans[currentPlan].name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plans[currentPlan].description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plans[currentPlan].price}
                  </span>
                  <span className="text-gray-500">/mo</span>
                </div>

                <button
                  onClick={() => handleGetStarted(plans[currentPlan].name)}
                  className={`w-full py-3 rounded-lg font-medium mb-6 transition-colors ${
                    plans[currentPlan].popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3 flex-grow overflow-y-auto">
                  {plans[currentPlan].features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevPlan}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600" />
          </button>
          <button
            onClick={nextPlan}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            aria-label="Next plan"
          >
            <ChevronRight className="w-5 h-5 text-blue-600" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentPlan ? "right" : "left");
                  setCurrentPlan(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPlan ? "bg-blue-600" : "bg-blue-200"
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16 bg-blue-50 rounded-xl p-6 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-3">
            Need something custom?
          </h3>
          <p className="text-gray-600 mb-4">
            We offer tailored solutions for multi-location restaurants and
            franchises.
          </p>
          <Link href="/contact">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium shadow-md border border-blue-200 transition-colors">
              Contact Sales
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlan;
