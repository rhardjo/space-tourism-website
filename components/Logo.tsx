import type { NextComponentType } from 'next'
import Image from 'next/image'

const Logo: NextComponentType = () => {
  return (
    <div className="bg-white w-10 h-10 md:w-12 md:h-12 rounded-full">
      <Image src="/shared/logo.svg" alt="Space Logo" width={48} height={48} />
    </div>
  )
}

export default Logo
