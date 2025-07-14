"use client";

import Carousel3D from "@/components/Carousel3D";

export default function HeroSection() {


  return (
    <section id="home" className="w-full pt-6 pb-12 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
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
                Transform Your Space
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our curated collection of modern furniture and
                lighting. Each piece is carefully selected to bring style and
                comfort to your home.
              </p>
            </div>

            {/* Additional Info */}
          </div>
        </div>
      </div>
    </section>
  );
}
