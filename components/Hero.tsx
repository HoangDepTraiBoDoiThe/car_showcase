"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleClick = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle text-gray-100">
          Streamline your car rental experience
        </p>
        <CustomButton
          title="Explore cars"
          containerStyle="bg-blue-600 text-white rounded-full mt-10"
          handleClick={handleClick}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
