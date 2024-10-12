import Link from 'next/link';

export function NavLink(props: { url: string; label: string }) {
  return (
    <>
      <Link className="text-2xl sfpro-font" href={props.url}>
        {props.label}
      </Link>
    </>
  );
}
