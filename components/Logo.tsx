import type { NextComponentType } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Logo: NextComponentType = () => {
  return (
    <Link href="/">
      <a className="bg-white w-full max-w-[2.5rem] h-10 md:max-w-[3rem] md:h-12 rounded-full">
        <Image src="/shared/logo.svg" alt="Space Logo" width={48} height={48} />
      </a>
    </Link>
  )
}

export default Logo
