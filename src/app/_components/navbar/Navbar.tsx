'use client';

import Link from 'next/link';
import type { Route } from 'next'
import { usePathname } from 'next/navigation';


const Navbar = () => {
  const currentRoute = usePathname();

  console.log('############################## currentRoute', currentRoute);

  return (
    <nav className="navbar bg-base-100 space-x-4">
      <Link className={`btn  text-xl ${currentRoute === '/add-sample' ? 'btn-neutral' : 'btn-ghost'}`} href="/add-sample">Add Sample</Link>
      <Link className={`btn  text-xl ${currentRoute === '/search' ? 'btn-neutral' : 'btn-ghost'}`} href="/search">Search Sample</Link>
      <Link className={`btn  text-xl ${currentRoute === '/racks' ? 'btn-neutral' : 'btn-ghost'}`} href="/racks">Samples Locations</Link>
    </nav>
  )
}

export default Navbar;
