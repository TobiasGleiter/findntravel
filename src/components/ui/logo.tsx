import Link from 'next/link';
import { Icons } from './icons';

export default function Logo() {
  return (
    <Link className="flex flex-col gap-4 items-center" href={'/'}>
      <div className="relative">
        <Icons.tree className="w-8 h-8" />
      </div>
      <h1 className="flex items-center text-3xl md:text-4xl font-bold">
        Blackforest from
        <span className="bg-primary text-background pl-1 pr-2 ml-2">above</span>
      </h1>
    </Link>
  );
}
