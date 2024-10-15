import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import LightLogo from '../assets/images/logos/light-logo.svg';
import DarkLogo from '../assets/images/logos/dark-logo.svg';

/*
const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
*/

const sfPro = localFont({
  src: '../fonts/SF-Pro.ttf',
  variable: '--font-sf-pro',
});

const esrgTrial = localFont({
  src: '../fonts/ESRebondGrotesqueTRIAL-Regular.otf',
  variable: '--font-esrg-trial',
});

export const metadata: Metadata = {
  title: 'Harmony Blog',
  description:
    'Harmony Blogging platform documenting development of the Harmony caretaking application.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: LightLogo.src,
        href: LightLogo.src,
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: DarkLogo.src,
        href: DarkLogo.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${esrgTrial.variable} ${sfPro.variable} antialiased font-paragraph`}
      >
        <div className="flex flex-row justify-center w-full ">
          <nav className="flex justify-between text-lg lg:px-8 px-5 border-b border-b-[#919191] w-full py-7 mb-4">
            <Link href="/">
              <picture>
                <source
                  srcSet={LightLogo.src}
                  media="(prefers-color-scheme: light)"
                />

                <source
                  srcSet={DarkLogo.src}
                  media="(prefers-color-scheme: dark)"
                />

                <img src={LightLogo.src} />
              </picture>
            </Link>
            <div className="flex gap-4">
              <Link href="/blogs">Blogs</Link>
              <Link href="/about">About</Link>
              <Link href="/team">Team</Link>
            </div>
          </nav>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="lg:mx-8 mx-2 w-full max-w-[80vw] min-h-screen">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
