import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <Link href='/' className='hover:underline'>
        Home
      </Link>
    </div>
  );
}
