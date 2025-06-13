"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Blog", "Contact"],
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      text: "123 Business Street, Suite 100, New York, NY 10001",
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      text: "009-215-5596",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      text: "info@tableturnmedia.com",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "#",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "#",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">TableTurn Media</span>
            </div>
            <p className="text-blue-100">
              Helping restaurants grow through strategic digital marketing since
              2015.
            </p>

            {/* Language Selector */}
            <div className="flex items-center">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-700 rounded-md transition-all group">
                <Globe
                  size={16}
                  className="text-blue-200 group-hover:text-white"
                />
                <span className="font-medium">English</span>
              </button>
            </div>
          </motion.div>

          {/* Company Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="mt-0.5">{item.icon}</div>
                  <p className="text-blue-100">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="bg-blue-700 hover:bg-blue-800 p-2 rounded-full transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-blue-400/30 mt-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center  text-blue-100 text-sm"
        >
          <p>
            © {new Date().getFullYear()} TableTurn Media. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
