import React from 'react';
import { motion } from 'motion/react';

export const NameHello = () => {
  return (
    <div>
      {/* <h2 className=" text-text text-3xl">Bengt Andreas Rotheim</h2>
      <h1 className=" text-text text-9xl font-semibold">
        Hello{' '}
        <span className=" text-accent-blue font-bold">
          <u>World!</u>
        </span>
      </h1> */}
      {/* <h1 className=" text-7xl font-light text-text relative">
        Bengt <span className=" text-accent-blue font-bold"><span className='-z-20'>A</span>n<span className=' -z-20'>d</span>r<span className='-z-20'>e</span>a<span className='-z-20'>s</span></span> Rotheim

        <svg className='absolute -z-10 -top-9 right-0 bottom-0 left-2' viewBox="0 0 1107 216" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path initial={{pathLength: 0, strokeWidth: 4}} whileInView={{ pathLength: 1, strokeWidth: 4}} transition={{ duration: 2, ease: "easeInOut"}} d="M1 53C40 38 97 25 147 25C202.326 25 274 40 323 71C377.092 105.221 384 248.2 401 159.2C418 70.2005 424 -13 442 4.99999C460 23 458.745 274.035 494 200C504 179 500.064 -19.3615 529 15C545 34 559.821 221.629 578 178C593 142 606.503 -20.8023 625 25C646 77 636 178 673 178C710 178 737 165 765 165C779.067 165 840 163.2 833 191.2C826 219.2 787 213.2 787 191.2C787 169.2 824 159.2 866 159.2C908 159.2 1006.1 177.623 1031 172C1062 165 1085 165.2 1105 138" stroke="white" stroke-width="4"/>
        </svg>
      </h1> */}
      <h1 className="relative z-10 text-7xl font-light text-text">
        Bengt{' '}
        <span className="font-bold text-accent-blue">
          <span className="relative -z-20">A</span>n
          <span className="relative -z-20">d</span>r
          <span className="relative -z-20">e</span>a
          <span className="relative -z-20">s</span>
        </span>{' '}
        Rotheim
        <svg
          className="absolute -top-9 bottom-0 left-2 right-0 -z-10"
          viewBox="0 0 1107 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, strokeWidth: 4 }}
            whileInView={{ pathLength: 1, strokeWidth: 4 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            d="M1 53C40 38 97 25 147 25C202.326 25 274 40 323 71C377.092 105.221 384 248.2 401 159.2C418 70.2005 424 -13 442 4.99999C460 23 458.745 274.035 494 200C504 179 500.064 -19.3615 529 15C545 34 559.821 221.629 578 178C593 142 606.503 -20.8023 625 25C646 77 636 178 673 178C710 178 737 165 765 165C779.067 165 840 163.2 833 191.2C826 219.2 787 213.2 787 191.2C787 169.2 824 159.2 866 159.2C908 159.2 1006.1 177.623 1031 172C1062 165 1085 165.2 1105 138"
            stroke="white"
            stroke-width="4"
          />
        </svg>
      </h1>
    </div>
  );
};
