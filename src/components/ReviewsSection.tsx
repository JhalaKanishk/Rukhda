"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Rukhda completely transformed my apartment! The plants they selected not only look beautiful but are thriving even with my busy schedule. The monthly care service is a game-changer.",
      role: "Apartment Owner",
      location: "Downtown"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Our office productivity increased noticeably after Rukhda installed our green corner. The air feels fresher, and employees love the natural atmosphere. Highly recommend their services!",
      role: "Office Manager",
      location: "Tech District"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The balcony garden they designed exceeded all my expectations. It is now my favorite spot for morning coffee. The teams expertise in selecting the right plants for our climate is impressive.",
      role: "Homeowner",
      location: "Suburbs"
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Used Rukhda for our wedding decoration and guests are still talking about it! The natural arrangements created such a romantic and elegant atmosphere. Absolutely stunning work.",
      role: "Event Host",
      location: "Garden Venue"
    },
    {
      name: "Lisa Wang",
      rating: 5,
      text: "As someone who travels frequently, their plant care service has been a lifesaver. I come home to healthy, thriving plants every time. The app updates keep me connected to my Rukhda.",
      role: "Frequent Traveler",
      location: "City Center"
    },
    {
      name: "James Miller",
      rating: 5,
      text: "The consultation was incredibly detailed and personalized. They considered our pets, lighting conditions, and lifestyle to create the perfect indoor garden. Five stars is not enough!",
      role: "Pet Owner",
      location: "Residential Area"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-brown-text max-w-3xl mx-auto leading-relaxed">
              Do not just take our word for it. Hear from our satisfied customers who have transformed
              their spaces with Rukhdas expert plant care and décor services.
            </p>
          </div>

          {/* Reviews Grid */}
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="mb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-card p-6 rounded-2xl shadow-md border border-primary/10 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between h-full">

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4 mt-4">
                    {renderStars(review.rating)}
                  </div>


                  {/* Review Text */}
                  <p className="text-brown-text mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-primary/10 pt-4">
                    <h4 className="font-bold text-primary text-lg">{review.name}</h4>
                    <p className="text-brown-light text-sm">{review.role}</p>
                    <p className="text-brown-light text-sm">{review.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-y-12 gap-x-8 text-center mt-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "5000+", label: "Plants Cared For" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "50+", label: "Events Decorated" }
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-brown-text font-medium">{stat.label}</div>
              </div>
            ))}
          </div>


          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-primary mb-6">Trusted & Certified</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-brown-light text-sm">
              {[
                "Licensed Plant Care Specialists",
                "Eco-Certified Practices",
                "Insured & Bonded",
                "Award-Winning Service"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;