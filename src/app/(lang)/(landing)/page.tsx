import LanguageButton from '@/src/components/buttons/language.button';
import OptimizedImage from '@/src/components/images/OptimizedImage';
import Copyright from '@/src/components/legal/copyright';
import LegalLinks from '@/src/components/legal/legal.links';
import { Icons } from '@/src/components/ui/icons';
import cloudinary from '@/src/utils/cloudinary';
import Link from 'next/link';

interface CloudinaryResource {
  public_id: string;
  filename: string;
  secure_url: string;
}

export default async function Home() {
  const { resources } = await cloudinary.v2.search
    .expression('folder=findntravel')
    .execute();

  const images = resources;

  return (
    <main className="mx-auto max-w-[1960px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="flex min-h-[600px] row-span-1  items-center justify-center bg-secondary rounded-md text-center p-4 ">
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
        {images.map(({ public_id, filename }: CloudinaryResource) => (
          <Link
            key={public_id}
            href={`/?photoId=${filename}`}
            as={`/p/${filename}`}
            shallow
            className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          >
            <OptimizedImage
              src={public_id}
              alt="Next.js Conf photo"
              className="transform  brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: 'translate3d(0, 0, 0)' }}
              width={720}
              height={1080}
              sizes="(max-width: 720px) 25vw"
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
