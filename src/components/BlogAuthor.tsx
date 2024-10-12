import { Author } from '../db/schema/author';
import { Blog } from '../db/schema/blog';

import TinaThumbnail from '../assets/images/tina.jpg';
import MaxThumbnail from '../assets/images/max.jpg';
import ChelseaThumbnail from '../assets/images/chelsea.png';
import AnnabelleThumbnail from '../assets/images/annabelle.jpg';
import KeonaThumbnail from '../assets/images/keona.jpg';
import AngusThumbnail from '../assets/images/placeholder.jpg';
import VitorThumbnail from '../assets/images/vitor.jpg';
import EmmyThumbnail from '../assets/images/emmy.png';

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

export function BlogAuthor(props: { blog: Blog; author: Author }) {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <img
          className="font-semibold rounded-full w-10 aspect-square object-cover"
          src={teamImages.find((image) =>
            image
              .toLowerCase()
              .includes(
                props.author.profileIconSrc
                  .toLowerCase()
                  .split('/')
                  .at(-1)!
                  .split('.')[0]!
              )
          )}
        />
        <h2 className="opacity-80">By {props.author.name}</h2>
      </div>
    </>
  );
}
