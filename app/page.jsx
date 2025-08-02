"use client";
import Hero from "@/components/Home/Hero";
import TrainingProgramCard from "@/components/Home/TrainingProgramCard";
import WhyChooseUsCard from "@/components/Home/WhyChooseUsCard";
import {
  trainers,
  trainingPrograms,
  transformations,
  whyChooseUs,
} from "@/constants/constant";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TransformationCarousel from "@/components/Home/TransformationCarousel";
import TrainerCard from "@/components/Home/TrainerCard";
import BookTrialBanner from "@/components/Home/BookTrialBanner";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Training Programs */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
              Training Programs We Offer For You
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-sm  text-gray-300 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
              officia laudantium dicta earum hic facere possimus aut amet!
              Libero, ipsam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trainingPrograms.map((program) => (
              <TrainingProgramCard
                key={program.name}
                name={program.name}
                image={program.image}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-sm text-gray-300 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {whyChooseUs.map((item) => (
              <WhyChooseUsCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                features={item.features}
                highlight={item.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
              Proof Over Promises
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-sm text-gray-300 text-center">
              We're not about hype — just real people making real progress.
              Here's what results look like.
            </p>
          </div>
          <TransformationCarousel />
        </div>
      </section>

      {/* Our Trainers */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 pb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
              Our Trainers
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-sm text-gray-300 text-center">
              Our certified trainers are passionate about helping you achieve
              your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {trainers.map((trainers, index) => (
              <TrainerCard key={index} trainer={trainers} />
            ))}
          </div>
        </div>
      </section>

      {/* Book Trial Banner */}
      <BookTrialBanner />
    </div>
  );
}

export default HomePage;
