
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I know the gemstones are authentic?",
    answer: "All our gemstones come with certification of authenticity from internationally recognized gemological laboratories. We also provide detailed information about the origin, characteristics, and quality of each stone.",
    category: "Products"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cryptocurrency payments. All transactions are secure and encrypted.",
    category: "Payment"
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. International shipments are fully insured and come with tracking information. Delivery times vary depending on your location, but typically range from 5-10 business days.",
    category: "Shipping"
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for all our products. If you're not completely satisfied with your purchase, you can return it in its original condition for a full refund or exchange.",
    category: "Returns"
  },
  {
    question: "How do you ensure ethical sourcing?",
    answer: "We follow strict ethical sourcing guidelines and only work with suppliers who adhere to responsible mining practices. All our gemstones are conflict-free and sourced from mines that maintain fair labor standards and environmentally sustainable practices.",
    category: "Ethics"
  },
  {
    question: "Do you offer custom designs?",
    answer: "Yes, we offer custom design services. Our experienced designers can work with you to create a unique piece featuring your selected gemstones. Contact our team to discuss your specific requirements.",
    category: "Services"
  },
  {
    question: "How do I care for my gemstones?",
    answer: "Different gemstones require different care. Generally, we recommend storing them separately to prevent scratches, cleaning them with a soft brush and mild soap, and avoiding exposure to harsh chemicals and extreme temperatures. We include specific care instructions with each purchase.",
    category: "Care"
  },
  {
    question: "Can I schedule a virtual consultation?",
    answer: "Yes, we offer virtual consultations with our gemologists. During these sessions, you can ask questions, view specific gemstones, and receive expert advice. Contact us to schedule an appointment.",
    category: "Services"
  }
];

const categories = ["All", "Products", "Payment", "Shipping", "Returns", "Ethics", "Services", "Care"];

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqItems);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter FAQs based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredFAQs(faqItems);
    } else {
      setFilteredFAQs(faqItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
              Find answers to common questions about our gemstones, services, and policies
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-all duration-300",
                  selectedCategory === category
                    ? "bg-gem-charcoal text-white shadow-sm"
                    : "bg-white text-gem-charcoal/70 hover:bg-gray-100 border border-gray-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-6">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 text-gem-charcoal/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-8">
                <p className="text-lg text-gem-charcoal/70">No FAQs found in this category.</p>
              </div>
            )}
          </div>
          
          {/* Contact Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gem-charcoal/70 mb-6">
              If you couldn't find the answer to your question, feel free to reach out to our customer support team.
            </p>
            <a href="/contact" className="gem-button-primary inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
