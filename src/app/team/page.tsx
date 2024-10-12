import { getDB } from '@/src/db';

import { TeamMemberCard } from '../../components/TeamMemberCard';
import { authorTable } from '@/src/db/schema/author';
import { Carousel } from './carousel';
import { getAuthorInfo } from '@/src/services/authorActions';

export default async function Team() {
  const authors = await getAuthorInfo();
  console.log(authors);

  return (
    <div className="flex flex-col items-center px-[20px] visible">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-[123.20px] max-md:text-6xl ESRG-TRIAL-font font-normal mb-[50px] text-center">
          Our Team!
        </h1>

        <Carousel />
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
