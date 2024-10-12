'use client';

import Image1 from '@/src/assets/images/teamImage.png';
import Image2 from '@/src/assets/images/teamImage2.jpg';
import Image3 from '@/src/assets/images/teamImage3.jpg';

import { useEffect, useRef } from 'react';
import { useState } from 'react';
const images = [Image1, Image2, Image3].map((image) => image.src);

export function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const [animations, setAnimations] = useState(false);
  const carouselParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = calculateCarouselOffset();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      if (carouselIndex === images.length - 1) return setCarouselIndex(0);
      setAnimations(true);
      setCarouselIndex(carouselIndex + 1);
    }, 3500);

    if (width) setImageWidth(width);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [imageWidth, carouselIndex]);

  function handleResize() {
    const width = calculateCarouselOffset();
    if (width) setImageWidth(width);
    setCarouselIndex(carouselIndex);
    setAnimations(false);
    setTimeout(() => {
      setAnimations(true);
    }, 100);
  }

  function calculateCarouselOffset() {
    if (!(carouselParentRef.current instanceof HTMLDivElement)) return;

    const { width } = carouselParentRef.current.getBoundingClientRect();
    return width;
  }

  return (
    <div
      className="overflow-hidden relative w-full aspect-[1.25] rounded-[25px] bg-[#181716]"
      ref={carouselParentRef}
    >
      {images.map((src, index) => (
        <img
          key={index}
          className={`w-full px-5 h-full absolute duration-1000 ${animations ? 'transition-all' : 'transition-none'} object-cover`}
          src={src}
          alt="Team Group Photo"
          style={{
            bottom: 0,
            left: 0,
            translate: `${-((carouselIndex - index) * imageWidth)}px`,
          }}
        />
      ))}
      <div className="absolute w-full flex flex-row gap-1.5 items-center justify-center bottom-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`rounded-full w-1.5 aspect-square bg-white ${index === carouselIndex ? 'opacity-100' : 'opacity-60'}`}
          />
        ))}
      </div>
    </div>
  );
}
