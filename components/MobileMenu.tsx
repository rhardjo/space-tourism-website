import type { NextComponentType } from 'next'
import Image from 'next/image'
import { useSidebar } from '../context/SidebarContext'

const MobileMenu: NextComponentType = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <button
      className="leading-none md:hidden"
      onClick={toggleSidebar}
      aria-hidden={isSidebarOpen}
    >
      <Image
        src="/shared/icon-hamburger.svg"
        alt="Open Menu"
        width={24}
        height={21}
      />
    </button>
  )
}

export default MobileMenu
