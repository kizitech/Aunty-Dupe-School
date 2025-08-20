"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  alt: string;
  text: string;
  icon: React.ReactNode;
};

interface SlideshowProps {
  slides: Slide[];
  width?: number;
  height?: number;
  interval?: number; 
}

export default function Slideshow({
  slides,
  width = 600,
  height = 400,
  interval = 6000,
}: SlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative">
        <div
          className={"border-4 border-red-600 h-64 md:h-80 lg:h-96 rounded-lg shadow-2xl overflow-hidden"}
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            width={width}
            height={height}
            className={`mx-auto object-cover h-full transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
          />

          <div
            className={`absolute -bottom-4 left-[22%] md:-bottom-6 md:-left-[8%] 
              bg-white p-2 md:p-4 rounded-lg shadow-lg`}
          >
            <div className="flex items-center space-x-2">
              {slides[current].icon}
              <span className={`text-sm md:text-base font-medium md:font-semibold transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
              }`}>
                {slides[current].text}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mt-8">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-500 ${i === current ? "bg-red-600 w-6" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
