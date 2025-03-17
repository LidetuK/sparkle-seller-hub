
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow pt-24 pb-16 w-full">
        <div className="container mx-auto px-6 max-w-[100%] text-left">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-3xl mb-8">
              Effective Date: 17/03/2025
            </p>
            <p className="text-lg text-gem-charcoal/70 max-w-3xl mb-8">
              By accessing or using our services, products, and website, you agree to the following Terms of Service.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
            <p className="text-gem-charcoal/80 mb-4">
              ONEX ONE MEMBER PLC is a leading provider in the gemstone industry, specializing in the global sale, ethical sourcing, and sustainable mining of premium gemstones. Our mission is to deliver high-quality, responsibly mined gemstones to clients worldwide while promoting environmental responsibility and community development.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. What We Offer</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We offer a wide range of ethically sourced gemstones, specializing in the highest quality stones for the global market. Our offerings include:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80">
              <li>Premium Quality Gemstones – Carefully selected and crafted to meet international standards.</li>
              <li>Global Market Expertise – Knowledge and insight into the global gemstone trade.</li>
              <li>Sustainable Practices – Ethical sourcing and eco-friendly mining practices.</li>
              <li>Efficient Delivery – Timely and secure delivery of gemstones worldwide.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Ethical Sourcing & Sustainability</h2>
            <p className="text-gem-charcoal/80 mb-4">
              ONEX ONE MEMBER PLC is committed to ethical sourcing, ensuring that all gemstones are responsibly mined and processed. We prioritize environmental sustainability, fair labor practices, and transparent supply chains. Our sustainable practices include:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80">
              <li>Fair Labor Practices – Ensuring safe working conditions and fair compensation.</li>
              <li>Environmental Sustainability – Using eco-friendly extraction methods to minimize ecological impact.</li>
              <li>Community Development – Investing in local communities through socio-economic programs.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Products and Categories</h2>
            <p className="text-gem-charcoal/80 mb-4">
              Our gemstone collection includes a variety of premium and semi-precious stones. Categories include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80">
              <li>Precious Gemstones: Diamonds, Rubies, Emeralds</li>
              <li>Semi-Precious Gemstones: Amethyst, Topaz, Garnet</li>
              <li>Custom Gemstones: Tailored gemstones for specific business needs</li>
            </ul>
            <p className="text-gem-charcoal/80 mt-4">
              Please note that all gemstone purchases are subject to availability, and pricing may vary based on market conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Order and Payment Terms</h2>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>Order Process:</strong> Once an order is placed, you will receive an order confirmation via email. Orders are processed upon confirmation of payment.
            </p>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>Payment Methods:</strong> We accept payments through secure and reliable methods including credit/debit cards and bank transfers.
            </p>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>Currency:</strong> All prices are listed in [Currency] unless otherwise specified.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Shipping and Delivery</h2>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>Shipping:</strong> ONEX ONE MEMBER PLC ensures that all gemstones are securely packaged and shipped using trusted carriers. Shipping times may vary based on your location.
            </p>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>Delivery:</strong> Estimated delivery times will be provided upon order confirmation. We are not responsible for any delays caused by third-party shipping providers.
            </p>
            <p className="text-gem-charcoal/80 mb-4">
              <strong>International Orders:</strong> Shipping costs for international orders are calculated at checkout, and customs duties or import taxes are the responsibility of the buyer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Returns and Refunds</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We want you to be satisfied with your purchase. However, due to the nature of our products, returns and refunds are only accepted under certain conditions:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80">
              <li><strong>Damaged Items:</strong> If your gemstones arrive damaged, please notify us within [X] days of receiving your order. We will offer a replacement or full refund.</li>
              <li><strong>Non-Returnable Items:</strong> Gemstones that have been customized or altered cannot be returned.</li>
              <li>Refunds will be processed to the original payment method.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p className="text-gem-charcoal/80 mb-4">
              All content on this website, including text, images, logos, and graphics, are the property of ONEX ONE MEMBER PLC or its licensors and are protected by copyright law. Unauthorized use of any materials from this website is prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-gem-charcoal/80 mb-4">
              ONEX ONE MEMBER PLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or the purchase of gemstones, including but not limited to business interruptions or loss of profits.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
