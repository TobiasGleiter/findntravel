import test from '@/public/test.png';
import Image from 'next/image';

export default async function Home() {
  return (
    <main className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <Image
        src={test}
        alt={''}
        className="flex transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 bg-red-600"
        style={{ transform: 'translate3d(0, 0, 0)' }}
        placeholder="blur"
      />
      <Image
        src={test}
        alt={''}
        className="flex transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 bg-red-600"
        style={{ transform: 'translate3d(0, 0, 0)' }}
        placeholder="blur"
      />
    </main>
  );
}
