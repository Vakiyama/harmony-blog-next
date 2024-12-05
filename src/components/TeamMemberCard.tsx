"use client";

import { useEffect, useState } from "react";
import { Author } from "../db/schema/author";
import { Icon } from "@iconify/react/dist/iconify.js";

import TinaThumbnail from "../assets/images/tina.jpg";
import MaxThumbnail from "../assets/images/max.jpg";
import ChelseaThumbnail from "../assets/images/chelsea.png";
import AnnabelleThumbnail from "../assets/images/annabelle.jpg";
import KeonaThumbnail from "../assets/images/keona.jpg";
import AngusThumbnail from "../assets/images/angus.jpg";
import VitorThumbnail from "../assets/images/vitor.jpg";
import EmmyThumbnail from "../assets/images/emmy.png";
import LinkedInSvg from "./icons/linkedIn";

const teamImages = [
  TinaThumbnail,
  MaxThumbnail,
  ChelseaThumbnail,
  AnnabelleThumbnail,
  KeonaThumbnail,
  AngusThumbnail,
  VitorThumbnail,
  EmmyThumbnail,
].map((image) => image.src);

const LINKEDIN_LINKS: { [key: string]: string } = {
  "Tina Duong": "https://www.linkedin.com/in/tina-duong-8b0653243/",
  "Max Shuyu Li": "https://www.linkedin.com/in/max-shuyu-li-7066832b3/",
  "Chelsea Woo": "https://www.linkedin.com/in/chelsea-woo-5b7a3b230/",
  "Annabelle Chen": "https://www.linkedin.com/in/annabelle-chenn/",
  "Keona Aguilar": "https://www.linkedin.com/in/keona-aguilar-71425230a/",
  "Angus Ng": "https://www.linkedin.com/in/ng-angus/",
  "Vitor Akiyama": "https://www.linkedin.com/in/vitor-akiyama/",
  "Emmy Nguyen": "https://www.linkedin.com/in/emmy-nguyen-m/",
};

export function TeamMemberCard({ member }: { member: Author }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [description, setDescription] = useState("");

  const linkedInLink = LINKEDIN_LINKS[member.name];

  function calculateDescription() {
    const maxLength = (window.innerWidth * window.innerHeight) / 2000;

    const newDescription = isExpanded
      ? member.description
      : member.description.length > maxLength
      ? member.description.slice(0, maxLength) + "..."
      : member.description;

    setDescription(newDescription);
  }

  useEffect(() => {
    calculateDescription();
    window.addEventListener("resize", calculateDescription);
    return () => {
      window.removeEventListener("resize", calculateDescription);
    };
  }, []);

  return (
    <div className="w-full max-w-[523px] mb-[35px]">
      <img
        className="border border-white rounded-[25px] w-full h-auto max-w-[300px] aspect-square object-cover"
        src={teamImages.find((image) =>
          image
            .toLowerCase()
            .includes(
              member.profileIconSrc
                .toLowerCase()
                .split("/")
                .at(-1)!
                .split(".")[0]!
            )
        )}
        alt={member.name}
      />
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <h2 className="dark:text-white text-black text-[42.78px] sfpro-font font-normal">
            {member.name}
          </h2>
          <h3 className="text-[#949494] text-[25.53px] sfpro-font font-normal break-words">
            {member.role}
          </h3>
          <a href={linkedInLink} target="_blank">
            <LinkedInSvg className="pt-4 w-10 md:w-12 lg:w-14" />
          </a>
        </div>
        <p className="dark:dark:text-white text-black text-[20.39px] sfpro-font font-normal break-words w-full mt-[30px]">
          {isExpanded ? member.description : description}
        </p>
        {!isExpanded && member.description !== description && (
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="mt-2 flex items-center hover:opacity-75 cursor-pointer"
          >
            <p className="text-[#949494]">
              {isExpanded ? "Show Less" : "Show More"}
            </p>
            <div className="pl-1 flex relative bottom-[0px]">
              <Icon className="text-[#949494]" icon="ph-caret-circle-down" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
