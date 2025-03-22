
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  inView: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, index, inView }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "gem-card group hover:-translate-y-2 transition-all duration-500 delay-[calc(100ms*var(--index))]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{"--index": index} as React.CSSProperties}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-gem-teal/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-gem-charcoal group-hover:text-gem-teal transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gem-charcoal/70">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
