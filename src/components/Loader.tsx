"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white ">
      <div className="h-16 w-16">
        <svg className="animate-spin" viewBox="0 0 64 64">
          <circle
            className="text-blue-500"
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeDasharray="40, 134"
            strokeDashoffset="0"
          />
        </svg>
      </div>
    </div>
  );
}
