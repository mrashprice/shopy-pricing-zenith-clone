import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShopifyHeader = () => {
  return (
    <header className="w-full bg-white border-b border-shopify-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-shopify-green rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-shopify-dark">shopify</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-shopify-dark hover:text-shopify-gray-700 cursor-pointer transition-colors">
              <span className="font-medium">Solutions</span>
              <ChevronDown size={16} />
            </div>
            <button className="text-shopify-dark hover:text-shopify-gray-700 font-medium transition-colors">
              Pricing
            </button>
            <div className="flex items-center space-x-1 text-shopify-dark hover:text-shopify-gray-700 cursor-pointer transition-colors">
              <span className="font-medium">Resources</span>
              <ChevronDown size={16} />
            </div>
            <button className="text-shopify-dark hover:text-shopify-gray-700 font-medium transition-colors">
              Enterprise
            </button>
            <div className="flex items-center space-x-1 text-shopify-dark hover:text-shopify-gray-700 cursor-pointer transition-colors">
              <span className="font-medium">What's new</span>
              <ChevronDown size={16} />
            </div>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="shopify-link" className="hidden lg:inline-flex">
              Log in
            </Button>
            <Button variant="shopify" size="default">
              Start for free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShopifyHeader;