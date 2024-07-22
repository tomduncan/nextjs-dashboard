import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function DuncanLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[38px]">Duncan</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
