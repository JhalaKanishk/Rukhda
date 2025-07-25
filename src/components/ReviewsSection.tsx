"use client";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Mayank Raj",
      rating: 5,
      text: "Rukhada completely transformed my apartment! The plants they selected not only look beautiful but are thriving even with my busy schedule. The monthly care service is a game-changer.",
      role: "Apartment Owner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Nihal Rathore",
      rating: 5,
      text: "Our office productivity increased noticeably after Rukhada installed our green corner. The air feels fresher, and employees love the natural atmosphere. Highly recommend their services!",
      role: "Office Manager",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Chestha",
      rating: 5,
      text: "The balcony garden they designed exceeded all my expectations. It is now my favorite spot for morning coffee. The teams expertise in selecting the right plants for our climate is impressive.",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Molik",
      rating: 5,
      text: "Used Rukhada for our wedding decoration and guests are still talking about it! The natural arrangements created such a romantic and elegant atmosphere. Absolutely stunning work.",
      role: "Event Host",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lisa Wang",
      rating: 5,
      text: "As someone who travels frequently, their plant care service has been a lifesaver. I come home to healthy, thriving plants every time. The app updates keep me connected to my garden.",
      role: "Frequent Traveler",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Miller",
      rating: 5,
      text: "The consultation was incredibly detailed and personalized. They considered our pets, lighting conditions, and lifestyle to create the perfect indoor garden. Five stars is not enough!",
      role: "Pet Owner",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 transition-all duration-300 ${
          index < rating
            ? "text-yellow-400 fill-current drop-shadow-sm"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-accent/5 via-background to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Quote className="w-8 h-8 text-primary" />
            </div>
            {/* <h3 className="text-4xl md:text-3xl font-bold text-primary mb-6 leading-tight">What Our Clients Say</h3> */}
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
              What Our Clients Say
            </h3>

            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-accent rounded-full mx-4"></div>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Do not just take our word for it. Hear from our satisfied
              customers who have transformed their spaces with Rukhadas expert
              plant care and décor services.
            </p>
          </div>

          {/* Enhanced Reviews Carousel */}
          <div className="reviews-carousel-wrapper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mb-12 pb-12"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative bg-card/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between h-full overflow-hidden">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Quote decoration */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="w-12 h-12 text-primary" />
                    </div>

                    <div className="relative z-10">
                      {/* Rating with enhanced styling */}
                      <div className="flex items-center justify-center space-x-1 mb-6 p-3 bg-primary/5 rounded-full w-fit mx-auto group-hover:bg-primary/10 transition-colors duration-300">
                        {renderStars(review.rating)}
                      </div>

                      {/* Review Text with better typography */}
                      <p className="text-muted-foreground leading-relaxed text-center italic text-lg font-medium">
                        &quot;{review.text}&quot;
                      </p>
                    </div>

                    {/* Enhanced Author Info */}
                    <div className="relative z-10 border-t border-border/30 pt-6">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card"></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-primary text-lg group-hover:text-primary/90 transition-colors">
                            {review.name}
                          </h4>
                          <p className="text-muted-foreground text-sm font-medium">
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          {/* <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-8 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
