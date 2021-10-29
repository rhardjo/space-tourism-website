import type { NextComponentType } from 'next'

import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header: NextComponentType = () => {
  return (
    <header className="w-full flex justify-between items-center ">
      <Logo />
      <MobileMenu />
    </header>
  )
}

export default Header
