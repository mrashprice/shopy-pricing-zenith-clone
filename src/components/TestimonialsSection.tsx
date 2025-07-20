import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const mainTestimonial = {
    quote: "Postmark has a reputation for high quality. Even though there are several good companies, we were convinced by Postmark's clear documentation and transparent roadmap. Further, building email infrastructure is really a partnership — we wanted to invest in a platform that would continue to grow along with our needs, not one that was fairly static and falling behind the technology curve.",
    author: "Cliff Chang",
    title: "Product Engineer at Asana",
    company: "Asana",
    link: "Read the full story"
  };

  const secondaryTestimonials = [
    {
      quote: "I was shocked to see Postmark open rates were an 11% improvement over SES in our test. Needless to say we started sending all of our transactional email through Postmark.",
      author: "Dave Marshall",
      title: "CTO at Childcare.co.uk"
    },
    {
      quote: "We're really happy we decided to use Postmark for the TrustArc SaaP Awards. We only count votes from verified email addresses and Postmark's excellent delivery has lead to our highest verification percentage ever. We'll definitely use Postmark again!",
      author: "Owen Matthews",
      title: "Creative Director at Ten4 Design"
    },
    {
      quote: "Postmark blows every other transactional email product out of the water.",
      author: "Kyle Racki",
      title: "CEO at Proposify"
    }
  ];

  return (
    <section className="py-20 bg-shopify-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-shopify-dark mb-6">
            Here's what our customers think of us
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="bg-white rounded-xl shadow-card p-8 mb-12 relative">
          <div className="text-6xl text-shopify-gray-200 absolute top-4 left-8">"</div>
          <div className="text-6xl text-shopify-gray-200 absolute bottom-4 right-8">"</div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-lg text-shopify-gray-700 italic leading-relaxed mb-8 text-center">
              {mainTestimonial.quote}
            </p>
            
            <div className="text-center mb-6">
              <Button variant="shopify-outline" size="sm">
                {mainTestimonial.link} →
              </Button>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-shopify-gray-200 rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-shopify-dark">{mainTestimonial.author}</div>
                <div className="text-sm text-shopify-gray-600">{mainTestimonial.title}</div>
              </div>
              <div className="ml-4 text-shopify-green font-semibold">{mainTestimonial.company}</div>
            </div>
          </div>
        </div>

        {/* Secondary testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-card p-6">
              <p className="text-shopify-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-shopify-gray-200 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-shopify-dark text-sm">{testimonial.author}</div>
                  <div className="text-xs text-shopify-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;