import PricingCard from "./PricingCard";

const PricingGrid = () => {
  const pricingPlans = [
    {
      title: "Basic",
      description: "For solo entrepreneurs",
      price: "19",
      currency: "£",
      period: "GBP/month",
      billedPeriod: "billed once yearly",
      badge: "Most Popular",
      badgeColor: "bg-shopify-green text-white",
      promoPrice: "£1/month for first 3 months",
      features: {
        cardRates: [
          "2% + 25p GBP online",
          "1.7% + 0p GBP in person",
          "2% 3rd-party payment providers"
        ],
        standoutFeatures: [
          "10 inventory locations",
          "24/7 chat support",
          "In-person selling by phone or POS device"
        ]
      },
      buttonText: "Try for free",
      buttonVariant: "shopify" as const,
      highlighted: true
    },
    {
      title: "Grow",
      description: "For small teams",
      price: "49",
      currency: "£",
      period: "GBP/month",
      billedPeriod: "billed once yearly",
      promoPrice: "£1/month for first 3 months",
      features: {
        cardRates: [
          "1.7% + 25p GBP online",
          "1.6% + 0p GBP in person",
          "1% 3rd-party payment providers"
        ],
        standoutFeatures: [
          "10 inventory locations",
          "Enhanced 24/7 chat support",
          "5 staff accounts",
          "In-person selling by phone or POS device"
        ]
      },
      buttonText: "Try for free",
      buttonVariant: "shopify" as const
    },
    {
      title: "Advanced",
      description: "As your business scales",
      price: "259",
      currency: "£",
      period: "GBP/month",
      billedPeriod: "billed once yearly",
      promoPrice: "£1/month for first 3 months",
      features: {
        cardRates: [
          "1.5% + 25p GBP online",
          "1.5% + 0p GBP in person",
          "0.6% 3rd-party payment providers"
        ],
        standoutFeatures: [
          "10 inventory locations",
          "Enhanced 24/7 chat support",
          "Local storefronts by market",
          "15 staff accounts",
          "In-person selling by phone or POS device"
        ]
      },
      buttonText: "Try for free",
      buttonVariant: "shopify" as const
    },
    {
      title: "Plus",
      description: "For more complex businesses",
      price: "2,300",
      currency: "US$",
      period: "USD/month",
      billedPeriod: "on a 3-year term",
      badge: "Available on a 1- or 3-year term",
      badgeColor: "bg-shopify-blue text-white",
      features: {
        cardRates: [
          "Competitive rates for high-volume merchants"
        ],
        standoutFeatures: [
          "200 inventory locations",
          "Priority 24/7 phone support",
          "Local storefronts by market",
          "Unlimited staff accounts",
          "Fully customizable, high-volume checkout",
          "Up to 200 POS Pro locations",
          "Sell wholesale/B2B"
        ]
      },
      buttonText: "Get started",
      buttonVariant: "shopify" as const,
      contactLink: "Get in touch"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        
        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-shopify-gray-600">
            *Yearly discount available on select plans
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;