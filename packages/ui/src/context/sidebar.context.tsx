import React, { useState, useMemo, createContext } from 'react'

type ContextProps = {
    toggleSidebar: () => void;
    closeSidebar: () => void;
    isSidebarOpen: boolean;
  };
// create context
export const SidebarContext = createContext<Partial<ContextProps>>({})

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () =>  {
    setIsSidebarOpen(false)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  )

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}