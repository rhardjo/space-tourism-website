import type { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Logo: NextComponentType = () => {
  return (
    <Link href="/">
      <a className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full">
        <Image src="/shared/logo.svg" alt="Space Logo" width={48} height={48} />
      </a>
    </Link>
  )
}

export default Logo
