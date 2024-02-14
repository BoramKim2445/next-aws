import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className='m-5'>
      <h1 className='text-5xl'>AboutPage</h1>
      <Link href='/profile' className='hover:underline'>
        Profile
      </Link>
    </div>
  );
}
