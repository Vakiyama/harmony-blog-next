import { useEffect, useState } from 'react';
import { Author } from '../app/types/authorsors';
import { Icon } from '@iconify/react/dist/iconify.js';

export function TeamMemberCard({ member }: { member: Author }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [description, setDescription] = useState('');

  function calculateDescription() {
    const maxLength = (window.innerWidth * window.innerHeight) / 2000;

    const newDescription = isExpanded
      ? member.description
      : member.description.length > maxLength
        ? member.description.slice(0, maxLength) + '...'
        : member.description;

    setDescription(newDescription);
  }

  useEffect(() => {
    calculateDescription();
    window.addEventListener('resize', calculateDescription);
    return () => {
      window.removeEventListener('resize', calculateDescription);
    };
  }, []);

  return (
    <div className="w-full max-w-[523px] mb-[35px]">
      <img
        className="border border-white rounded-[25px] w-full h-auto max-w-[300px] aspect-square object-cover"
        src={member.profileIconSrc}
        alt={member.name}
      />
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <h2 className="text-white text-[42.78px] sfpro-font font-normal">
            {member.name}
          </h2>
          <h3 className="text-[#949494] text-[25.53px] sfpro-font font-normal break-words">
            {member.role}
          </h3>
        </div>
        <p className="text-white text-[20.39px] sfpro-font font-normal break-words w-full mt-[30px]">
          {isExpanded ? member.description : description}
        </p>
        {!isExpanded && member.description !== description && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-2 flex items-center hover:opacity-75 cursor-pointer"
          >
            <p className="text-[#949494]">
              {isExpanded ? 'Show Less' : 'Show More'}
            </p>
            <div className="pl-1 flex relative bottom-[200px]">
              <Icon className="text-[#949494]" icon="ph-caret-circle-down" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
