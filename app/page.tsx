'use client';
import { demos } from '#/lib/demos';
import Link from 'next/link';
import bg from 'assets/mountainrangebg.svg';
import ColorPalette from '#/components/ui/palette';
import { NameHello } from '#/components/small/nameHello';
import { About } from '#/components/medium/about';
import BackgroundCanvas from '#/components/medium/backgroundCanvas';
import { Skills } from '#/components/medium/skills';
import { Projects } from '#/components/medium/projects';

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
      {/* Landing section start */}
      <div className="flex h-screen items-center  justify-center overflow-hidden bg-background">
        <div className=" z-10 ">
          <NameHello />
        </div>
        <BackgroundCanvas />
      </div>
      {/* Landing section finish */}

      {/* About section start  */}

      <div
        id="about"
        className=" flex items-center justify-center bg-card-bg py-20 lg:h-screen"
      >
        <About />
      </div>

      {/* About section finish */}

      {/* Skillset section start */}
      <div
        id="skills"
        className=" flex items-center justify-center bg-background py-20 lg:h-screen"
      >
        <Skills />
      </div>

      {/* Skillset section finish */}

      {/* Projects section start */}
      <div
        id="projects"
        className="flex items-center justify-center bg-card-bg py-20 lg:h-screen"
      >
        <Projects />
      </div>
      {/* Projects section finish */}
    </div>
  );
}
