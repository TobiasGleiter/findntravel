import Footer from '@/src/components/navigation/footer/footer';
import Logo from '@/src/components/ui/logo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
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
      <div className="flex flex-col gap-4 mt-10 items-center justify-center w-full">
        <Logo />
        <div className="rounded-lg overflow-hidden">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
