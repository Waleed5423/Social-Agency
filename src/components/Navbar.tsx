"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

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
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
        delay: 0.1, // Starts slightly before overlay
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
        delay: 0.2, // Closes after overlay
      },
    },
  };

  const overlayVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1,
        delay: 0.3, // Starts after sidebar
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 1, // Faster close
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
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 80,
            delay: 0.1,
          }}
          className=" bg-gradient-to-br from-blue-600 to-blue-500 text-white px-4 py-0.5"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-x-6 gap-y-2 text-sm">
            {/* Contact Info - Always in line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="tel:0092155596"
                className="flex items-center gap-2 hover:text-blue-100 transition-colors whitespace-nowrap"
              >
                <Phone size={18} className="text-blue-200" />
                <span className="font-medium">009-215-5596</span>
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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  SEOCIFY
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <motion.a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                HOME
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                SERVICES
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                ABOUT US
              </motion.a>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-md"
                whileTap={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                GET STARTED
              </motion.button>
            </div>

            {/* Desktop Hamburger Menu (top-right) - UNCHANGED */}
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

            {/* Mobile Hamburger Menu (in navbar) - NEW VERSION */}
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
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">
                        SEOCIFY
                      </h2>
                      <p className="text-sm text-blue-600 font-medium">
                        Digital Agency
                      </p>
                    </div>
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
                      {["Home", "Services", "About Us"].map((link) => (
                        <motion.a
                          key={link}
                          href="#"
                          className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                          whileHover={{ x: -10, backgroundColor: "#eff6ff" }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          {link}
                        </motion.a>
                      ))}
                      <motion.button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-md"
                        onClick={closeSidebar}
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
                        Get Started
                      </motion.button>
                    </motion.nav>
                  )}

                  {/* Contact Information */}
                  <motion.div
                    className={`border-t border-gray-200 ${
                      isMobile ? "pt-6" : "pt-0"
                    }`}
                    variants={itemVariants}
                  >
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Contact Info
                    </h3>
                    <div className="space-y-4">
                      {/* Address */}
                      <motion.div
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
                      </motion.div>

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
                            href="tel:009-215-5596"
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            009-215-5596
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
                          icon: Facebook,
                          label: "Facebook",
                          color: "hover:text-blue-600",
                        },
                        {
                          icon: Twitter,
                          label: "Twitter",
                          color: "hover:text-sky-500",
                        },
                        {
                          icon: Instagram,
                          label: "Instagram",
                          color: "hover:text-pink-600",
                        },
                        {
                          icon: Linkedin,
                          label: "LinkedIn",
                          color: "hover:text-blue-700",
                        },
                      ].map(({ icon: Icon, label, color }) => (
                        <motion.a
                          key={label}
                          href="#"
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

                {/* Sidebar Footer */}
               
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FunctionalSidebar;
