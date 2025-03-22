
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="text-center mb-16" ref={ref}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        {title}
      </h2>
      <p className={cn(
        "text-lg text-gem-charcoal/70 max-w-2xl mx-auto transition-all duration-1000 delay-100",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
