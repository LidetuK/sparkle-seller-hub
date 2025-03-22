
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

interface Certificate {
  src: string;
  alt: string;
}

interface CertificationsCarouselProps {
  certificates: Certificate[];
}

const CertificationsCarousel = ({ certificates }: CertificationsCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {certificates.map((certificate, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-2 pr-2">
            <div className="relative h-[320px] sm:h-[350px] md:h-[380px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <img
                src={certificate.src}
                alt={certificate.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium text-sm">{certificate.alt}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-6 gap-4">
        <CarouselPrevious className="relative static left-0 right-0 translate-y-0 h-10 w-10 bg-white hover:bg-gray-100 border border-gray-200" />
        <CarouselNext className="relative static left-0 right-0 translate-y-0 h-10 w-10 bg-white hover:bg-gray-100 border border-gray-200" />
      </div>
    </Carousel>
  );
};

export default CertificationsCarousel;
