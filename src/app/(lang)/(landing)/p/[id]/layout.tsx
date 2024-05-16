import { Icons } from '@/src/components/ui/icons';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: 'Nature',
    description: 'Explore the blackforst from above and find the locations',
    applicationName: 'Findntravel',
    keywords: [],
    creator: 'Tobias Gleiter, Yannick Buekers',
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen overflow-y-auto min-h-screen inset-0">
      <div className="flex flex-col gap-4 items-start lg:items-center justify-center w-full">
        <Link className="flex flex-col gap-4 items-center" href={'/'}>
          <div className="relative">
            <Icons.tree className="w-8 h-8" />
          </div>
          <h1 className="flex items-center text-3xl md:text-4xl font-bold">
            Blackforest from
            <span className="bg-primary text-background pl-1 pr-2 ml-2">
              above
            </span>
          </h1>
        </Link>
        <div className="rounded-lg overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
