import type { FC, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
