import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a free trial with 100 emails per month. No credit card required to get started. You can upgrade to a paid plan at any time."
    },
    {
      question: "Do you offer dedicated IPs?",
      answer: "Yes, dedicated IPs are available as an add-on for Pro and Platform plans. This gives you complete control over your sending reputation and improved deliverability."
    },
    {
      question: "What happens if I go over my plan's monthly email limit?",
      answer: "If you exceed your monthly limit, we'll automatically charge you for additional emails at your plan's overage rate. You can also upgrade to a higher plan at any time."
    },
    {
      question: "What payment types do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal. Enterprise customers can also pay by invoice."
    },
    {
      question: "Do you have a tier smaller than 10,000 emails/month?",
      answer: "Our Basic plan starts at 10,000 emails per month, which covers most small businesses and developers. We also offer a free tier with 100 emails per month for testing and small projects."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-shopify-dark mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-shopify-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-shopify-gray-25 transition-colors"
              >
                <h3 className="text-lg font-semibold text-shopify-dark pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-shopify-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-shopify-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-shopify-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;