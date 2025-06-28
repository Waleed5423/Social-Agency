"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, BarChart2, Users, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import aboutHero from "@/assets/Ill6.svg";
import teamImage from "@/assets/Ill6.svg";
import img2 from "@/assets/Ill7.svg";
import Link from "next/link";

const About = () => {
  const differentiators = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Hyper-local targeting",
      description: "We reach people in your area most likely to order",
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
      title: "ROI-focused ads",
      description: "No fluff, just measurable results that grow your business",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Hands-on service",
      description: "We act like your in-house marketing team",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Transparent reporting",
      description: "Simple reports showing exactly what you're getting",
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
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
            <div className="space-y-6 ">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-bold leading-tight"
              >
                Fighting for Independent Restaurants
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-blue-100"
              >
                We&lsquo;re on a mission to help restaurants take back control
                from third-party platforms
              </motion.p>
            </div>
            <motion.div variants={itemVariants} className="relative ">
              <Image
                src={aboutHero}
                alt="Restaurant owners discussing strategy"
                className="w-100 h-90"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-15 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700">
              <p>
                We started TableTurn Media after watching too many local
                restaurants get squeezed by third-party delivery apps. These
                platforms take up to 30% in fees, control the customer data, and
                keep loyal diners locked into their system — not yours.
              </p>
              <p>
                Restaurants deserve better. So we built TableTurn Media to give
                owners back control. Scale your business to where delivery apps
                are an additional source of income, not the breadwinner.
              </p>
              <p>
                We use Meta (Facebook & Instagram) ads to drive real customers
                directly to your front door, phone, or website — no middlemen,
                no 30% cut. Just real marketing that grows your bottom line.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className=" p-8 rounded-xl">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
              <Image
                src={img2} // Update with your actual image path
                alt="TableTurn Media founders"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                quality={90}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="bg-blue-50 py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto mb-12"
            >
              We exist to help independent restaurants cut through the noise,
              reach more locals, and increase their daily orders — all while
              keeping their margins intact.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            >
              We&lsquo;re not a generic ad agency. We&lsquo;re a local growth
              partner focused on one thing: turning tables and boosting revenue
              using smart, targeted advertising.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
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
            Why We&apos;re Different
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="bg-blue-600 text-white py-10 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Meet Our Restaurant Growth Team
              </h2>
              <div className="space-y-6 text-blue-100">
                <p>
                  We&lsquo;re a team of former restaurant marketers, ad
                  specialists, and local business advocates who understand what
                  really moves the needle for independent eateries.
                </p>
                <p>
                  Every client gets a dedicated account manager who learns your
                  business inside out and becomes an extension of your team.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative flex items-center justify-center"
            >
              <Image
                src={teamImage}
                alt="TableTurn Media team"
                className="w-90 h-90"
              />
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
              Ready to Take Back Control?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s build ads that drive real customers to your restaurant
              - not a delivery app.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/GetStarted">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-colors flex items-center gap-2 mx-auto">
                  Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
