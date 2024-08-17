import { demos } from '#/lib/demos';
import Link from 'next/link';
import bg from 'assets/mountainrangebg.svg';
import ColorPalette from '#/components/ui/palette';
import { NameHello } from '#/components/small/nameHello';
import { About } from '#/components/medium/about';

export default function Page() {
  return (
    // When I can parallax scroll, this svg is a BIG possibility

    // <div
    //   style={{
    //     backgroundImage: `url(${bg.src})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     height: '100vh', // Make sure the div takes up the full height of the viewport
    //     width: '100%',
    //   }}
    // >
    // <div className="bg-background text-text p-6">
    //   <h1 className="text-3xl font-bold text-accent-blue">Welcome to My Portfolio</h1>
    //   <p className="text-lg">
    //     This is a dark-themed portfolio with a beautiful blue accent.
    //   </p>
    //   <button className="bg-accent-blue hover:bg-accent-blue-dark text-text py-2 px-4 rounded">
    //     Click Me
    //   </button>
    //   <div className="bg-card-bg p-4 mt-4 rounded border border-border">
    //     This is a card component
    //   </div>
    //   <a href="#" className="text-accent-blue hover:text-link-hover">
    //     Visit my projects
    //   </a>
    // </div>
    // </div>
    <div className="">
      {/* Landing page start */}
      <div className="flex h-screen items-center justify-center bg-background">
        <NameHello />
      </div>

      {/* Landing page finish */}

      {/* About page start  */}

      <div className=' h-screen bg-card-bg flex items-center justify-center'>
        <About />
      </div>

      {/* About page finish */}

      {/* <ColorPalette /> */}
    </div>
  );
}
