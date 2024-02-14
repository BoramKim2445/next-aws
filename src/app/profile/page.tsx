import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className='m-5'>
      <h1 className='text-5xl'>Profile</h1>
      <Link href='/' className='hover:underline'>
        Home
      </Link>
    </div>
  );
}
