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
  blurDataUrl: string;
}

export default async function Home() {
  const { resources } = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .max_results(100)
    .execute();

  const images = resources;

  return (
    <main className="mx-auto max-w-[1960px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        <div className="flex min-h-[480px] row-span-1  items-center justify-center bg-secondary rounded-md text-center p-4 ">
          <div className="flex flex-col gap-4 items-center">
            <div className="relative">
              <Icons.tree className="w-8 h-8" />
            </div>

            <h1 className="flex items-center text-3xl md:text-4xl font-bold">
              Blackforest from
              <span className="bg-primary text-background pl-1 pr-2 ml-2">
                above
              </span>
            </h1>
            <span className="text-lg md:text-xl">Explore and find.</span>
            <p className="px-12 text-sm text-muted-foreground">
              Explore the Blackforest from above and try to find these places.
            </p>
          </div>
        </div>
        {images.map(
          ({ public_id, filename, blurDataUrl }: CloudinaryResource) => (
            <Link
              key={public_id}
              href={`/?photoId=${filename}`}
              as={`/p/${filename}`}
              shallow
              className="after:content group relative block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <OptimizedImage
                src={public_id}
                blurDataURL={blurDataUrl}
                alt="Next.js Conf photo"
                className="transform  brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: 'translate3d(0, 0, 0)' }}
                width={720}
                height={1080}
                sizes="(max-width: 640px) 100vw,
              (max-width: 1280px) 50vw,
              (max-width: 1536px) 33vw,
              25vw"
              />
            </Link>
          )
        )}
        <div className="flex min-h-[480px] items-center justify-center bg-secondary rounded-md text-center ">
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
