'use client';

import { CldImage } from 'next-cloudinary';

export default function OptimizedImage(props: any) {
  return <CldImage {...props} />;
}
