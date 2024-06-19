import React from "react";
import Link from "next/link";
import Register from "./Registerdialog";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Fleets', href: '#fleets', current: false },
  { name: 'Services', href: '#courses', current: false },
  { name: 'About', href: '#aboutus-section', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full h-full mt-12 mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-black hover:opacity-50' : 'hover:text-black hover:opacity-100',
                  'py-1 text-3xl font-extrabold opacity-75 block text-center'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
