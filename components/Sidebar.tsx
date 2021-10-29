import type { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useSidebar } from '../context/SidebarContext'

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
          alt="Close Menu"
          width={19}
          height={19}
        />
      </button>

      <nav className="pt-16">
        <ul className="space-y-8 text-white font-barlow-condensed text-base tracking-widest uppercase">
          <li>
            <Link href="/">
              <a>
                <b className="pr-2">00</b>Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/destinations">
              <a>
                <b className="pr-2">01</b>Destination
              </a>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <a>
                <b className="pr-2">02</b>Crew
              </a>
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <a>
                <b className="pr-2">03</b>Technology
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
