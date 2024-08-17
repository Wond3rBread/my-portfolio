import { NavBar } from '#/components/medium/navbar';
import '#/styles/globals.css';
import '@fontsource/asap-condensed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bengt Andreas Rotheim',
    template: '%s | Portfolio',
  },
  metadataBase: new URL('https://app-router.vercel.app'),
  description: 'Bengt Andreas Rotheims Portfolio',
  openGraph: {
    title: 'Portfolio',
    description: 'Bengt Andreas Rotheims Portfolio',
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" font-asap">
      <body className="">
        <NavBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
