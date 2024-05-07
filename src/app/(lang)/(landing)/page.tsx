import test from '@/public/test.png';
import { Icons } from '@/src/components/ui/icons';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const images = [
    { id: 1, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
    { id: 2, public_id: test, format: 'png', blurDataUrl: 'https://test.com/' },
  ];

  return (
    <main className="mx-auto max-w-[1960px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-">
        <div className="flex items-center justify-center row-span-1 bg-secondary rounded-md text-center p-4">
          <div className="flex flex-col gap-4 items-center">
            <Icons.tree className="w-8 h-8" />
            <h1 className="flex items-center text-3xl font-bold">
              Blackforest from{' '}
              <span className="bg-primary text-background px-2 ml-1">
                above
              </span>
            </h1>
            <span className="text-xl">Explore and find.</span>
            <p className="px-12 text-muted-foreground">
              Explore the Blackforest from above and try to find the hidden
              places.
            </p>
          </div>
        </div>
        {images.map(({ id, public_id, blurDataUrl }) => (
          <Link
            key={id}
            href={`/?photoId=${id}`}
            as={`/p/${id}`}
            shallow
            className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              src={public_id}
              alt="Next.js Conf photo"
              className="transform  brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
