import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-3xl mx-auto mb-8">
              Effective Date: 17/03/2025
            </p>
            <p className="text-lg text-gem-charcoal/70 max-w-3xl mx-auto mb-8">
              At ONEX ONE MEMBER PLC, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website and interact with our services. By accessing or using our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We collect different types of information to provide and improve our services to you:
            </p>
            <h3 className="text-xl font-bold mb-2">a. Personal Data</h3>
            <ul className="list-disc pl-6 text-gem-charcoal/80 mb-4">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and postal address.</li>
              <li><strong>Payment Information:</strong> Credit/debit card details or other payment methods, for processing transactions.</li>
              <li><strong>Account Information:</strong> If you create an account, we may collect your username, password, and other related account details.</li>
              <li><strong>Other Personal Information:</strong> Any additional information you provide when contacting us through forms, emails, or live chat.</li>
            </ul>
            <h3 className="text-xl font-bold mb-2">b. Usage Data</h3>
            <ul className="list-disc pl-6 text-gem-charcoal/80 mb-4">
              <li><strong>IP Address:</strong> Your IP address used to access our website.</li>
              <li><strong>Browser Type and Version:</strong> Information about your browser or device used to access the website.</li>
              <li><strong>Pages Visited:</strong> The pages you visit on our website.</li>
              <li><strong>Time and Date of Visit:</strong> The time spent on certain pages and the date of your visit.</li>
              <li><strong>Geolocation Data:</strong> The approximate location of your device.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80 mb-4">
              <li><strong>To Provide and Improve Our Services:</strong> To deliver our services, fulfill your orders, and improve your experience.</li>
              <li><strong>To Process Payments:</strong> To complete your transactions securely and efficiently.</li>
              <li><strong>To Communicate with You:</strong> To send you newsletters, marketing materials, and respond to inquiries.</li>
              <li><strong>To Ensure Security:</strong> To protect our website and services from fraud, abuse, or security threats.</li>
              <li><strong>To Comply with Legal Obligations:</strong> To comply with applicable laws, regulations, and legal processes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We will not sell, rent, or lease your personal information to third parties. However, we may share your personal data in the following situations:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80 mb-4">
              <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers that help us operate our website or provide services, such as payment processors and logistics companies. These third parties are only permitted to use your information as necessary to provide the services on our behalf.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to legal requests from government authorities or law enforcement agencies.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We use reasonable administrative, technical, and physical safeguards to protect your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we strive to implement reasonable measures to protect your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gem-charcoal/80 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your experience. These technologies allow us to track usage patterns, remember your preferences, and improve the website's functionality. You can choose to accept or reject cookies through your browser settings. If you choose to reject cookies, some portions of our website may not function properly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gem-charcoal/80 mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gem-charcoal/80 mb-4">
              <li><strong>Access to Your Information:</strong> You can request access to the personal data we hold about you.</li>
              <li><strong>Correction of Information:</strong> You can request corrections to any inaccurate or incomplete personal information.</li>
              <li><strong>Deletion of Information:</strong> You can request that we delete your personal information, subject to legal and contractual obligations.</li>
              <li><strong>Opt-Out of Marketing Communications:</strong> You can unsubscribe from our marketing emails by following the instructions in the email or by contacting us directly.</li>
            </ul>
            <p className="text-gem-charcoal/80">
              If you wish to exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
            <p className="text-gem-charcoal/80 mb-4">
              Our website may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices of these external websites. We encourage you to review the privacy policies of any third-party websites before providing any personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
            <p className="text-gem-charcoal/80 mb-4">
              Our website and services are not directed at individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we discover that we have collected personal data from a child under 13, we will take steps to delete that information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gem-charcoal/80 mb-4">
              We may update our Privacy Policy from time to time. Any changes to this policy will be posted on this page, with the updated "Effective Date" at the top. We encourage you to review this Privacy Policy periodically for any updates or changes.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
