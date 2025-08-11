"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  // MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo2.png";

const FunctionalSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Sidebar slide animation variants
  const sidebarVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
        delay: 0.1,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
        delay: 0.2,
      },
    },
  };

  const overlayVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
        delay: 0.3,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
      },
    },
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 80,
          delay: 0.1,
        }}
        className="hidden md:block bg-gradient-to-br from-blue-600 to-blue-500 text-white px-4 py-0.5"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-6 gap-y-2 text-sm">
          {/* Contact Info - Always in line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="tel:6475370690"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors whitespace-nowrap"
            >
              <Phone size={18} className="text-blue-200" />
              <span className="font-medium">647 537 0690</span>
            </a>
            <a
              href="mailto:info@domain.com"
              className="flex items-center gap-2 hover:text-blue-100 transition-colors whitespace-nowrap"
            >
              <Mail size={18} className="text-blue-200" />
              <span className="font-medium">info@domain.com</span>
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md transition-all group whitespace-nowrap">
              <Globe
                size={16}
                className="text-blue-200 group-hover:text-white"
              />
              <span className="font-medium">EN</span>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 80,
          delay: 0.2,
        }}
        className="bg-white shadow-lg sticky top-0 w-full z-40"
      >
        {/* Desktop Top Navigation Bar */}
        <motion.div
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 80,
            delay: 0.1,
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <motion.div className="" transition={{ duration: 0.6 }}>
                    <Link href="/">
                      <Image
                        src={logo}
                        alt="Agency Logo"
                        width={160}
                        className=""
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.h4
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/">HOME</Link>
              </motion.h4>
              <motion.h4
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/OurServices">SERVICES</Link>
              </motion.h4>
              <motion.h4
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/About">ABOUT US</Link>
              </motion.h4>
              {/* <motion.h4
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/Testimonials">TESTIMONIALS</Link>
              </motion.h4> */}
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-md"
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/GetStarted">GET STARTED</Link>
              </motion.button>
            </div>

            {/* Desktop Hamburger Menu (top-right) */}
            <div className="hidden md:block">
              <motion.button
                onClick={toggleSidebar}
                className="p-2 cursor-pointer text-blue-600 border-blue-600 border-2 rounded-full transition-colors focus:outline-none"
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 50 }}
                aria-label="Open sidebar menu"
              >
                <Menu size={24} />
              </motion.button>
            </div>

            {/* Mobile Hamburger Menu (in navbar) */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleSidebar}
                className="p-2 cursor-pointer text-blue-600 hover:bg-blue-50 rounded-full transition-colors focus:outline-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                aria-label="Open sidebar menu"
              >
                <Menu size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Sidebar Overlay and Content */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              className="fixed inset-0 z-50"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
              onClick={closeSidebar}
            />

            {/* Sidebar */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed right-0 top-0 h-full w-80 max-w-sm bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <motion.div
                className="flex flex-col h-full"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {/* Sidebar Header */}
                <motion.div
                  className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50"
                  variants={itemVariants}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div className="" transition={{ duration: 0.6 }}>
                      <Link href="/" onClick={closeSidebar}>
                        <Image
                          src={logo}
                          alt="Agency Logo"
                          width={200}
                          className=""
                        />
                      </Link>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    aria-label="Close sidebar"
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>

                {/* Sidebar Content */}
                <div className="flex-1 p-6 space-y-8">
                  {/* Navigation Links - Only show on mobile */}
                  {isMobile && (
                    <motion.nav className="space-y-2" variants={itemVariants}>
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Navigation
                      </h3>
                      <motion.div
                        whileHover={{ x: -10, backgroundColor: "#eff6ff" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                        >
                          Home
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -10, backgroundColor: "#eff6ff" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/OurServices"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                        >
                          Services
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: -10, backgroundColor: "#eff6ff" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/About"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                        >
                          About Us
                        </Link>
                      </motion.div>
                      {/* <motion.div
                        whileHover={{ x: -10, backgroundColor: "#eff6ff" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/Testimonials"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                        >
                          Testimonials
                        </Link>
                      </motion.div> */}
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href="/GetStarted"
                          className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-md text-center"
                          onClick={closeSidebar}
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </motion.nav>
                  )}

                  {/* Contact Information */}
                  <motion.div
                    className="border-t border-gray-200 pt-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Contact Info
                    </h3>
                    <div className="space-y-4">
                      {/* Address */}
                      {/* <motion.div
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ x: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <MapPin
                          size={20}
                          className="text-blue-600 mt-0.5 flex-shrink-0"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            Address
                          </p>
                          <p className="text-sm text-gray-600">
                            123 Business Street
                            <br />
                            Suite 100
                            <br />
                            New York, NY 10001
                          </p>
                        </div>
                      </motion.div> */}

                      {/* Phone */}
                      <motion.div
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ x: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Phone
                          size={20}
                          className="text-blue-600 flex-shrink-0"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            Phone
                          </p>
                          <motion.a
                            href="tel:6475370690"
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            647 537 0690
                          </motion.a>
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        whileHover={{ x: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Mail
                          size={20}
                          className="text-blue-600 flex-shrink-0"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-800">
                            Email
                          </p>
                          <motion.a
                            href="mailto:info@domain.com"
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            info@domain.com
                          </motion.a>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Social Media Links */}
                  <motion.div
                    className="border-t border-gray-200 pt-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Follow Us
                    </h3>
                    <div className="flex space-x-3">
                      {[

                        {
                          icon: Twitter,
                          label: "Twitter",
                          color: "hover:text-sky-500",
                          href: "https://twitter.com/tableturn_media", // Replace with your Twitter URL
                        },
                        {
                          icon: Instagram,
                          label: "Instagram",
                          color: "hover:text-pink-600",
                          href: "https://www.instagram.com/tableturn_media?igsh=a2VqaGowam84a3lu&utm_source=qr", // Added your Instagram link
                        },
                        {
                          icon: Linkedin,
                          label: "LinkedIn",
                          color: "hover:text-blue-700",
                          href: "https://www.linkedin.com/company/tableturn-mediaq", // Replace with your LinkedIn URL
                        },
                      ].map(({ icon: Icon, label, color, href }) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 text-gray-600 ${color} hover:bg-gray-50 rounded-xl transition-colors shadow-sm border border-gray-200`}
                          whileHover={{
                            scale: 1.1,
                            y: -5,
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          aria-label={label}
                        >
                          <Icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FunctionalSidebar;
