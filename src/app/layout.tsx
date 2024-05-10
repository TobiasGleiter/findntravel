import type { Metadata } from 'next';
import { fontHeading, fontSans } from '../fonts/main.fonts';
import { cn } from '../lib/utils';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Next App Template',
  description: 'Setup by Tobias Gleiter',
};

/**
 * Root Layout of the application
 * @param children
 * @returns
 */
export default function RootLayout({
  children,
  image,
}: {
  children: React.ReactNode;
  image: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn('font-sans', fontSans.variable, fontHeading.variable)}
      >
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
