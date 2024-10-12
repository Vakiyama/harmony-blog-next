import { getDB } from '@/src/db';

async function getAuthorInfo() {
  'use server';
  const db = await getDB();
  const authors = db.select().from(authorTable);
  return authors;
}

import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { TeamMemberCard } from '../../components/TeamMemberCard';
import { authorTable } from '@/src/db/schema/author';

const images = [
  './assets/images/teamImage.png',
  './assets/images/teamImage3.jpg',
  './assets/images/teamImage2.jpg',
];

export default async function Team() {
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

  const authors = await getAuthorInfo();

  return (
    <div className="flex flex-col items-center px-[20px] visible">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-[123.20px] max-md:text-6xl ESRG-TRIAL-font font-normal mb-[50px] text-center">
          Our Team!
        </h1>

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

        {/*<p className="text-white text-[26px] sfpro-font font-normal mt-[35px] mb-[134px] text-center">
          This team wins!
        </p>*/}

        <div className="grid grid-cols-2 gap-[65px] justify-center max-md:grid-cols-1 mt-[120px]">
          {authors.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
