import { Check, X } from "lucide-react";

const FeatureComparison = () => {
  const features = [
    {
      category: "Send Amounts",
      items: [
        { name: "Users", basic: "Up to 4 users", pro: "Up to 6 users", platform: "Unlimited users" },
        { name: "Number of Users", basic: "Up to 4 users", pro: "Up to 6 users", platform: "Unlimited users" }
      ]
    },
    {
      category: "Send and Receive",
      items: [
        { name: "SMTP", basic: true, pro: true, platform: true },
        { name: "REST API", basic: true, pro: true, platform: true },
        { name: "Inbound Email", basic: false, pro: true, platform: true },
        { name: "Transactional Message Streams", basic: "Up to 15 streams", pro: "Up to 30 streams", platform: "Unlimited" },
        { name: "Marketing/Bulk/Broadcast message streams", basic: "Up to 15 streams", pro: "Up to 30 streams", platform: "Unlimited" },
        { name: "Servers", basic: "Up to 5 servers", pro: "Up to 10 servers", platform: "Unlimited" },
        { name: "Custom sending domains", basic: "Up to 5 domains", pro: "Up to 10 domains", platform: "Unlimited" },
        { name: "Email Templates", basic: true, pro: true, platform: true },
        { name: "Shared IPs & Dedicated IPs", basic: "Shared IPs", pro: "Shared IPs\nDedicated IP available as an add-on", platform: "Shared IPs\nDedicated IP available as an add-on" },
        { name: "Suppression Management", basic: true, pro: true, platform: true }
      ]
    },
    {
      category: "Seamless Integration",
      items: [
        { name: "Sandbox Mode", basic: true, pro: true, platform: true },
        { name: "In-depth Documentation", basic: true, pro: true, platform: true },
        { name: "Event Webhooks", basic: true, pro: true, platform: true }
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        { name: "Detailed Activity Retention", basic: "45 Days", pro: "45 Days\nCustom retention available as add-on", platform: "45 Days\nCustom retention available as add-on" },
        { name: "Full message retention", basic: "45 Days", pro: "45 Days\nCustom retention available as add-on", platform: "45 Days\nCustom retention available as add-on" },
        { name: "Delivery, Bounce, Spam, and Open Rates", basic: true, pro: true, platform: true },
        { name: "Custom Tagging", basic: true, pro: true, platform: true },
        { name: "Analytics API", basic: true, pro: true, platform: true }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "24/7 Support", basic: true, pro: true, platform: true },
        { name: "Security & Compliance", basic: true, pro: true, platform: true }
      ]
    }
  ];

  const plans = [
    { name: "Basic", key: "basic" },
    { name: "Pro", key: "pro" },
    { name: "Platform", key: "platform" }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-shopify-green mx-auto" />
      ) : (
        <X className="w-5 h-5 text-shopify-gray-400 mx-auto" />
      );
    }
    return <span className="text-sm text-shopify-gray-700 text-center">{value}</span>;
  };

  return (
    <section className="py-16 bg-shopify-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-shopify-dark mb-4">
            Compare features across all plans
          </h2>
          <p className="text-shopify-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business with our comprehensive feature comparison
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-shopify-gray-50 border-b border-shopify-gray-200">
            <div className="p-6">
              <h3 className="font-semibold text-shopify-dark">Features</h3>
            </div>
            {plans.map((plan) => (
              <div key={plan.key} className="p-6 text-center border-l border-shopify-gray-200">
                <h3 className="font-semibold text-shopify-dark">{plan.name}</h3>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-shopify-gray-25 border-b border-shopify-gray-200 px-6 py-3">
                <h4 className="font-medium text-shopify-gray-800">{category.category}</h4>
              </div>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="grid grid-cols-4 border-b border-shopify-gray-100 hover:bg-shopify-gray-25 transition-colors"
                >
                  <div className="p-4">
                    <span className="text-sm text-shopify-gray-700">{item.name}</span>
                  </div>
                  {plans.map((plan) => (
                    <div key={plan.key} className="p-4 border-l border-shopify-gray-100 flex items-center justify-center">
                      {renderFeatureValue(item[plan.key as keyof typeof item])}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;