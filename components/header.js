import Link from 'next/link';

export default function Header({ host }) {
  const localhost = String(host).includes('localhost');
  return (
    <div>
      <Link href={localhost ? 'http://localhost:3000/' : 'https://next-multi-host.vercel.app/'}>Host 1</Link>
      {' - '}
      <Link href={localhost ? 'http://another.localhost:3000/' : 'https://next-multi-host-acorcutt.vercel.app/'}>Host 2</Link>
    </div>
  );
}
