import Footer from '@/src/components/navigation/footer/footer';
import Header from '@/src/components/navigation/header';
import MainNavigation from '@/src/components/navigation/main.navigation';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      <MainNavigation />
      <main className="flex-1 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
