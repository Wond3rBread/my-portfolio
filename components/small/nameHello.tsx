import React from 'react';

export const NameHello = () => {
  return (
    <div>
      <h2 className=" text-text text-3xl">Bengt Andreas Rotheim</h2>
      <h1 className=" text-text text-9xl font-semibold">
        Hello{' '}
        <span className=" text-accent-blue font-bold">
          <u>World!</u>
        </span>
      </h1>
    </div>
  );
};
