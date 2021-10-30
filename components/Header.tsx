import type { NextComponentType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

import { pages } from '../constants/pages'

const Header: NextComponentType = () => {
  const router = useRouter()

  return (
    <header className="w-full flex justify-between items-center">
      <Logo />
      <MobileMenu />
      <nav className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl -mr-10 px-12 hidden md:block">
        <ul className="space-x-9 text-white font-barlow-condensed text-sm tracking-widest uppercase">
          {pages.map((page) => (
            <li
              className={`inline-block py-10 ${
                router.pathname === page.path && 'border-b-[3px] border-white'
              }`}
              key={page.prefixIndex}
            >
              <Link href={page.path}>
                <a>
                  <b className="pr-2 hidden">{page.prefixIndex}</b>
                  {page.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
