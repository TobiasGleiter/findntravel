import OptimizedImage from '@/src/components/images/OptimizedImage';
import Footer from '@/src/components/navigation/footer/footer';
import Logo from '@/src/components/ui/logo';
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
          <Logo>
            <span className="text-lg md:text-xl">Explore and find.</span>
            <p className="px-12 text-sm text-muted-foreground">
              Explore the Black Forest from above and try to find these places
            </p>
          </Logo>
        </div>
        {images.map(
          ({ public_id, filename, blurDataUrl }: CloudinaryResource) => (
            <Link
              key={public_id}
              href={`/p/${filename}`}
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
          <Footer />
        </div>
      </div>
    </main>
  );
}
