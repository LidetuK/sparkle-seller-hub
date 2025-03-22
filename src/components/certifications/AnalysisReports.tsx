
import CertificationsCarousel from './CertificationsCarousel';

const certificates = [
  {
    src: "/lovable-uploads/8e0396b4-5590-485a-9d15-413fe9b65d1d.png",
    alt: "Certificate of Completion - Gemstones Identification"
  },
  {
    src: "/lovable-uploads/f7185ed2-1154-4593-b878-9469c399aa38.png",
    alt: "Certificate Analysis - Tantalite Ore"
  },
  {
    src: "/lovable-uploads/ad05fd15-6d33-4ad8-ace9-8a24b9cb0340.png",
    alt: "Certificate Analysis - Tantalum"
  },
  {
    src: "/lovable-uploads/13339e07-a00c-4257-b4fb-e652bfacf1df.png",
    alt: "Certificate Analysis - Tantalite"
  },
  {
    src: "/lovable-uploads/0ed458cb-2f5b-472f-907f-016de64c3ca0.png",
    alt: "Certificate Analysis - Tantalum Sample"
  },
  {
    src: "/lovable-uploads/abbd4b51-a3e0-4476-8680-513287a9cb91.png",
    alt: "Certificate Analysis - Tantalum Sample 2" 
  },
  {
    src: "/lovable-uploads/e9d61231-66ec-42b7-a1c1-87e6921b7b16.png",
    alt: "Certificate Analysis - Lithium Ore"
  },
  {
    src: "/lovable-uploads/e7e6e788-4f89-442e-85b2-76aa1b75de32.png",
    alt: "Certificate Analysis - Lithium"
  }
];

const AnalysisReports = () => {
  return (
    <div className="mt-20 bg-gradient-to-r from-gem-teal/10 via-gem-yellow/10 to-gem-red/10 rounded-2xl overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Analysis Reports & Certifications</h3>
          <p className="text-gem-charcoal/70 mb-6">
            We work with accredited laboratories to analyze and verify the composition of our minerals and gemstones. Browse through our certified analysis reports, confirming the quality and value of our products.
          </p>
          <a href="tel:0920537777" className="gem-button-primary inline-block">
            Book a Call With us
          </a>
        </div>
        
        <div className="lg:w-3/5 p-4 md:p-8">
          <CertificationsCarousel certificates={certificates} />
        </div>
      </div>
    </div>
  );
};

export default AnalysisReports;
