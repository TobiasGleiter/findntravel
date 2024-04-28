import Link from 'next/link';

export default function LegalLinks() {
  return (
    <ul className="flex gap-4 text-sm antialiased items-center justify-center">
      <li>
        <Link href={'/'} className="hover:underline">
          Datenschutz
        </Link>
      </li>
      <li>
        <Link href={'/'} className="hover:underline">
          Sitemap
        </Link>
      </li>
    </ul>
  );
}
