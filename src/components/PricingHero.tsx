import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const PricingHero = () => {
  return (
    <section className="bg-gradient-hero py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Plans & Pricing Label */}
        <div className="mb-6">
          <span className="text-sm font-semibold text-shopify-gray-700 tracking-wider uppercase">
            PLANS & PRICING
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl lg:text-6xl font-bold text-shopify-dark mb-6 leading-tight">
          Start for free, then enjoy
          <br />
          £1/month for 3 months
        </h1>

        {/* Subheading */}
        <p className="text-xl text-shopify-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the best plan for your business. Change plans as you grow.
        </p>

        {/* Email Signup */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex gap-0 bg-white rounded-md shadow-card p-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border-0 bg-transparent px-4 py-3 text-base placeholder:text-shopify-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button variant="shopify" size="lg" className="shrink-0">
              Start free trial
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-shopify-gray-600 max-w-lg mx-auto">
          Try Shopify free, no credit card required. By entering your email,
          <br />
          you agree to receive marketing emails from Shopify.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;