import { Metadata } from 'next';

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

export default function Layout({
  p,
  children,
}: {
  p: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div>{children}</div>
      <div>{p}</div>
    </main>
  );
}
