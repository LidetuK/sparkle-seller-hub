
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, Clock, ArrowLeft, Share2 } from 'lucide-react';

// Import the blog posts from the Blog page to reuse them
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
    content: "Diamonds have captivated human fascination for thousands of years. The earliest diamonds were found in India in the 4th century BC, but the modern diamond mining industry began in the late 19th century with discoveries in South Africa.\n\nThe discovery of diamonds in South Africa's Kimberley region in 1867 sparked what would become known as the 'diamond rush.' Thousands of prospectors flocked to the area, leading to the establishment of De Beers Consolidated Mines in 1888 by Cecil Rhodes. This company would go on to dominate the global diamond market for much of the 20th century.\n\nDiamond mining techniques have evolved significantly over time. Early mining was largely alluvial, where diamonds were sifted from river sediments. As surface deposits became depleted, underground mining became necessary. Modern diamond mining employs sophisticated technologies including X-ray separation systems, which can identify diamonds based on their unique property of fluorescing under X-rays.\n\nThe global diamond mining industry has faced challenges regarding ethical practices. The issue of 'blood diamonds' or conflict diamonds – those mined in war zones and sold to finance insurgency, military activity, or warlord activity – came to international attention in the 1990s. This led to the establishment of the Kimberley Process in 2003, a certification scheme designed to prevent conflict diamonds from entering the mainstream diamond market.\n\nToday, diamond mining occurs in various countries around the world, with Russia, Botswana, Canada, and Australia being major producers. The industry continues to evolve with increased focus on ethical sourcing, environmental responsibility, and the development of laboratory-grown diamonds as an alternative to mined stones.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-07.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "8 min",
    category: "History"
  },
  {
    id: "2",
    title: "How to Select the Perfect Engagement Ring",
    excerpt: "A comprehensive guide to choosing the ideal engagement ring that matches both style and budget.",
    content: "Selecting an engagement ring is one of the most significant purchases you'll make. From understanding the 4Cs of diamonds to choosing the right metal and setting style, this guide will help you navigate all aspects of engagement ring shopping.\n\nThe 4Cs – carat, cut, color, and clarity – are the universal standards used to evaluate diamond quality. Carat refers to the weight of the diamond, with one carat equaling 200 milligrams. Cut determines how well a diamond interacts with light, affecting its brilliance and sparkle. Color grades the absence of color in white diamonds, with completely colorless diamonds being most valuable. Clarity measures the presence of internal or external flaws.\n\nBeyond the diamond itself, consider the metal for the band. Platinum is durable but expensive; white gold offers a similar look at a lower price point; yellow gold is traditional and flattering on many skin tones; and rose gold provides a romantic, vintage feel.\n\nThe setting style significantly impacts the ring's overall appearance. Popular options include solitaire (a single stone), halo (a center stone surrounded by smaller diamonds), three-stone (symbolizing past, present, and future), and vintage-inspired designs featuring intricate details.\n\nWhen determining your budget, the old guideline of spending two months' salary is outdated. Instead, consider what's comfortable for your financial situation. Remember that an engagement ring is an investment in quality – it's better to prioritize excellent cut over size for maximum brilliance.\n\nFinally, pay attention to your partner's style and preferences. Notice the jewelry they currently wear, or enlist friends and family to help gather insights. Many couples now shop together to ensure the perfect choice for this meaningful symbol of commitment.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-51.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "12 min",
    category: "Guides"
  },
  {
    id: "3",
    title: "Ethical Sourcing in the Gemstone Industry",
    excerpt: "Understanding the importance of ethically sourced gemstones and how to identify them.",
    content: "The gemstone industry has faced challenges regarding environmental impact and fair labor practices. This article examines the growing movement for ethically sourced gemstones, certification processes, and how consumers can make responsible choices.\n\nEthical sourcing in the gemstone industry encompasses several critical aspects: fair labor practices, minimal environmental impact, transparency in supply chains, and community benefits. The movement gained momentum in the late 1990s and early 2000s following increased awareness of 'conflict diamonds' used to fund civil wars in several African nations.\n\nCertification systems have emerged to help consumers identify ethically sourced gemstones. The Kimberley Process Certification Scheme focuses specifically on preventing the flow of conflict diamonds. However, critics note its limitations, as it doesn't address broader ethical concerns like labor conditions or environmental impact. More comprehensive standards include the Responsible Jewellery Council certification and Fairmined certification for gold and associated gemstones.\n\nTraceability is a key component of ethical sourcing. Some companies now employ blockchain technology to track gemstones from mine to market, providing consumers with verifiable information about a stone's journey. Others focus on direct-trade relationships with specific mines that demonstrate ethical practices.\n\nWhen shopping for ethically sourced gemstones, consumers should ask specific questions: Where was the gemstone mined? Under what conditions? How was it processed? Was fair compensation provided to workers? Reputable jewelers committed to ethical practices will be transparent about their sourcing and able to provide documentation.\n\nAlternatives to traditionally mined gemstones include lab-grown options, which eliminate concerns about mining practices, and vintage or recycled gemstones, which don't require new mining. These options have grown in popularity as environmental and ethical awareness increases among consumers.\n\nBy supporting companies committed to ethical sourcing, consumers can help drive positive change throughout the gemstone industry, encouraging practices that respect both people and the planet.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-27.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "10 min",
    category: "Sustainability"
  },
  {
    id: "4",
    title: "Gemstone Healing Properties: Science or Myth?",
    excerpt: "Examining the historical beliefs about gemstone healing properties and modern scientific perspectives.",
    content: "For centuries, various cultures have attributed healing and metaphysical properties to gemstones. This article explores these traditional beliefs and examines them in the context of modern scientific understanding.\n\nThe use of gemstones for healing purposes dates back thousands of years across numerous civilizations. Ancient Egyptians used lapis lazuli, turquoise, and carnelian for protection and health. Traditional Chinese medicine incorporated jade to draw out negative energy. Ayurvedic traditions in India developed an elaborate system connecting specific gemstones to different aspects of physical and spiritual well-being.\n\nMany contemporary practitioners of crystal healing believe that gemstones possess unique vibrational frequencies that can interact with the human energy field or chakras. Common claims include amethyst for stress relief, rose quartz for emotional healing, and clear quartz for amplifying energy.\n\nFrom a scientific perspective, there is no empirical evidence supporting direct physical healing properties of gemstones. The beneficial effects reported by users are typically attributed to the placebo effect – the well-documented phenomenon where belief in a treatment's efficacy can produce real physiological improvements.\n\nSome researchers have proposed that certain gemstones might have subtle electromagnetic interactions with the body due to their mineral composition, but such effects have not been conclusively demonstrated in controlled studies. Tourmaline and quartz do exhibit piezoelectric properties (generating an electrical charge under pressure), but at levels too low to significantly affect human physiology.\n\nWhile scientific evidence doesn't support direct healing properties, many mental health professionals acknowledge that gemstones can serve as effective mindfulness tools. The practice of focusing on a beautiful stone while setting intentions or during meditation can reduce stress and promote psychological well-being.\n\nUltimately, the value of gemstones in wellness practices may lie in their ability to serve as meaningful symbols and focal points for intention-setting rather than in any inherent physical healing capacity. Whether approached through the lens of ancient traditions or modern mindfulness practices, gemstones continue to hold special significance for many people seeking balance and well-being.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-20.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "15 min",
    category: "Wellness"
  },
  {
    id: "5",
    title: "Emerging Trends in Gemstone Jewelry Design",
    excerpt: "Discover the latest trends shaping contemporary gemstone jewelry design across the globe.",
    content: "From minimalist settings to bold color combinations, gemstone jewelry design is constantly evolving. This article highlights the current trends influencing designers and how technological advances are opening new possibilities in jewelry creation.\n\nContemporary gemstone jewelry design is experiencing a renaissance, blending traditional craftsmanship with modern aesthetics and technological innovations. Several key trends have emerged in recent years, reshaping how designers approach their creations.\n\nMinimalism continues to influence the market, with clean lines and understated settings that allow exceptional gemstones to take center stage. The 'less is more' philosophy extends to mixing unexpected gemstone combinations in subtle ways that create visual interest without overwhelming the eye.\n\nColor trends have shifted toward bold contrasts and unusual pairings. Complementary colors (those opposite on the color wheel) create dynamic tension in designs, while analogous colors (those adjacent on the color wheel) offer sophisticated harmony. Designers are increasingly embracing stones previously considered 'secondary,' such as spinels, tourmalines, and garnets in vivid hues.\n\nSustainability has become a central consideration in contemporary design. This includes using ethically sourced stones, recycled metals, and production methods that minimize environmental impact. Many designers now tell the 'story' behind their pieces, emphasizing traceability and responsible practices.\n\nTechnology has revolutionized what's possible in jewelry design. 3D printing allows for intricate structures that would be difficult to achieve with traditional techniques, while advanced laser cutting enables precise gemstone shaping. These technologies have democratized custom design, making bespoke pieces more accessible.\n\nMixing metals within single pieces has gained popularity, breaking traditional rules about keeping metals uniform. Rose gold combined with white metals creates contemporary contrast, while mixing various colors of gold can enhance different gemstone hues.\n\nFinally, versatility and transformability have become highly valued. Modular designs with interchangeable elements allow wearers to customize their jewelry for different occasions, maximizing both expression and investment value.\n\nThese emerging trends reflect a broader shift toward personalization, meaning, and sustainability in luxury consumption – values that continue to shape the future of gemstone jewelry design.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-13.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "7 min",
    category: "Trends"
  },
  {
    id: "6",
    title: "The Rarest Gemstones in the World",
    excerpt: "An exploration of the world's most scarce and valuable gemstones and what makes them so special.",
    content: "Beyond the commonly known precious stones lie incredibly rare gemstones that few people will ever see in person. This article explores gems like Painite, Jeremejevite, and Red Beryl, detailing their properties, discovery stories, and astronomical values.\n\nWhile diamonds, emeralds, rubies, and sapphires dominate popular consciousness, the world of truly rare gemstones extends far beyond these familiar treasures. Some gemstones are so scarce that they're known only to dedicated collectors and mineralogists.\n\nPainite holds the Guinness World Record as one of the rarest gemstones on Earth. First discovered in Myanmar in the 1950s by British mineralogist Arthur C.D. Pain, for decades only a handful of specimens existed. With its rich reddish-brown to orange-red color derived from high iron content, painite specimens can command prices exceeding $60,000 per carat for gem-quality stones.\n\nRed Beryl (also called Bixbite or Red Emerald) occurs in only one location in Utah's Wah Wah Mountains. Its vibrant raspberry-red color comes from manganese traces within the beryl crystal structure. With an estimated ratio of one gem-quality red beryl for every 150,000 gem-quality diamonds, prices can reach $10,000 per carat for exceptional specimens.\n\nJeremejevite, first discovered in Siberia in 1883, is an aluminum borate mineral known for its colorless to pale blue crystals with exceptional clarity. Most specimens come from Namibia today, but the total world supply could fit in a small bowl. Fine examples sell for $2,000-$3,000 per carat.\n\nGrandidierite, discovered in Madagascar in 1902, displays a striking blue-green color due to iron and aluminum in its crystal structure. Until recently, gem-quality specimens were virtually nonexistent, but new finds in Madagascar have slightly increased availability. Transparent examples can sell for more than $20,000 per carat.\n\nMusgravite, first found in Australia's Musgrave Range in 1967, resembles tanzanite but is exponentially rarer. This grayish-purple to greenish stone wasn't found in gem quality until 1993, and fewer than 20 faceted specimens existed as of 2005. Prices typically exceed $35,000 per carat.\n\nThese extraordinary gemstones represent not just geological rarities but windows into Earth's complex mineral-forming processes. Their value derives not only from scarcity but from the unique conditions required for their formation – specific combinations of elements, temperature, pressure, and time that rarely align in nature.",
    image: "/lovable-uploads/photo_2025-03-17_00-37-02.jpg",
    author: "ONEXONE",
    date: "March 17, 2025",
    readTime: "9 min",
    category: "Education"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the current post based on the id parameter
    const currentPost = blogPosts.find(post => post.id === id);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts (same category but different post)
      const related = blogPosts.filter(
        p => p.category === currentPost.category && p.id !== currentPost.id
      ).slice(0, 3);
      
      setRelatedPosts(related);
    } else {
      // Redirect to blog index if post not found
      navigate('/blog');
    }
  }, [id, navigate]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-gem-charcoal/70 hover:text-gem-charcoal transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-8 text-center" ref={ref}>
            <div className={cn(
              "inline-block bg-gem-charcoal/10 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {post.category}
            </div>
            
            <h1 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              {post.title}
            </h1>
            
            <div className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gem-charcoal/70 transition-all duration-900",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} read
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className={cn(
            "relative w-full aspect-video mb-12 rounded-xl overflow-hidden transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gem-charcoal/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Share this article</h3>
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5 text-gem-charcoal/70" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative overflow-hidden aspect-video">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <p className="text-gem-charcoal/70 text-sm mb-6 line-clamp-3 flex-grow">
                          {relatedPost.excerpt}
                        </p>
                        
                        <div className="mt-auto">
                          <button className="group inline-flex items-center text-gem-charcoal text-sm font-medium">
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
