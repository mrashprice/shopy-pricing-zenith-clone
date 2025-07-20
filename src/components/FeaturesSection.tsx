import { Mail, Database, Smartphone, BarChart3, Shield, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Mail,
      title: "Industry-leading delivery speeds. Up to 4x faster than other providers.",
      description: "Get your emails delivered faster with our optimized infrastructure and global network."
    },
    {
      icon: Database,
      title: "Take the pain out of handling inbound email.",
      description: "Postmark turns inbound email into a handy JSON object and posts it to a web hook URL."
    },
    {
      icon: Smartphone,
      title: "Responsive templates for sending transactional emails.",
      description: "Including welcome messages, password resets, and more with beautiful, mobile-optimized designs."
    },
    {
      icon: BarChart3,
      title: "45 days worth of full content history by default to help you troubleshoot.",
      description: "Customizable from 7 to 365 days if needed. Never lose important email data again."
    },
    {
      icon: Shield,
      title: "We share our delivery statistics to the major inbox providers right on our status page.",
      description: "Complete transparency in our delivery performance and uptime statistics."
    },
    {
      icon: Zap,
      title: "Reliable link tracking so you can monitor and improve your emails.",
      description: "Track opens, clicks, and engagement to optimize your email performance."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-shopify-dark mb-6">
            All the tools you need to make managing your emails a breeze
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-shopify-green-light rounded-lg flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-shopify-green" />
              </div>
              <h3 className="text-lg font-semibold text-shopify-dark mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-shopify-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;