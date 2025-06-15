"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "TableTurn Media doubled our takeout orders in just 2 months! Their targeted ads brought in exactly the right customers.",
      author: "Sarah Johnson",
      role: "Owner, The Rustic Spoon",
      rating: 5,
      date: "2 days ago",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    },
    {
      quote:
        "After struggling with ads for years, these guys finally cracked the code for our restaurant. Our weekends are now fully booked!",
      author: "Michael Chen",
      role: "Manager, Bella Napoli",
      rating: 5,
      date: "1 week ago",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
    },
    {
      quote:
        "The team understands restaurant marketing like no one else. We've seen a 40% increase in revenue since working with them.",
      author: "David Rodriguez",
      role: "CEO, Taco Fiesta Chain",
      rating: 5,
      date: "2 weeks ago",
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
    },
    {
      quote:
        "Outstanding results! Our daily orders increased by 60% and customer retention improved dramatically. Highly recommend!",
      author: "Emma Thompson",
      role: "Owner, Coastal Cafe",
      rating: 5,
      date: "3 weeks ago",
      timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000), // 3 weeks ago
    },
    {
      quote:
        "Professional team that delivers on promises. Our social media engagement skyrocketed and so did our profits.",
      author: "James Wilson",
      role: "Manager, Urban Grill",
      rating: 5,
      date: "1 month ago",
      timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1 month ago
    },
    {
      quote:
        "Best investment we made for our restaurant. ROI was visible within weeks and continues to grow month after month.",
      author: "Lisa Park",
      role: "CEO, Fusion Delights",
      rating: 5,
      date: "2 months ago",
      timestamp: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000), // 2 months ago
    },
    {
      quote:
        "We went from empty tables to waitlists thanks to TableTurn's strategic campaigns. The team is responsive and results-driven.",
      author: "Robert Garcia",
      role: "Owner, Tapas Lounge",
      rating: 5,
      date: "2 months ago",
      timestamp: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000), // ~2 months ago
    },
    {
      quote:
        "Our catering business tripled after implementing their marketing strategy. They truly understand the food industry.",
      author: "Jennifer Lee",
      role: "Director, Savory Events",
      rating: 5,
      date: "3 months ago",
      timestamp: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000), // 3 months ago
    },
    {
      quote:
        "The analytics provided are incredibly detailed. We can see exactly which ads are driving the most profitable customers.",
      author: "Thomas Wright",
      role: "Manager, The Steakhouse",
      rating: 5,
      date: "4 months ago",
      timestamp: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000), // 4 months ago
    },
  ];

  // Filter options
  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Last 2 days", value: "2days" },
    { label: "Last week", value: "1week" },
    { label: "Recent (Last month)", value: "1month" },
    { label: "Older (1+ months)", value: "older" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const now = new Date();
    const diffTime = now.getTime() - testimonial.timestamp.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    switch (activeFilter) {
      case "2days":
        return diffDays <= 2;
      case "1week":
        return diffDays <= 7;
      case "1month":
        return diffDays <= 30;
      case "older":
        return diffDays > 30;
      default:
        return true;
    }
  });

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
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20 px-5 sm:px-6 lg:px-8">
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
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              Real Results From Real Restaurants
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Don&apos;t just take our word for it - see what our clients have
              to say about working with TableTurn Media.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8"
          >
            Client Success Stories
          </motion.h2>

          {/* Filter buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === option.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-4 text-blue-400">
                  <Quote className="w-6 h-6" />
                </div>

                <p className="text-gray-700 italic mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {testimonial.date}
                  </span>
                </div>

                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <motion.p
              variants={itemVariants}
              className="text-center text-gray-500 py-12"
            >
              No testimonials match the selected filter.
            </motion.p>
          )}
        </motion.div>
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
              Ready to See Similar Results?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can help your restaurant grow.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/GetStarted">
                <button className="bg-white hover:bg-gray-100 text-blue-500 px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2 mx-auto">
                  Book Your Free Strategy Call{" "}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
