// app/routes/__root.tsx
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';
import * as React from 'react';
import {
  ScrollRestoration,
  Link,
  Outlet,
  createRootRoute,
} from '@tanstack/react-router';
import { NavLink } from '../components/NavLink';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'Harmony Blog',
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div className="flex flex-row justify-center w-full ">
        <nav className="flex justify-between text-lg lg:px-8 px-5 border-b border-b-[#919191] w-full py-7 mb-4">
          <Link className="" to="/">
            logo here.
          </Link>
          <div className="flex gap-4">
            <NavLink url="/about" label="About" />
            <NavLink url="/blogs" label="Blog" />
            <NavLink url="/team" label="Meet the Team" />
          </div>
        </nav>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="lg:mx-8 mx-2 w-full max-w-[80vw] min-h-screen">
          <Outlet />
        </div>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
        <link rel="stylesheet" href="output.css" />
      </Head>
      <Body>
        <div className="bg-[#0a0a0a] text-white w-full ">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
