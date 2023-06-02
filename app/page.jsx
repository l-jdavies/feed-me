import Image from "next/image";
import React from "react";
import SearchBar from "./components/SearchBar";

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
        <div className="z-10 h-[20%] w-[60%] sm:h-[40%] md:h-[60%] bg-white/60 rounded-lg flex justify-center flex-col">
          <p className="font-space font-black sm:text-3xl text-sm text-center self-center sm:pb-10 pb-2">
            Enter an ingredient or cuisine below to get started on finding
            something delicious
          </p>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
