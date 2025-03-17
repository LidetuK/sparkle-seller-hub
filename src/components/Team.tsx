
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email?: string;
  instagram?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mr Yohannes Gézahegn",
    role: "Founder, CEO & Lead Gemologist",
    image: "/lovable-uploads/STAF 04.jpg",
    email: "johnesku22@gmail.com",
    instagram: "/",
    linkedin: "/"
  },
  {
    id: 2,
    name: "Wondwosen Mulugeta",
    role: "System Administrator &MULTIMEDIA Manager",
    image: "/lovable-uploads/STAF 01.jpg",
    email: "Wondwosen Mulugeta@gmail.com",
    instagram: "/",
    linkedin: "/"
  },
  {
    id: 3,
    name: "Dr John Neuhaus",
    role: "Head of Procurement and Quality Control ( SENIOR GEOLOGIST)",
    image: "/lovable-uploads/STAF 05.jpg",
    email: "Dr John Neuhaus@gmail.com",
    instagram: "/",
    linkedin: "/"
  },
  {
    id: 4,
    name: "Frehiwot Mulugeta",
    role: "Head of Sales and Marketing (SENIOR ACCOUNTING EXPERT)",
    image: "/lovable-uploads/STAF 03.jpg",
    email: "priya@onexgems.com",
    instagram: "priyaonexgems",
    linkedin: "priyasharma"
  },
  {
    id: 5,
    name: "Eskedar Zergaw",
    role: "Deputy Manager",
    image: "/lovable-uploads/ab9ae043-c9f8-43b8-97c5-17ee6b93c44b.png",
    email: "eskedar@onexgems.com",
    instagram: "/",
    linkedin: "/"
  }
];

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Meet Our Expert Team
          </h2>
          <p className={cn(
            "text-lg text-gem-charcoal/70 max-w-2xl mx-auto transition-all duration-1000 delay-100",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Dedicated professionals with extensive expertise in gemology and jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={cn(
                "group transition-all duration-500 delay-[calc(100ms*var(--index))]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{"--index": index} as React.CSSProperties}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    {/* Social links */}
                    <div className="flex justify-center space-x-3 mb-3">
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={18} className="text-white" />
                        </a>
                      )}
                      {member.instagram && (
                        <a 
                          href={`https://instagram.com/${member.instagram}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200"
                          aria-label={`${member.name} on Instagram`}
                        >
                          <Instagram size={18} className="text-white" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a 
                          href={`https://linkedin.com/in/${member.linkedin}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors duration-200"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <Linkedin size={18} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gem-red font-medium mb-3">{member.role}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
