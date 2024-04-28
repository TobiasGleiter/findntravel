'use client';

import { Icons } from './icons';
import { Input } from './input';

export default function SearchBar() {
  return (
    <div className="flex flex-col gap-8 shadow-md md:shadow-none md:border-b-[1px] p-4 pb-8">
      <div className="flex w-full items-center container max-w-3xl border-[1px] rounded-full bg-background shadow-xl  py-2 pl-6">
        <Input type="text" placeholder="Search a place" />
        <button className="flex hover:bg-primary/80 duration-150 border p-3 items-center justify-center bg-primary text-secondary rounded-full translate-x-6">
          <Icons.search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
