import type { NextComponentType } from 'next'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className="min-h-screen max-w-[1440px] mx-auto flex flex-col p-6 md:px-10 lg:px-14 md:py-0 lg:pt-10">
      <Header />
      <main className="h-full flex-auto lg:pl-28 lg:pr-16 overflow-hidden">
        {children}
      </main>
      <Sidebar />
    </div>
  )
}

export default Layout
