import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile</h1>
      <Link href='/' className='hover:underline'>
        Home
      </Link>
    </div>
  );
}