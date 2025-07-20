import { useState } from "react";

const BillingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex justify-center mb-12">
      <div className="bg-white rounded-full p-1 shadow-card inline-flex">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            !isYearly
              ? "bg-shopify-gray-100 text-shopify-dark shadow-sm"
              : "text-shopify-gray-600 hover:text-shopify-dark"
          }`}
        >
          Pay monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 relative ${
            isYearly
              ? "bg-shopify-dark text-white shadow-sm"
              : "text-shopify-gray-600 hover:text-shopify-dark"
          }`}
        >
          Pay yearly (save 25%)*
          {isYearly && (
            <div className="absolute -top-2 -right-2 bg-shopify-green text-white text-xs px-2 py-1 rounded-full">
              25%
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default BillingToggle;