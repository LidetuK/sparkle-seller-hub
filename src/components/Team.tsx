
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  instagram?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "David Mitchell",
    role: "Founder & Lead Gemologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "With over 20 years of experience in gemology, David leads our team with passion and expertise.",
    email: "david@onexgems.com",
    instagram: "davidonexgems",
    linkedin: "davidmitchell"
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "Senior Gemstone Specialist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Sophia specializes in colored gemstones and has traveled the world to source the finest specimens.",
    email: "sophia@onexgems.com",
    instagram: "sophiaonexgems",
    linkedin: "sophiachen"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Diamond Expert",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    bio: "Marcus has unparalleled knowledge of diamond assessment and certification processes.",
    email: "marcus@onexgems.com",
    instagram: "marcusonexgems",
    linkedin: "marcusjohnson"
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Jewelry Designer",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    bio: "Priya creates stunning custom designs that showcase our gemstones in unique settings.",
    email: "priya@onexgems.com",
    instagram: "priyaonexgems",
    linkedin: "priyasharma"
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
                <p className="text-gem-charcoal/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
