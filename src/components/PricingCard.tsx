import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  currency: string;
  period: string;
  billedPeriod: string;
  badge?: string;
  badgeColor?: string;
  features: {
    cardRates: string[];
    standoutFeatures: string[];
  };
  buttonText: string;
  buttonVariant?: "shopify" | "shopify-outline" | "shopify-success";
  highlighted?: boolean;
  contactLink?: string;
  promoPrice?: string;
}

const PricingCard = ({
  title,
  description,
  price,
  currency,
  period,
  billedPeriod,
  badge,
  badgeColor = "bg-shopify-green-light text-shopify-green",
  features,
  buttonText,
  buttonVariant = "shopify",
  highlighted = false,
  contactLink,
  promoPrice
}: PricingCardProps) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 ${
      highlighted ? "ring-2 ring-shopify-green ring-offset-2" : ""
    }`}>
      {/* Badge */}
      {badge && (
        <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
          {badge}
        </div>
      )}

      {/* Promo Price */}
      {promoPrice && (
        <div className="bg-shopify-green-light text-shopify-green text-sm font-medium px-3 py-2 rounded-lg mb-4 text-center">
          {promoPrice}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-shopify-dark mb-2">{title}</h3>
        <p className="text-shopify-gray-600 text-sm">{description}</p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="text-sm text-shopify-gray-600 mb-1">Starting at</div>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-shopify-dark">{currency}{price}</span>
          <span className="text-shopify-gray-600 ml-1">{period}</span>
        </div>
        <div className="text-sm text-shopify-gray-600 mt-1">{billedPeriod}</div>
      </div>

      {/* Card Rates */}
      <div className="mb-6">
        <h4 className="font-semibold text-shopify-dark mb-3">Card rates starting at</h4>
        <ul className="space-y-2">
          {features.cardRates.map((rate, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-shopify-green mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-shopify-gray-700">{rate}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Standout Features */}
      <div className="mb-8">
        <h4 className="font-semibold text-shopify-dark mb-3">Standout features</h4>
        <ul className="space-y-2">
          {features.standoutFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="text-shopify-green mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-shopify-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="space-y-3">
        <Button 
          variant={buttonVariant} 
          size="lg" 
          className="w-full"
        >
          {buttonText}
        </Button>
        
        {contactLink && (
          <div className="text-center">
            <button className="text-sm text-shopify-dark hover:text-shopify-gray-700 underline transition-colors">
              {contactLink}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;