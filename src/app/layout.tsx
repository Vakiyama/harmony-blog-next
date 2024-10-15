import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

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

export const metadata: Metadata = {
  title: 'Harmony Blog',
  description:
    'Harmony Blogging platform documenting development of the Harmony caretaking application.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-row justify-center w-full ">
          <nav className="flex justify-between text-lg lg:px-8 px-5 border-b border-b-[#919191] w-full py-7 mb-4">
            <Link href="/">logo here.</Link>
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
