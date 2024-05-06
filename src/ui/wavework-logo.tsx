import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/ui/fonts';
import Link from 'next/link';

export default function WaveworkLogo() {
  return (
    <Link href="/"
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <BriefcaseIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Wavework</p>
    </Link>
  );
}
