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

export default async function HomeLayout({
  children,
  image,
}: {
  children: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <main>
      <div>{children}</div>
      <div>{image}</div>
    </main>
  );
}
