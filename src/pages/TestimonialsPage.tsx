
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, MessageSquare, User, ThumbsUp } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  productName?: string;
  productImage?: string;
  avatar?: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Dr John NEUHAUS",
    location: "USA 🇺🇸",
    rating: 5,
    date: "October 15, 2024",
    title: "Absolutely Stunning Ethiopian Ruby Engagement Ring",
    content: "I can't express how thrilled I am with my purchase of Ethiopian Ruby from ONEX. The gemstone exceeded all my expectations. The craftsmanship is impeccable, and the ruby's brilliance is breathtaking. The entire shopping experience was seamless, and their customer service was exceptional. My fiancée was speechless when she saw it!",
    verified: true
  },
  {
    id: "2",
    name: "Abdi H.",
    location: "Addis Ababa, Ethiopia",
    rating: 5,
    date: "September 3, 2024",
    title: "Exceptional Quality of Ethiopian Tantalum",
    content: "I purchased Ethiopian Tantalum for my project, and I couldn't be happier with the quality. The metal's strength and resilience are remarkable, exactly as described on the website. ONEX's attention to detail in sourcing such rare material is impressive, and their team was very helpful throughout the process.",
    verified: true
  },
  {
    id: "3",
    name: "Mekdes A.",
    location: "Gondar, Ethiopia",
    rating: 4,
    date: "August 17, 2024",
    title: "Beautiful Ethiopian Sapphire, Minor Shipping Delay",
    content: "The Ethiopian Sapphire I ordered is absolutely beautiful, and it's just what I was looking for. The color is vivid, and it sparkles in the light. I'm deducting one star due to a shipping delay that wasn't communicated in advance. However, the customer service team quickly resolved the issue. I'm still very satisfied with my purchase.",
    verified: true
  },
  {
    id: "4",
    name: "Tewodros G.",
    location: "Bahir Dar, Ethiopia",
    rating: 5,
    date: "July 22, 2024",
    title: "Heirloom Quality Ethiopian Tourmaline Ring",
    content: "I purchased an Ethiopian Tourmaline ring, and it's truly a piece that will become a family heirloom. The tourmaline's colors are mesmerizing, and the setting is elegant and secure. The certification gives me confidence in the authenticity of this remarkable gemstone. ONEX has earned a customer for life!",
    verified: true
  },
  {
    id: "5",
    name: "Saba W.",
    location: "Dire Dawa, Ethiopia",
    rating: 5,
    date: "June 10, 2025",
    title: "Exquisite Craftsmanship and Fast Delivery of Ethiopian Emerald",
    content: "The Ethiopian Emerald necklace I ordered arrived quickly and was even more beautiful in person than in the photos. The craftsmanship is exquisite, with attention paid to every detail. I've received countless compliments whenever I wear it. The piece was also packaged beautifully, making it feel like a true luxury experience from start to finish.",
    verified: true
  },
  {
    id: "6",
    name: "Tesfaye B.",
    location: "Mekelle, Ethiopia",
    rating: 5,
    date: "May 5, 2025",
    title: "Outstanding Custom Ethiopian Opal Design",
    content: "I worked with ONEX to create a custom Ethiopian Opal necklace for my wife’s birthday. The design team was patient, creative, and truly listened to what I wanted. The final piece exceeded my expectations, and my wife was overjoyed when she opened it. The quality of the opal and craftsmanship is outstanding. Worth every penny for such a special gift.",
    verified: true
  },
  {
    id: "7",
    name: "Rahel F.",
    location: "Jimma, Ethiopia",
    rating: 4,
    date: "April 18, 2025",
    title: "Beautiful Ethiopian Aquamarine Studs, Sizing Issue Resolved",
    content: "I ordered a pair of Ethiopian Aquamarine Studs, and they are absolutely stunning. The play of colors in the aquamarine is mesmerizing. Initially, there was a minor issue with the sizing, but customer service offered a quick solution with no extra charge. I received my perfectly sized studs in less than a week. I’m very happy with both the product and the service recovery.",
    verified: true
  },
  {
    id: "8",
    name: "Yonas M.",
    location: "Hawassa, Ethiopia",
    rating: 5,
    date: "March 7, 2025",
    title: "Exceptional Value and Quality of Ethiopian Lithium Ore",
    content: "I researched extensively before purchasing Ethiopian Lithium Ore from ONEX, comparing prices and quality across multiple retailers. ONEX offered the best value without compromising on quality. The ore arrived in perfect condition with proper certification, and it’s even more vibrant in person. I’ll definitely return for future purchases.",
    verified: false
  }
];

const TestimonialsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState<number | null>(null);
  const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (filter === null) {
      setFilteredReviews(reviews);
    } else {
      setFilteredReviews(reviews.filter(review => review.rating === filter));
    }
  }, [filter]);

  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  
  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(review => review.rating === rating).length;
    const percentage = (count / reviews.length) * 100;
    return { rating, count, percentage };
  });

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
              Testimonials & Reviews
            </h1>
            <p className={cn(
              "text-lg text-gem-charcoal/70 max-w-2xl mx-auto transition-all duration-1000 delay-100 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              Read what our customers have to say about their experiences with ONEXONE
            </p>
          </div>
          
          {/* Rating Summary */}
          <div className="bg-white rounded-xl shadow-md mb-16 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-gradient-to-br from-gem-charcoal to-gem-charcoal/90 text-white p-8 md:p-10 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold mb-4">{averageRating.toFixed(1)}</div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={cn(
                        "w-5 h-5",
                        star <= Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-white/30"
                      )} 
                    />
                  ))}
                </div>
                <p className="text-white/80 text-sm">Based on {reviews.length} reviews</p>
              </div>
              
              <div className="p-8 md:p-10 md:col-span-2">
                <h3 className="text-xl font-bold mb-6">Rating Distribution</h3>
                
                <div className="space-y-3">
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center gap-3">
                      <div className="flex items-center min-w-[60px]">
                        <span className="font-medium">{item.rating}</span>
                        <Star className="w-4 h-4 ml-1 text-yellow-400 fill-yellow-400" />
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gem-charcoal h-2.5 rounded-full transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      
                      <div className="text-sm text-gem-charcoal/70 min-w-[45px]">
                        {item.count}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Filter buttons */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <button 
                    onClick={() => setFilter(null)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-full transition-colors",
                      filter === null 
                        ? "bg-gem-charcoal text-white" 
                        : "bg-gray-100 text-gem-charcoal/70 hover:bg-gray-200"
                    )}
                  >
                    All Reviews
                  </button>
                  
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button 
                      key={rating}
                      onClick={() => setFilter(rating)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-full transition-colors flex items-center gap-1",
                        filter === rating 
                          ? "bg-gem-charcoal text-white" 
                          : "bg-gray-100 text-gem-charcoal/70 hover:bg-gray-200"
                      )}
                    >
                      {rating} <Star className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.map((review, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <div 
                  key={review.id}
                  ref={ref}
                  className={cn(
                    "bg-white rounded-xl shadow-md p-6 transform",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    "transition-all duration-700 delay-[calc(100ms*var(--index))]"
                  )}
                  style={{"--index": index} as React.CSSProperties}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gem-charcoal/10 flex items-center justify-center">
                        {review.avatar ? (
                          <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-6 h-6 text-gem-charcoal/40" />
                        )}
                      </div>
                      
                      <div>
                        <div className="font-medium flex items-center gap-1">
                          {review.name}
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full flex items-center">
                              <ThumbsUp className="w-3 h-3 mr-0.5" />
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gem-charcoal/60">{review.location}</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gem-charcoal/60">{review.date}</div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={cn(
                          "w-4 h-4",
                          star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{review.title}</h3>
                  <p className="text-gem-charcoal/70 text-sm mb-4">{review.content}</p>
                  
                  {review.productName && (
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                      {review.productImage && (
                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                          <img 
                            src={review.productImage} 
                            alt={review.productName} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="text-xs text-gem-charcoal/60 mb-0.5">Purchased Item</div>
                        <div className="text-sm font-medium">{review.productName}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Add Review */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-gem-charcoal/70 max-w-2xl mx-auto mb-6">
              Have you purchased from ONEX? We'd love to hear about your experience. 
              Your feedback helps us improve and assists other customers in making informed decisions.
            </p>
            <a href="http://localhost:8080/contact">
  <button className="gem-button-primary inline-flex items-center gap-2">
    <MessageSquare className="w-4 h-4" />
    Write a Review
  </button>
</a>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
