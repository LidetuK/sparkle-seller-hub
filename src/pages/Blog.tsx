
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Fascinating History of Diamond Mining",
    excerpt: "Explore the rich history of diamond mining from ancient India to modern industrial operations.",
    content: "Diamonds have captivated human fascination for thousands of years. The earliest diamonds were found in India in the 4th century BC, but the modern diamond mining industry began in the late 19th century with discoveries in South Africa...",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop",
    author: "Elizabeth Gemstone",
    date: "June 15, 2023",
    readTime: "8 min",
    category: "History"
  },
  {
    id: "2",
    title: "How to Select the Perfect Engagement Ring",
    excerpt: "A comprehensive guide to choosing the ideal engagement ring that matches both style and budget.",
    content: "Selecting an engagement ring is one of the most significant purchases you'll make. From understanding the 4Cs of diamonds to choosing the right metal and setting style, this guide will help you navigate all aspects of engagement ring shopping...",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
    author: "Michael Johnson",
    date: "April 23, 2023",
    readTime: "12 min",
    category: "Guides"
  },
  {
    id: "3",
    title: "Ethical Sourcing in the Gemstone Industry",
    excerpt: "Understanding the importance of ethically sourced gemstones and how to identify them.",
    content: "The gemstone industry has faced challenges regarding environmental impact and fair labor practices. This article examines the growing movement for ethically sourced gemstones, certification processes, and how consumers can make responsible choices...",
    image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop",
    author: "Sophia Chen",
    date: "March 10, 2023",
    readTime: "10 min",
    category: "Sustainability"
  },
  {
    id: "4",
    title: "Gemstone Healing Properties: Science or Myth?",
    excerpt: "Examining the historical beliefs about gemstone healing properties and modern scientific perspectives.",
    content: "For centuries, various cultures have attributed healing and metaphysical properties to gemstones. This article explores these traditional beliefs and examines them in the context of modern scientific understanding...",
    image: "https://images.unsplash.com/photo-1620332372374-f108c53d165d?q=80&w=2070&auto=format&fit=crop",
    author: "David Williams",
    date: "February 5, 2023",
    readTime: "15 min",
    category: "Wellness"
  },
  {
    id: "5",
    title: "Emerging Trends in Gemstone Jewelry Design",
    excerpt: "Discover the latest trends shaping contemporary gemstone jewelry design across the globe.",
    content: "From minimalist settings to bold color combinations, gemstone jewelry design is constantly evolving. This article highlights the current trends influencing designers and how technological advances are opening new possibilities in jewelry creation...",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1474&auto=format&fit=crop",
    author: "Olivia Martinez",
    date: "January 18, 2023",
    readTime: "7 min",
    category: "Trends"
  },
  {
    id: "6",
    title: "The Rarest Gemstones in the World",
    excerpt: "An exploration of the world's most scarce and valuable gemstones and what makes them so special.",
    content: "Beyond the commonly known precious stones lie incredibly rare gemstones that few people will ever see in person. This article explores gems like Painite, Jeremejevite, and Red Beryl, detailing their properties, discovery stories, and astronomical values...",
    image: "https://images.unsplash.com/photo-1633305077644-bd0791bbaf25?q=80&w=1932&auto=format&fit=crop",
    author: "Robert Chen",
    date: "December 7, 2022",
    readTime: "9 min",
    category: "Education"
  }
];

const Blog = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" ref={ref}>
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Blog & Articles
            </h1>
            <p className={cn(
              "text-lg text-gem-charcoal/70 max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-100 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Stay informed with the latest news, trends, and stories from the world of gemstones
            </p>
            
            {/* Categories */}
            <div className={cn(
              "flex flex-wrap justify-center gap-2 transition-all duration-1000 delay-200 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <button className="px-4 py-2 text-sm rounded-full bg-gem-charcoal text-white shadow-sm">
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm rounded-full bg-white text-gem-charcoal/70 hover:bg-gray-100 border border-gray-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Post */}
          <div className={cn(
            "mb-16 transition-all duration-1000 delay-300 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-sm text-gem-charcoal/60 mb-4">
                    <span className="bg-gem-charcoal/10 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gem-charcoal/70 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gem-charcoal/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-gem-charcoal/70" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{blogPosts[0].author}</div>
                      <div className="text-xs text-gem-charcoal/60 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> 
                        {blogPosts[0].date}
                      </div>
                    </div>
                  </div>
                  
                  <button className="group inline-flex items-center text-gem-charcoal font-medium">
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <div 
                  key={post.id}
                  ref={ref}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    "transition-all duration-700 delay-[calc(100ms*var(--index))]"
                  )}
                  style={{"--index": index} as React.CSSProperties}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gem-charcoal/60 gap-4 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> 
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gem-charcoal/70 text-sm mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gem-charcoal/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-gem-charcoal/70" />
                        </div>
                        <div className="text-sm font-medium">{post.author}</div>
                      </div>
                      
                      <button className="group inline-flex items-center text-gem-charcoal text-sm font-medium">
                        Read
                        <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
