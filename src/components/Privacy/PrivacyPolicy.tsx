"use client";

import React from "react";
import { motion , Variants } from "framer-motion";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-blue-100 max-w-3xl"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-5 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-8">
              At TableTurn Media (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (name, email, phone number, business address)</li>
              <li>Business information (restaurant name, type, size)</li>
              <li>Payment information (processed securely through our payment processor)</li>
              <li>Marketing preferences</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Technical Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Website usage data through cookies and similar technologies</li>
              <li>Advertising performance data from connected accounts</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Create and manage your advertising campaigns</li>
              <li>Process payments and send invoices</li>
              <li>Communicate with you about your account</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Service providers who assist with our business operations (payment processors, hosting providers)</li>
              <li>Advertising platforms (Facebook, Instagram) to execute your campaigns</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business transfers (in case of merger, acquisition, or asset sale)</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Secure servers and encryption protocols</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@tableturnmedia.com.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Analyze website traffic and usage patterns</li>
              <li>Remember your preferences</li>
              <li>Deliver targeted advertisements</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling cookies may affect certain website features.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the &quot;Last updated&quot; date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="mt-4">
              TableTurn Media<br />
              Attn: Privacy Officer<br />
              123 Business Street<br />
              New York, NY 10001<br />
              Email: privacy@tableturnmedia.com<br />
              Phone: (555) 123-4567
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;