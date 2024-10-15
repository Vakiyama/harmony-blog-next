import Link from 'next/link';
import ValueCard from '../components/ValueCard';
import { Blogs } from '../components/Blogs';
import { getAllBlogs } from '../services/blogActions';

export default async function Home() {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className="w-full">
        <div className="py-20">
          <div className="dark:dark:text-white text-black text-[6vw] max-md:text-[12vw] font-normal max-sm:pb-4 font-title">
            <h1>Harmony</h1>
          </div>
          <div className="dark:text-white text-black text-[2vw] max-md:text-[6vw] font-normal pb-10">
            <h2>Your partner in care!</h2>
          </div>
          <div className="dark:text-white text-black text-[1.5vw] max-md:text-[3vw] font-normal pb-10 max-sm:max-w-[65vw]">
            Harmony empowers caregivers with AI-driven tools that ease daily
            burdens, foster connection,
            <br /> and support underrepresented communities. Simple,
            compassionate care at your fingertips.
          </div>
          <Link
            className="dark:text-white text-black text-[1.7vw] max-md:text-[3vw] font-normal border dark:border-white border-black rounded-full p-4 max-sm:p-2"
            href="/about"
          >
            Learn More!
          </Link>
        </div>
        <div className="pt-36 max-sm:pt-12">
          <h1 className="dark:text-white text-black font-normal font-title text-[3.5vw] max-md:text-[6vw] mb-12 max-md:mb-8">
            What we Value
          </h1>
          <div className="flex max-xl:gap-8 gap-20 max-xl:flex-col ">
            <ValueCard
              number="01"
              title="COMMUNITY"
              description="Harmony unites caregivers and families, creating a compassionate supportive space that strengthens bonds and lifts up underrepresented voices."
            />
            <ValueCard
              number="02"
              title="CONNECTION"
              description="Harmony bridges the emotional gap between caregivers and loved ones, ensuring every moment of care is a shared connected experience."
            />
            <ValueCard
              number="03"
              title="CARE"
              description="At its heart, Harmony empowers caregivers to deliver care with confidence, easing burdens so they can focus on what truly matters—nurturing others."
            />
          </div>
        </div>
        <h1 className="dark:text-white text-black font-normal text-[3.5vw] max-md:text-[6vw] mb-12 pt-20 font-title">
          Explore our Blog!
        </h1>
        <Blogs blogs={blogs} />
      </div>
    </>
  );
}
