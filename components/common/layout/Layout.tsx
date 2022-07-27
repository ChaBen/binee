import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900">
      <Header />
      <main className="px-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
