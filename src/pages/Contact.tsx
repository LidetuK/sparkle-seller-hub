
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "5c6dd5d4-6a89-44a2-bc94-42257b680786",
          subject: `New contact form submission: ${formData.subject}`,
          from_name: "ONEX Gems Website",
          to_email: "johnesku22@gmail.com",
          ...formData
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon!",
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gem-charcoal/70 max-w-2xl mx-auto">
              Have questions or inquiries? Reach out to our team for assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gem-charcoal mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gem-teal focus:border-transparent"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gem-charcoal mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gem-teal focus:border-transparent"
                      placeholder="Your email address"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gem-charcoal mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gem-teal focus:border-transparent"
                    placeholder="Message subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gem-charcoal mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gem-teal focus:border-transparent resize-none"
                    placeholder="Your message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="gem-button-primary w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Message Sent
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div>
              <div className="gem-card mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex">
                    <MapPin className="text-gem-red mr-4 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <p className="font-medium">Our Address</p>
                      <p className="text-gem-charcoal/70">
                        123 Gemstone Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Phone className="text-gem-red mr-4 flex-shrink-0" size={22} />
                    <div>
                      <p className="font-medium">Phone Number</p>
                      <p className="text-gem-charcoal/70">
                        <a href="tel:+12125551234" className="hover:text-gem-red transition-colors">
                          +1 (212) 555-1234
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Mail className="text-gem-red mr-4 flex-shrink-0" size={22} />
                    <div>
                      <p className="font-medium">Email Address</p>
                      <p className="text-gem-charcoal/70">
                        <a href="mailto:johnesku22@gmail.com" className="hover:text-gem-red transition-colors">
                          johnesku22@gmail.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Clock className="text-gem-red mr-4 flex-shrink-0" size={22} />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gem-charcoal/70">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden h-72">
                <iframe 
                  title="ONEX Gems Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903e47bd5a7%3A0xf5df5ebd6cc8c7a0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652456235045!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
