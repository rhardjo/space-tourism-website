import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SidebarProvider } from '../context/SidebarContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  )
}

export default MyApp
