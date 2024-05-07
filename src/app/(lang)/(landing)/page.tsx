import LanguageButton from '@/src/components/buttons/language.button';
import Copyright from '@/src/components/legal/copyright';
import LegalLinks from '@/src/components/legal/legal.links';
import { Icons } from '@/src/components/ui/icons';
import cloudinary from '@/src/utils/cloudinary';
import Image from 'next/image';
import Link from 'next/link';

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

export default async function Home() {
  const { resources } = await cloudinary.v2.search.expression('cld').execute();

  const images = resources;

  return (
    <main className="mx-auto max-w-[1960px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex min-h-[400px] row-span-1  items-center justify-center bg-secondary rounded-md text-center p-4 ">
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
        {images.map(({ public_id, secure_url }: CloudinaryResource) => (
          <Link
            key={public_id}
            href={`/?photoId=${public_id}`}
            as={`/p/${public_id}`}
            shallow
            className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <Image
              src={secure_url}
              alt="Next.js Conf photo"
              className="transform  brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
            />
          </Link>
        ))}
        <div className="flex min-h-fit items-center justify-center bg-secondary rounded-md text-center ">
          <div className="flex flex-col gap-4 items-center">
            <Icons.tree className="w-8 h-8" />
            <div className="flex flex-col gap-2">
              <LanguageButton />
              <Copyright />
              <LegalLinks />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
