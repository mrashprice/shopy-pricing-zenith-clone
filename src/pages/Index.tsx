import ShopifyHeader from "@/components/ShopifyHeader";
import PricingHero from "@/components/PricingHero";
import BillingToggle from "@/components/BillingToggle";
import PricingGrid from "@/components/PricingGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ShopifyHeader />
      <PricingHero />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <BillingToggle />
          <PricingGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
