import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl m-5'>HomePage</h1>
      <h2 className='text-xl m-5'>Hello Next.js!!!🥳</h2>
      <Link href='/about' className='hover:underline'>
        About
      </Link>
    </main>
  );
}
