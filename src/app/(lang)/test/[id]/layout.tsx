interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function ImageDetailLayout({ children }: HomeLayoutProps) {
  return <main className="flex justify-center">{children}</main>;
}
