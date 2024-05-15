'use client';

import { cn } from '@/src/lib/utils';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="z-10 fixed flex top-0 border bg-black/80 w-full h-full items-center">
      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        <div className="z-20 bg-white h-fit max-w-xl ">
          <button
            onClick={() => {
              router.back();
            }}
            className={cn('w-fit flex gap-2', '')}
          >
            Close Modal!
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
