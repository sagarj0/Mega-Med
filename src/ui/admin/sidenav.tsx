import NavLinks from '@/ui/admin/navLinks';
import MegaMedLogo from '@/components/MegaMedLogo';
import Link from 'next/link';
import { FaPowerOff } from 'react-icons/fa';

export default function SideNav() {
  return (
    <nav
      className="
      flex h-full flex-col rounded-lg bg-gray-100/50"
    >
      <Link className="primary-bg mb-2 flex h-20 items-center justify-center rounded-md p-4  md:h-40" href="/">
        <div className="w-32 text-white  md:w-40">
          <MegaMedLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <button className="hover:secondary-bg hover:active-text flex h-[48px] w-full grow items-center justify-center  gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
          <FaPowerOff className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </nav>
  );
}
