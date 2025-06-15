import React, { Suspense } from "react";
import Plan from "@/components/Plans/Plan";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading plan details...</div>}>
      <Plan />
    </Suspense>
  );
};

export default Page;