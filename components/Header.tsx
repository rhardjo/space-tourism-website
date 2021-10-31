import type { NextComponentType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

import { PAGES } from '../constants/pages'

const Header: NextComponentType = () => {
  const router = useRouter()

  return (
    <header className="w-full flex justify-between items-center md:pt-0">
      <Logo />

      <hr className="w-full h-[1px] bg-white opacity-25 ml-16 -mr-10 hidden lg:block z-10" />
      <nav className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl -mr-10 lg:-mr-14 px-12 lg:px-32 hidden md:block">
        <ul className="space-x-9 text-white font-barlow-condensed text-sm tracking-widest lg:text-subheading2 uppercase whitespace-nowrap">
          {PAGES.map((page) => (
            <li className="inline-block" key={page.prefixIndex}>
              <Link href={page.path}>
                <a
                  className={`inline-block py-10 border-white hover:border-b-[3px] hover:border-opacity-50 ${
                    router.pathname === page.path && 'border-b-[3px]'
                  }`}
                >
                  <b className="pr-2 hidden lg:inline-block">
                    {page.prefixIndex}
                  </b>
                  {page.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <MobileMenu />
    </header>
  )
}

export default Header
