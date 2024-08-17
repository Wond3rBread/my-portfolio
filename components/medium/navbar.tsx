'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '#/assets/logos/fulllogo_transparent_nobuffer.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false); // Adjust this value based on your breakpoint
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const smoothScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="top-0 z-50 flex w-full items-center justify-between bg-background px-4 shadow-lg lg:px-10">
      <Link href="/" legacyBehavior>
        <p className="my-5 w-40 cursor-pointer py-4 text-text transition duration-300 hover:scale-105">
          Bengt Rotheim
        </p>
      </Link>
      <div className="z-50 xl:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes size={24} className="text-text" />
        ) : (
          <FaBars size={24} className="text-text" />
        )}
      </div>
      <ul
        className={`absolute z-50 flex w-full flex-col items-center bg-background py-5 text-xl font-bold transition-transform duration-300 ease-in-out xl:relative xl:flex xl:w-auto xl:flex-row xl:items-center xl:justify-end xl:space-x-20 xl:bg-transparent xl:py-0 ${
          isOpen ? 'top-20' : 'top-[-490px] xl:top-0'
        }`}
      >
        {['about', 'skills', 'experience', 'student', 'contact'].map(
          (id, index) => (
            <li
              key={index}
              className="relative cursor-pointer py-2 text-text transition-colors duration-300 hover:text-accent-blue xl:py-0"
              onClick={closeMenu}
            >
              {index === 4 ? (
                <a href={`#${id}`} onClick={(e) => smoothScrollTo(e, id)}>
                  <button className="to-accent-blue-dark w-24 rounded-2xl bg-gradient-to-r from-accent-blue px-3 py-3 text-lg font-semibold text-text transition duration-500 ease-in-out hover:scale-105 hover:bg-accent-dark">
                    Contact
                  </button>
                </a>
              ) : (
                <a href={`#${id}`} onClick={(e) => smoothScrollTo(e, id)}>
                  {
                    ['About', 'Skills', 'Experience', 'Student', 'Contact'][
                      index
                    ]
                  }
                </a>
              )}
            </li>
          ),
        )}
        <li
          className="relative cursor-pointer py-2 text-text transition-colors duration-300 hover:text-accent-blue xl:py-0"
          onClick={closeMenu}
        >
          <a
            href="/path-to-your-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-20 rounded-2xl border-2 border-accent-blue px-3 py-3 text-lg font-semibold text-text transition duration-500 ease-in-out  hover:border-accent-dark hover:bg-accent-dark">
              CV
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};
