import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/dashboard" className="max-h-min font-bold uppercase text-md text-secondary bg-yellow-400 rounded-lg p-1">COSTS!</Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/dashboard"
            className="p-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer"
          >Dashboard</Link>
          <Link
            href="/revenues"
            className="p-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer"
          >Revenues</Link>
          <Link
            href="/expenses"
            className="p-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer"
          >Expenses</Link>
          <Link
            href="/Projects"
            className="p-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer"
          >Projects</Link>
          <Link
            href="/settings"
            className="p-2 text-sm font-semibold leading-6 text-gray-900 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:rounded-xl hover:cursor-pointer"
          >Settings</Link>
          
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/dashboard" className="max-h-min font-bold uppercase text-sm text-yellow-500 bg-secondary rounded-lg p-1">COSTS!</Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Navbar;