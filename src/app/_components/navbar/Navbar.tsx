'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    label: 'Add Sample',
    href: '/',
  },
  {
    label: 'Sample Search',
    href: '/search',
  },
  {
    label: 'Samples Storages',
    href: '/sample-storages',
  },
];

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className='navbar flex w-full justify-center space-x-4 bg-base-100 shadow'>
      {navigationItems.map((navigationItem) => {
        return (
          <Link
            key={navigationItem.href}
            className={`btn text-xl ${currentRoute === navigationItem.href ? 'btn-neutral' : 'btn-ghost'}`}
            href={navigationItem.href}
          >
            {navigationItem.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
