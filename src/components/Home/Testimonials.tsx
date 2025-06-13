"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TableTurn Media doubled our takeout orders in just 2 months! Their targeted ads brought in exactly the right customers.",
      author: "Sarah Johnson",
      role: "Owner, The Rustic Spoon",
      rating: 5
    },
    {
      quote: "After struggling with ads for years, these guys finally cracked the code for our restaurant. Our weekends are now fully booked!",
      author: "Michael Chen",
      role: "Manager, Bella Napoli",
      rating: 5
    },
    {
      quote: "The team understands restaurant marketing like no one else. We've seen a 40% increase in revenue since working with them.",
      author: "David Rodriguez",
      role: "CEO, Taco Fiesta Chain",
      rating: 5
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-blue-50 py-16 px-5 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-100"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
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
            What Our Clients Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don&apos;t just take our word for it - hear from restaurant owners who&apos;ve seen real results
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-6 text-blue-400">
                <Quote className="w-8 h-8" />
              </div>
              
              <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
              
              <div className="flex items-center">
                <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm font-medium shadow-md transition-colors">
            Read More Success Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;