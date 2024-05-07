import Footer from '@/src/components/navigation/footer/footer';
import Header from '@/src/components/navigation/header';
import MainNavigation from '@/src/components/navigation/main.navigation';
import { Metadata } from 'next';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: {
      default: 'Findntravel',
      template: `%s | Findntravel`,
    },
    description: 'Explore the blackforst from above and find the locations',
    applicationName: 'Findntravel',
    keywords: [],
    creator: 'Tobias Gleiter, Yannick Buekers',
  };
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      <MainNavigation />
      <main className="flex-1 container min-h-screen p-8">{children}</main>
      <Footer />
    </>
  );
}
