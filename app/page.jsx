import Image from "next/image";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/meals-background.jpg"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white-700 h-[50%] w-[70%]">
          <h1 className="text-2xl font-bold text-gray-200 ">Search recipes</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
