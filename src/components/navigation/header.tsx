import { Icons } from '../ui/icons';

export default function Header() {
  return (
    <header className="flex flex-row justify-between z-50 p-8">
      <div className="flex items-center gap-2 text-primary cursor-pointer">
        <Icons.logo className="w-6 h-6 " />
        <span className="font-bold antialiased">findntravel</span>
      </div>
    </header>
  );
}
