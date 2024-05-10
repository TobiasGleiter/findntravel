'use client';

import { cn } from '@/src/lib/utils';
import { useRouter } from 'next/navigation';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="absolute z-50 top-0 left-0 flex w-full pt-20 justify-center bg-black/80 h-screen min-h-screen">
      <div className="relative rounded-none lg:rounded-lg h-fit max-w-5xl">
        <button
          onClick={() => {
            router.back();
          }}
          className={cn('w-fit flex gap-2', 'absolute right-0 m-4')}
        ></button>
        <div>
          <div>head</div>
          <div className="flex w-full justify-between">
            <div>sdes</div>
          </div>
        </div>

        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
