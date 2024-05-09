import localFont from 'next/font/local';

export const fontHeading = localFont({
  src: [
    {
      path: './Caveat-Bold.ttf',
      weight: '800',
      style: 'medium',
    },
  ],
  weight: '800',
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Arial',
});

export const fontSans = localFont({
  src: [{ path: './Inter-Medium.ttf', weight: '800', style: 'regular' }],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: 'Arial',
});
