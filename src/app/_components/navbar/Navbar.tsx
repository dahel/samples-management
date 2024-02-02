'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  {
    label: 'Add Sample',
    href: '/add-sample'
  },
  {
    label: 'Sample Search',
    href: '/search'
  },
  {
    label: 'Samples Locations',
    href: '/racks'
  },
]


const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className="navbar bg-base-100 space-x-4 shadow w-full flex justify-center">
      {navigationItems.map(navigationItem => {
        return (
          <Link 
            key={navigationItem.href} 
            className={`btn text-xl ${currentRoute === navigationItem.href ? 'btn-neutral' : 'btn-ghost'}`} 
            href={navigationItem.href}
          >
            {navigationItem.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar;
