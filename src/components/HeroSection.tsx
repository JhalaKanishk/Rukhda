"use client";

import Carousel3D from "@/components/Carousel3D";

export default function HeroSection() {
  return (
    // <section id="home" className="w-full pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
    <section
      id="home"
      className="w-full pt-[80px] pb-12 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Image Carousel */}
          <div className="order-2 lg:order-1">
            <Carousel3D />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Vision
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A campaign rooted in responsibility— We envision a world where
                every individual contributes to a greener tomorrow. Inspired by
                the urgency of global warming, we promote tree plantation and
                green living to ensure a cleaner, healthier earth for the
                generations that follow.
              </p>
            </div>

            {/* Additional Info */}
          </div>
        </div>
      </div>
    </section>
  );
}
