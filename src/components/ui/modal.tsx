'use client';

import { cn } from '@/src/lib/utils';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="absolute z-50 top-0 left-0 flex w-full pt-20 justify-center bg-black/80 h-screen min-h-screen">
      <div className="relative bg-white h-fit max-w-5xl">
        <button
          onClick={() => {
            router.back();
          }}
          className={cn('w-fit flex gap-2', '')}
        >
          Close Modal!
        </button>
        <div className="flex flex-col h-64">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
