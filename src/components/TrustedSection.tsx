import { Button } from "@/components/ui/button";

const TrustedSection = () => {
  const companies = [
    "IKEA", "Litmus", "Desk", "Minecraft", "Livestream", 
    "UNICEF", "Asana", "MOZ", "Code Climate", "LiveChat", "1Password"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Decorative truck illustration background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-center justify-center h-full">
          <div className="w-full max-w-6xl">
            {/* Simple truck SVG representation */}
            <svg viewBox="0 0 800 200" className="w-full h-auto">
              {/* Truck bodies */}
              <rect x="50" y="100" width="80" height="40" fill="currentColor" rx="4"/>
              <rect x="40" y="85" width="20" height="25" fill="currentColor" rx="2"/>
              <rect x="150" y="100" width="100" height="40" fill="currentColor" rx="4"/>
              <rect x="270" y="95" width="120" height="45" fill="currentColor" rx="4"/>
              <rect x="410" y="100" width="90" height="40" fill="currentColor" rx="4"/>
              
              {/* Wheels */}
              <circle cx="70" cy="150" r="8" fill="currentColor"/>
              <circle cx="110" cy="150" r="8" fill="currentColor"/>
              <circle cx="180" cy="150" r="8" fill="currentColor"/>
              <circle cx="230" cy="150" r="8" fill="currentColor"/>
              <circle cx="300" cy="150" r="8" fill="currentColor"/>
              <circle cx="360" cy="150" r="8" fill="currentColor"/>
              <circle cx="440" cy="150" r="8" fill="currentColor"/>
              <circle cx="480" cy="150" r="8" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-shopify-dark mb-4">
            Trusted by leading businesses worldwide
          </h2>
          <p className="text-lg text-shopify-dark/80 mb-8">
            Join thousands of businesses that already trust their email delivery to Postmark.
          </p>
        </div>

        {/* Company logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12 opacity-70">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-shopify-dark/60 font-semibold text-lg bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              {company}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
            Try Postmark Free
            <div className="text-sm font-normal mt-1">No Credit Card Required</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;