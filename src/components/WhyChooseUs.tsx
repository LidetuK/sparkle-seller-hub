
import SectionTitle from './common/SectionTitle';
import FeaturesGrid from './features/FeaturesGrid';
import AnalysisReports from './certifications/AnalysisReports';
import CompletionCertificates from './certifications/CompletionCertificates';
import GoldExploration from './services/GoldExploration';

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gem-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gem-teal/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Why Choose ONEX"
          subtitle="We pride ourselves on offering the highest quality gemstones with exceptional service"
        />

        <FeaturesGrid />
        
        <AnalysisReports />
        
        <CompletionCertificates />
        
        <GoldExploration />
      </div>
    </section>
  );
};

export default WhyChooseUs;
