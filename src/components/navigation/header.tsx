import { Icons } from '../ui/icons';

export default async function Header() {
  return (
    <header className="flex flex-row justify-between z-50 p-8">
      <div className="flex items-center gap-2 text-primary cursor-pointer group group-hover:duration-300">
        <Icons.logo className="w-6 h-6 group-hover:hidden" />
        <Icons.logoAnimation className="w-6 h-6 group-hover:block hidden" />
        <span className="font-bold antialiased">findntravel</span>
      </div>
    </header>
  );
}
