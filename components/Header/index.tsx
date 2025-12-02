"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [openChildMenu, setOpenChildMenu] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  useEffect(() => {
    setNavigationOpen(false);
    setOpenSubmenu(null);
    setOpenChildMenu(null);
  }, [pathUrl]);

  const toggleSubmenu = (id: number) =>
    setOpenSubmenu(openSubmenu === id ? null : id);
  const toggleChildMenu = (id: number) =>
    setOpenChildMenu(openChildMenu === id ? null : id);

  // ✅ Close menu on click (mobile)
  const closeMobileMenu = () => {
    setNavigationOpen(false);
    setOpenSubmenu(null);
    setOpenChildMenu(null);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-4 transition-all duration-200 backdrop-blur-md ${stickyMenu ? "bg-[#ffffff]" : "bg-[#ffffff]"
        }`}
    >
      <div className="relative mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 2xl:px-0">
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <div className="relative">
            <Image
              src="/images/tutor-hives.png"
              alt="tutor-hives logo"
              width={95}
              height={30}
              unoptimized
            />
          </div>
        </Link>

        {/* Hamburger */}
        <button
          aria-label="Toggle Navigation"
          className="block xl:hidden text-3xl text-black"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          {navigationOpen ? "✕" : "☰"}
        </button>

        {/* Nav */}
        <nav
          className={`absolute left-0 top-full w-full shadow-lg bg-[rgba(255,255,255)] xl:bg-transparent xl:backdrop-blur-none xl:static xl:block xl:w-auto xl:shadow-none transition-all duration-300 ${navigationOpen ? "block" : "hidden xl:block"
            }`}
        >
          <ul className="flex flex-col gap-2 max-h-[80vh] text-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent px-4 py-4 xl:max-h-none xl:overflow-visible xl:flex-row xl:items-center xl:gap-10 xl:justify-center">
            {menuData.map((menuItem) => (
              <li key={menuItem.id} className="relative group">
                {menuItem.submenu ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Link
                        href={menuItem.path || pathUrl}
                        onClick={() => closeMobileMenu()}
                        className={`tracking-wide text-black ${pathUrl === menuItem.path ? "text-[#000000]" : ""
                          }`}
                      >
                        {menuItem.title}
                      </Link>

                      {/* Your SVG for items that have submenu */}
                      <button
                        onClick={() => toggleSubmenu(menuItem.id)}
                        className="xl:hidden"
                      >
                        <svg
                          className={`h-4 w-4 fill-current text-black transition-transform duration-200 ${openSubmenu === menuItem.id ? "rotate-180" : ""
                            }`}
                          viewBox="57 35.171 26 16.043"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                        </svg>
                      </button>

                      {/* Desktop Hover Arrow */}
                      <svg
                        className="hidden xl:block h-4 w-4 fill-current text-black"
                        viewBox="57 35.171 26 16.043"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" />
                      </svg>
                    </div>


                    {/* Submenu */}
                    <ul
                      className={`submenu-scroll max-h-[70vh] text-lg overflow-y-auto xl:absolute xl:left-0 xl:top-14 xl:min-w-[280px]
                        bg-white rounded-xl border border-[#e6d8a3]
                        p-3 shadow-[0_4px_18px_rgba(0,0,0,0.08)]
                        xl:opacity-0 xl:invisible xl:group-hover:visible xl:group-hover:opacity-100
                        transition-all duration-200
                        ${openSubmenu === menuItem.id ? "block" : "hidden xl:block"}
                      `}
                    >
                      {menuItem.submenu.map((subItem) => (
                        <li key={subItem.id} className="relative group/sub">
                          {subItem.submenu ? (
                            <>
                              <button
                                onClick={() => toggleChildMenu(subItem.id)}
                                className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-black"
                              >
                                {subItem.title}
                                <svg
                                  className={`ml-2 h-3 w-3 fill-current transition-transform duration-200 xl:hidden ${openChildMenu === subItem.id
                                    ? "rotate-90"
                                    : ""
                                    }`}
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M184 112l144 144-144 144z" />
                                </svg>
                              </button>

                              {/* Child menu */}
                              <ul
                                className={`xl:absolute xl:left-52 xl:top-0 xl:min-w-[220px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent xl:bg-[rgba(255,255,255,0.95)] xl:p-3 xl:shadow-lg xl:opacity-0 xl:invisible xl:group-hover/sub:visible xl:group-hover/sub:opacity-100 xl:transition-all xl:duration-200 ${openChildMenu === subItem.id
                                  ? "block"
                                  : "hidden xl:block"
                                  }`}
                              >
                                {subItem.submenu.map((child) => (
                                  <li key={child.id}>
                                    <Link
                                      href={child.path || "#"}
                                      className="block px-4 py-2 text-sm text-black"
                                      onClick={closeMobileMenu} // ✅
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={subItem.path || "#"}
                              className="block px-4 py-2 text-sm text-black"
                              onClick={closeMobileMenu} // ✅
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={menuItem.path || "#"}
                    className={`block tracking-wide text-black transition-colors duration-200 ${pathUrl === menuItem.path ? "text-[#000000]" : ""
                      }`}
                    onClick={closeMobileMenu} // ✅
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="hidden xl:block">
          <div className="flex justify-center">
            <a
              href="https://wa.me/917000000000?text=Hi%20I%20need%20homework%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#f8d88c] to-[#c8912b] text-[#6a480f] font-bold px-10 py-3 rounded-lg text-lg shadow-lg border border-[#eac16c] hover:opacity-90 transition text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
