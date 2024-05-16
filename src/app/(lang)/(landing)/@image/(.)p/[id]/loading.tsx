import { Icons } from '@/src/components/ui/icons';

export default function Loading() {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative items-center transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <button className="absolute right-0" role="close">
              <div className="m-2 rounded-full p-8">
                <Icons.close className="w-6 h-6" />
              </div>
            </button>
            <div className="flex flex-col p-8 bg-zinc-200 animate-pulse w-full h-full items-center justify-center aspect-square">
              <div className="animate-spin w-fit">
                <Icons.tree className="w-8 h-8" />
              </div>
              <h1 className="flex items-center text-3xl md:text-4xl font-bold">
                Blackforest from
                <span className="bg-primary text-background pl-1 pr-2 ml-2">
                  above
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
