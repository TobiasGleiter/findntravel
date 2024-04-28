import LanguageButton from '../../buttons/language.button';
import Copyright from '../../legal/copyright';
import LegalLinks from '../../legal/legal.links';

export default function FooterLegal() {
  return (
    <div className="flex flex-col gap-2">
      <LanguageButton />
      <Copyright />
      <LegalLinks />
    </div>
  );
}
