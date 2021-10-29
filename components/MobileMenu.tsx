import type { NextComponentType } from 'next'
import Image from 'next/image'

const MobileMenu: NextComponentType = () => {
  return (
    <button className="leading-none">
      <Image src="/shared/icon-hamburger.svg" alt="Open Menu" width={24} height={21} />
    </button>
  )
}

export default MobileMenu
