"use client";

import React from "react";
import { motion,Variants } from "framer-motion";

const Terms = () => {
  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
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
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-3xl"
            >
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of
              TableTurn Media&apos;s (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) website and services
              (collectively, the &quot;Service&quot;). By accessing or using the Service,
              you agree to be bound by these Terms. If you disagree with any
              part of the terms, you may not access the Service.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Services
            </h2>
            <p>
              TableTurn Media provides digital marketing services specializing
              in Facebook and Instagram advertising for restaurants. Our
              services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Campaign strategy and setup</li>
              <li>Ad creation and optimization</li>
              <li>Performance tracking and reporting</li>
              <li>Consultation and account management</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Client Responsibilities
            </h2>
            <p>As a client, you agree to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Provide accurate and complete information about your business
              </li>
              <li>Grant us necessary access to your advertising accounts</li>
              <li>Make timely payments for services rendered</li>
              <li>Provide feedback and approvals in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Fees and Payment
            </h2>
            <p>
              Our fees are outlined in your service agreement. Payment terms are
              as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Monthly fees are due in advance of service</li>
              <li>Ad spend budgets must be funded prior to campaign launch</li>
              <li>Late payments may result in service suspension</li>
              <li>All fees are non-refundable except as required by law</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Cancellation Policy
            </h2>
            <p>
              You may cancel your service with TableTurn Media at any time with
              30 days written notice. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Any prepaid amounts for unused services will not be refunded
              </li>
              <li>
                Your campaigns will be paused or transferred at your request
              </li>
              <li>Final reports will be delivered within 10 business days</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Intellectual Property
            </h2>
            <p>
              All ad creatives, strategies, and reports developed by TableTurn
              Media remain our intellectual property until full payment is
              received. Upon full payment:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                You receive a license to use the deliverables for your business
              </li>
              <li>We retain the right to showcase work in our portfolio</li>
              <li>Third-party assets may have separate licensing terms</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              TableTurn Media shall not be liable for any indirect, incidental,
              special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Your access to or use of or inability to access or use the
                Service
              </li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Changes in platform algorithms or advertising policies</li>
              <li>Unforeseen business circumstances or market conditions</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              provide notice of material changes through our website or via
              email. Your continued use of the Service after such changes
              constitutes your acceptance of the new Terms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New York, without regard to its conflict
              of law provisions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              TableTurn Media
              <br />
              123 Business Street
              <br />
              New York, NY 10001
              <br />
              Email: legal@tableturnmedia.com
              <br />
              Phone: (555) 123-4567
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;
