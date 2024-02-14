import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className='m-5 text-5xl'>HomePage</h1>
      <h2 className='m-5 text-xl'>Hello Next.js!!!🥳</h2>
      <Link href='/about' className='m-5 hover:underline'>
        About
      </Link>
    </main>
  );
}
