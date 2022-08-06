import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className=" px-6 sm:px-8">
        <div className="max-w-2xl mx-auto mb-14">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
