
import { useInView } from 'react-intersection-observer';
import { Diamond, BadgeCheck, TruckIcon, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Diamond,
    title: "Premium Selection",
    description: "Every gemstone in our collection is handpicked for exceptional quality, color, and clarity."
  },
  {
    icon: BadgeCheck,
    title: "Authenticity Guaranteed",
    description: "All our gemstones come with certification and guarantee of authenticity and origin."
  },
  {
    icon: Shield,
    title: "Ethical Sourcing",
    description: "We're committed to responsible mining practices and ethical sourcing throughout our supply chain."
  },
  {
    icon: TruckIcon,
    title: "Global Market Expertise",
    description: "With deep industry knowledge, we provide competitive solutions and insights in the global gemstone trade."
  }
];

const FeaturesGrid = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
