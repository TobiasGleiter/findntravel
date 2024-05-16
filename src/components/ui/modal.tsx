'use client';

import { useRouter } from 'next/navigation';
import { Icons } from './icons';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      className="relative top-0 z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-start pt-20 justify-center container text-center sm:items-center sm:p-0">
          <div className="relative items-center transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button
              onClick={() => {
                router.back();
              }}
              className="absolute right-0"
              role="close"
            >
              <div className="m-2 rounded-full p-8">
                <Icons.close className="w-6 h-6" />
              </div>
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
