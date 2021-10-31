import type { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useSidebar } from '../context/SidebarContext'
import { PAGES } from '../constants/pages'
import { MENU_CLOSE } from '../constants/alt-tags'

const Sidebar: NextComponentType = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <aside
      className={`fixed top-0 right-0 h-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl w-2/3 p-8 pr-6 transition-transform duration-200 ease-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-hidden={!isSidebarOpen}
    >
      <button
        className="block ml-auto mt-1 leading-none"
        onClick={toggleSidebar}
      >
        <Image
          src="/shared/icon-close.svg"
          alt={MENU_CLOSE}
          width={19}
          height={19}
        />
      </button>

      <nav className="pt-16">
        <ul className="space-y-8 text-white font-barlow-condensed text-base tracking-widest uppercase">
          {PAGES.map((page) => (
            <li key={page.prefixIndex}>
              <Link href={page.path}>
                <a onClick={toggleSidebar}>
                  <b className="pr-2">{page.prefixIndex}</b>
                  {page.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
