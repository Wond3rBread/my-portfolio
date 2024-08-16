import { demos } from '#/lib/demos';
import Link from 'next/link';
import bg from 'assets/mountainrangebg.svg';

export default function Page() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Make sure the div takes up the full height of the viewport
        width: '100%',
      }}
    >
      <h1 className="font-playfair text-4xl font-bold text-white">Hei</h1>
    </div>
  );
}
