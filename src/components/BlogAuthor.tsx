import { Blog } from "../app/liblib";

export function BlogAuthor(props: { blog: Blog }) {
  return (
    <>
      {typeof props.blog.author === "string" ? (
        <h2 className="font-semibold opacity-80">By {props.blog.author}</h2>
      ) : (
        <div className="flex flex-row items-center gap-4">
          <img
            className="font-semibold rounded-full w-10 aspect-square object-cover"
            src={props.blog.author.profilePictureSrc}
          />
          <h2 className="opacity-80">By {props.blog.author.name}</h2>
        </div>
      )}
    </>
  );
}
