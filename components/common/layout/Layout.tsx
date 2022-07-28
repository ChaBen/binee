import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="px-6 sm:px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
