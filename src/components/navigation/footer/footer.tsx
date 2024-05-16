import LanguageButton from '../../buttons/language.button';
import Copyright from '../../legal/copyright';
import LegalLinks from '../../legal/legal.links';
import { Icons } from '../../ui/icons';

export default function Footer() {
  return (
    <div className="flex w-full p-8 items-center justify-center rounded-md text-center ">
      <div className="flex flex-col gap-4 items-center">
        <Icons.tree className="w-8 h-8" />
        <div className="flex flex-col gap-2">
          <LanguageButton />
          <Copyright />
          <LegalLinks />
        </div>
      </div>
    </div>
  );
}
