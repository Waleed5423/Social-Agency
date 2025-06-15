"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "sonner";
import Link from "next/link";

interface PlanData {
  name: string;
  price: number;
  description: string;
  features: string[];
  billingCycle: "monthly" | "yearly";
}

const Plan = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [planData, setPlanData] = useState<PlanData | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurantName: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get plan data from URL params
    const planName = searchParams?.get("plan");
    const billingCycle =
      (searchParams?.get("cycle") as "monthly" | "yearly") || "monthly";
    const price = Number(searchParams?.get("price"));

    const planDetails = {
      Starter: {
        description: "Perfect for small restaurants getting started with ads",
        features: [
          "1 Campaign Setup",
          "Local Targeting",
          "Basic Ad Creatives",
          "Weekly Optimization",
          "Monthly Reporting",
        ],
      },
      Growth: {
        description: "For growing restaurants needing more visibility",
        features: [
          "3 Campaign Setups",
          "Advanced Local Targeting",
          "Custom Ad Creatives",
          "Daily Optimization",
          "Weekly Reporting",
          "Offer Strategy",
        ],
      },
      Premium: {
        description: "Complete solution for high-volume restaurants",
        features: [
          "Unlimited Campaigns",
          "Hyper-Local Targeting",
          "Premium Ad Creatives",
          "24/7 Monitoring",
          "Daily Reporting",
          "Full Funnel Strategy",
          "Dedicated Account Manager",
        ],
      },
    };

    if (
      planName &&
      planDetails[planName as keyof typeof planDetails] &&
      price
    ) {
      setPlanData({
        name: planName,
        price,
        description:
          planDetails[planName as keyof typeof planDetails].description,
        features: planDetails[planName as keyof typeof planDetails].features,
        billingCycle,
      });
    } else {
      // Redirect back if no valid plan
      router.push("/pricing");
    }
  }, [router, searchParams]);

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
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          ...formData,
          plan: planData?.name,
          price: `$${planData?.price}/${
            planData?.billingCycle === "monthly" ? "mo" : "yr"
          }`,
          billingCycle: planData?.billingCycle,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Form submitted successfully! We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        restaurantName: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!planData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <section className="relative bg-white py-16 px-5 sm:px-6 lg:px-8">
      {/* Decorative blue elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-200"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-blue-100"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Toaster position="top-center" richColors />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
            Get Started with {planData.name} Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the form below and we&apos;ll get in touch within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl border-2 border-blue-200 shadow-lg p-6"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {planData.name} Plan
              </h3>
              <p className="text-gray-600 mb-4">{planData.description}</p>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  ${planData.price}
                </div>
                <div className="text-gray-500">
                  per {planData.billingCycle === "monthly" ? "month" : "year"}
                </div>
                {planData.billingCycle === "yearly" && (
                  <div className="text-green-600 text-sm mt-2">
                    You&apos;re saving 10% compared to monthly billing
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-blue-600 mb-3">
                What&apos;s included:
              </h4>
              <ul className="space-y-3">
                {planData.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                Next Steps
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Complete the form</li>
                <li>We&apos;ll contact you within 24 hours</li>
                <li>Onboarding session</li>
                <li>Launch your campaigns</li>
              </ol>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl border-2 border-blue-200 shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Contact Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="restaurantName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Restaurant Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="restaurantName"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our{" "}
                <Link href="/Privacy-Policy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                . We&apos;ll never share your information without your permission.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
