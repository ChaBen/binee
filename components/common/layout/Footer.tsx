import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-3xl mx-auto flex flex-col justify-center items-start">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a
            className="text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/leeerob"
          >
            Github
          </a>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link href="/guestbook">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
