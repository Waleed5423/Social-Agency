import HeroSection from "@/components/Home/HeroSection";
import Service from "@/components/Home/Service";
import Offer from "@/components/Home/Offer";
import PricingPlan from "@/components/Home/PricingPlan";
import OurData from "@/components/Home/OurData";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
// import Testimonials from "@/components/Home/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <Service />
      <Offer />
      <PricingPlan />
      <OurData />
      <WhyChooseUs />
      {/* <Testimonials /> */}
    </>
  );
};

export default page;
