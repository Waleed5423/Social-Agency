"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

const OurData = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 133, label: "Happy Clients" },
    { value: 7, label: "Hard Workers" },
    { value: 11, label: "Complete Projects" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      stats.forEach((stat, index) => {
        const duration = 2;
        const increment = stat.value / (duration * 60);

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }

          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 1000 / 60);
      });
    }
  }, [isInView]);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-white"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center place-items-center"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="p-6">
              <motion.div className="text-4xl sm:text-5xl font-bold text-white mb-3">
                {counters[index]}
                <span className="text-blue-300">+</span>
              </motion.div>
              <motion.p className="text-blue-100 text-lg font-medium">
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurData;
