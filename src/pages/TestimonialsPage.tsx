
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
    name: "Jennifer K.",
    location: "New York, USA",
    rating: 5,
    date: "October 15, 2023",
    title: "Absolutely Stunning Diamond Engagement Ring",
    content: "I can't express how thrilled I am with my purchase from ONEX. The diamond engagement ring I received exceeded all my expectations. The craftsmanship is impeccable, and the diamond's brilliance is breathtaking. The entire shopping experience was seamless, and their customer service was exceptional. My fiancée was speechless when she saw it!",
    productName: "Emerald Cut Diamond Ring",
    productImage: "https://images.unsplash.com/photo-1585149869791-8eeec5729d84?q=80&w=2970&auto=format&fit=crop",
    verified: true
  },
  {
    id: "2",
    name: "Robert T.",
    location: "London, UK",
    rating: 5,
    date: "September 3, 2023",
    title: "Exceptional Quality and Service",
    content: "I purchased a sapphire pendant for my wife's birthday, and I couldn't be happier with my choice. The gemstone's color is rich and vibrant, exactly as pictured on the website. The packaging was elegant and made for a perfect presentation. ONEX's attention to detail is remarkable, and their team was incredibly helpful in helping me select the right piece.",
    productName: "Sapphire Pendant",
    productImage: "https://images.unsplash.com/photo-1600003263760-95b25a0ece9a?q=80&w=1932&auto=format&fit=crop",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    verified: true
  },
  {
    id: "3",
    name: "Sophia L.",
    location: "Toronto, Canada",
    rating: 4,
    date: "August 17, 2023",
    title: "Beautiful Ruby Earrings, Minor Shipping Delay",
    content: "The ruby earrings I ordered are absolutely beautiful and exactly what I was looking for. The color is vivid, and they catch the light perfectly. I'm deducting one star only because there was a delay in shipping that wasn't communicated proactively. However, when I reached out, customer service was responsive and resolved the issue quickly. Overall, I'm very satisfied with my purchase.",
    productName: "Ruby Earrings",
    verified: false
  },
  {
    id: "4",
    name: "Michael D.",
    location: "Sydney, Australia",
    rating: 5,
    date: "July 22, 2023",
    title: "Heirloom Quality Emerald Ring",
    content: "I purchased an emerald ring as an anniversary gift, and it's truly a piece that will become a family heirloom. The emerald's deep green color is mesmerizing, and the setting is both elegant and secure. The certification provided gives me confidence in the authenticity and quality of the gemstone. ONEX has earned a customer for life!",
    productName: "Emerald Silver Ring",
    productImage: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    verified: true
  },
  {
    id: "5",
    name: "Emma W.",
    location: "Paris, France",
    rating: 5,
    date: "June 10, 2023",
    title: "Exquisite Craftsmanship and Fast Delivery",
    content: "The amethyst bracelet I ordered arrived quickly and was even more beautiful in person than in the photos. The craftsmanship is exquisite, with attention paid to every detail. I've received countless compliments whenever I wear it. The piece was also packaged beautifully, making it feel like a true luxury experience from start to finish.",
    productName: "Amethyst Bracelet",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    verified: true
  },
  {
    id: "6",
    name: "David H.",
    location: "Chicago, USA",
    rating: 5,
    date: "May 5, 2023",
    title: "Outstanding Custom Design Experience",
    content: "I worked with ONEX to create a custom tanzanite necklace for my wife's 40th birthday. The design team was patient, creative, and truly listened to what I wanted. The final piece exceeded my expectations, and my wife was moved to tears when she opened it. The quality of the gemstone and craftsmanship is outstanding. Well worth the investment for such a special occasion.",
    productName: "Custom Tanzanite Necklace",
    productImage: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=1974&auto=format&fit=crop",
    verified: true
  },
  {
    id: "7",
    name: "Lisa J.",
    location: "Berlin, Germany",
    rating: 4,
    date: "April 18, 2023",
    title: "Beautiful Opal Ring, Sizing Issue Resolved",
    content: "I ordered an opal ring that was absolutely stunning - the play of colors is mesmerizing. Initially, there was an issue with sizing, but customer service was quick to offer a resize at no additional cost. The process was smooth, and I received my perfectly sized ring back within a week. I'm very happy with both the product and the service recovery.",
    productName: "Opal Ring",
    productImage: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1980&auto=format&fit=crop",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    verified: true
  },
  {
    id: "8",
    name: "James B.",
    location: "Singapore",
    rating: 5,
    date: "March 7, 2023",
    title: "Exceptional Value and Quality",
    content: "I researched extensively before purchasing a pair of aquamarine earrings from ONEX, comparing prices and quality across multiple retailers. ONEX offered the best value by far, without compromising on quality. The earrings arrived in perfect condition with proper certification, and they look even more vibrant in person. I'll definitely be returning for future purchases.",
    productName: "Aquamarine Stud Earrings",
    productImage: "https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?q=80&w=2070&auto=format&fit=crop",
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
              Read what our customers have to say about their experiences with ONEX
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
            <button className="gem-button-primary inline-flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Write a Review
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
