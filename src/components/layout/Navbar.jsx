"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiFlowerLotusFill } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      pathName: "Home",
      pathSrc: "/",
    },
    {
      pathName: "Statistics",
      pathSrc: "/statistics",
    },
    {
      pathName: "Premanand",
      pathSrc: "/premanand-ji-maharaj",
    },
    {
      pathName: "Blogs",
      pathSrc: "/blogs",
    },
  ];

  return (
    <header>
      <section className="max-w-4xl bg-gradient-to-r from-amber-50 via-gray-50 to-amber-50 outline-1 outline-amber-300 shadow-sm mx-auto my-2 rounded-sm flex justify-between items-center px-4 py-2">
        <div>
          <Link href="/" aria-label="Radhanaam Japa Counter - Go to Home">
            <PiFlowerLotusFill aria-hidden="true" size={24} />
          </Link>
        </div>
        <nav className="flex gap-4 items-center" aria-label="Main navigation">
          {navLinks.map(({ pathName, pathSrc }) => {
            const isActive = pathname === pathSrc;
            return (
              <Link
                href={pathSrc}
                key={pathSrc}
                className={`text-sm font-medium px-2 py-1 rounded-sm ${isActive ? "bg-amber-100 text-amber-900 outline-1 outline-amber-300" : ""} hover:bg-amber-100 hover:outline-1 hover:outline-amber-200`}
                aria-current={isActive ? "page" : undefined}
              >
                {pathName}
              </Link>
            );
          })}
        </nav>
        <div>
          <button
            aria-label="Open Settings"
            className="p-1 aspect-square outline-1 rounded-sm outline-amber-300 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
          >
            <TbSettings
              aria-hidden="true"
              size={20}
              className="text-amber-900"
            />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
