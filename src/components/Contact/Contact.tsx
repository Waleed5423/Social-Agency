"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  CheckCircle,
  XCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Initialize EmailJS with your public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_NEW!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_NEW!,
        {
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          phone_number: formData.phone,
          message: formData.message,
          date_time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_NEW!
      );

      toast.success("Message sent successfully!", {
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        description: "We will get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error); // Added error logging
      toast.error("Failed to send message", {
        icon: <XCircle className="w-5 h-5 text-red-500" />,
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Toaster position="top-center" richColors />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-500 text-white py-28 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
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
              Let&apos;s Grow Your Restaurant
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-2xl mx-auto"
            >
              Get in touch with our team to discuss how we can help you attract
              more customers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="py-20 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Send Us a Message
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  How Can We Help? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Have questions about our services or ready to get started? Reach
                out through any of these channels.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <a
                    href="tel:6475370690"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    647-537-0690
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri, 9am-5pm EST
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <a
                    href="mailto:info@tableturnmedia.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    info@tableturnmedia.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Typically reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Office</h3>
                  <p className="text-gray-600">123 Restaurant Row</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <Clock className="inline w-4 h-4 mr-1" />
                    By appointment only
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: Facebook,
                    name: "Facebook",
                    color: "hover:bg-blue-700",
                  },
                  { icon: Twitter, name: "Twitter", color: "hover:bg-sky-500" },
                  {
                    icon: Instagram,
                    name: "Instagram",
                    color: "hover:bg-pink-600",
                  },
                  {
                    icon: Linkedin,
                    name: "LinkedIn",
                    color: "hover:bg-blue-800",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`bg-blue-600 ${social.color} text-white p-3 rounded-full transition-colors`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      {isMounted && (
        <section className="bg-gray-100 py-12 px-5 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-300 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.9878449245375!3d40.74844097138939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMDkuOSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-[400px]"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ CTA */}
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
              Have Questions?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Check out our FAQ or contact us directly for more information.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
                View FAQs
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-lg font-medium border border-gray-300 shadow-sm transition-colors">
                Live Chat
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
