import { Icons } from '../ui/icons';

export default function LanguageButton() {
  return (
    <div className="flex flex-row gap-2 text-sm items-center justify-center">
      <Icons.language className="w-5 h-5" />
      <span>English EN</span>
    </div>
  );
}
