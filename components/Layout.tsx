import type { NextComponentType } from 'next'
import Header from './Header'

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className="p-6 md:px-10 lg:px-14 lg:py-10">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
