
import { Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const completionCertificates = [
  {
    src: "/lovable-uploads/af696e8d-7bae-4306-8683-1c0236fab9ee.png",
    alt: "Certificate of Completion - Yohannes Gezahegn Tunga"
  },
  {
    src: "/lovable-uploads/dce3d8a8-09a5-43ab-93a7-ebed79bde0c4.png",
    alt: "COOP Bank 20th Anniversary Invitation - Onex One Member PLC"
  }
];

const CompletionCertificates = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-20 bg-gradient-to-r from-gem-teal/10 via-gem-yellow/10 to-gem-red/10 rounded-2xl overflow-hidden" ref={ref}>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/5 p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-gem-red" />
            <h3 className="text-2xl md:text-3xl font-semibold text-gem-charcoal">Certificate of Completion</h3>
          </div>
          <p className="text-gem-charcoal/70 mb-6">
            Our team members have completed specialized professional training and certifications in gemstone identification, assessment, and mineral analysis. Our expertise is recognized by leading institutions in the industry.
          </p>
          <a href="tel:0920537777" className="gem-button-primary inline-block">
            Contact Our Experts
          </a>
        </div>
        
        <div className="lg:w-3/5 p-4 md:p-8">
          <div className="grid grid-cols-1 gap-8">
            {completionCertificates.map((certificate, index) => (
              <div key={index} className={cn(
                "rounded-xl shadow-lg overflow-hidden transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                index === 1 && "mt-4"
              )}
              style={{"--delay": `${index * 300}ms`} as React.CSSProperties}>
                <div className="relative block aspect-[16/9] w-full overflow-hidden rounded-t-xl">
                  <img
                    src={certificate.src}
                    alt={certificate.alt}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gem-charcoal font-medium text-center">{certificate.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionCertificates;
