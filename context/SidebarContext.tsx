import { createContext, useContext, useState, ReactNode } from 'react'

type SidebarContextType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

type SidebarProviderProps = {
  children: ReactNode
}

const sidebarContextDefaultValues: SidebarContextType = {
  isSidebarOpen: false,
  toggleSidebar: () => {},
}

const SidebarContext = createContext<SidebarContextType>(
  sidebarContextDefaultValues
)

export function useSidebar() {
  return useContext(SidebarContext)
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const state = {
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen(!isSidebarOpen),
  }

  return (
    <SidebarContext.Provider value={state}>{children}</SidebarContext.Provider>
  )
}
