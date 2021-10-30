import type { NextComponentType } from 'next'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className="p-6 md:pt-0 md:px-10 lg:px-14 lg:py-10">
      <Header />
      <main>{children}</main>
      <Sidebar />
    </div>
  )
}

export default Layout
