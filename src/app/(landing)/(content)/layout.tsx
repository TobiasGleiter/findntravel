interface ContentLayoutProps {
  children: React.ReactNode;
}

export default async function ContentLayout({ children }: ContentLayoutProps) {
  return <>{children}</>;
}
