"use client";

import React, { useState } from "react";
import { motion, AnimatePresence,Variants  } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const PricingPlan = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [currentPlan, setCurrentPlan] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 499,
      yearlyPrice: 449,
      description: "Perfect for small restaurants getting started with ads",
      features: [
        "1 Campaign Setup",
        "Local Targeting",
        "Basic Ad Creatives",
        "Weekly Optimization",
        "Monthly Reporting",
      ],
      popular: false,
    },
    {
      name: "Growth",
      monthlyPrice: 999,
      yearlyPrice: 899,
      description: "For growing restaurants needing more visibility",
      features: [
        "3 Campaign Setups",
        "Advanced Local Targeting",
        "Custom Ad Creatives",
        "Daily Optimization",
        "Weekly Reporting",
        "Offer Strategy",
      ],
      popular: true,
    },
    {
      name: "Premium",
      monthlyPrice: 1999,
      yearlyPrice: 1799,
      description: "Complete solution for high-volume restaurants",
      features: [
        "Unlimited Campaigns",
        "Hyper-Local Targeting",
        "Premium Ad Creatives",
        "24/7 Monitoring",
        "Daily Reporting",
        "Full Funnel Strategy",
        "Dedicated Account Manager",
      ],
      popular: false,
    },
  ];

  // Animation variants
  const containerVariants:Variants   = {
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

  const sliderVariants:Variants = {
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

  return (
    <section className="relative bg-white py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative blue elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
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

          {/* Billing toggle */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center mt-8"
          >
            <div className="bg-blue-50 p-1 rounded-full inline-flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "yearly"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-600"
                }`}
              >
                Yearly (Save 10%)
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
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
              className={`relative rounded-xl border-2 overflow-hidden transition-all ${
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

              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    $
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-500">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                  {billingCycle === "yearly" && (
                    <div className="text-green-600 text-sm mt-1">
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice}
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium mb-6 transition-colors ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3">
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
        <div className="md:hidden relative overflow-hidden h-[600px]">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentPlan}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`absolute inset-x-4 p-6 rounded-xl border-2 ${
                plans[currentPlan].popular
                  ? "border-blue-500 shadow-xl"
                  : "border-gray-200 shadow-md"
              } bg-white`}
            >
              {plans[currentPlan].popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-4">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {plans[currentPlan].name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plans[currentPlan].description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    $
                    {billingCycle === "monthly"
                      ? plans[currentPlan].monthlyPrice
                      : plans[currentPlan].yearlyPrice}
                  </span>
                  <span className="text-gray-500">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                  {billingCycle === "yearly" && (
                    <div className="text-green-600 text-sm mt-1">
                      Save $
                      {plans[currentPlan].monthlyPrice * 12 -
                        plans[currentPlan].yearlyPrice}
                    </div>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium mb-6 transition-colors ${
                    plans[currentPlan].popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-blue-100 hover:bg-blue-200 text-blue-600"
                  }`}
                >
                  Get Started
                </button>

                <ul className="space-y-3">
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
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium shadow-md border border-blue-200 transition-colors">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlan;
