import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-2xl mx-auto flex flex-col justify-center items-start">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8"></hr>
      <div className="w-full max-w-2xl mx-auto grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">홈</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">소개</a>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <a
            className="inline-flex items-center text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="github"
            href="https://github.com/ChaBen"
          >
            Github
          </a>
          <a
            className="inline-flex items-center text-gray-500 hover:text-gray-600 transition"
            target="_blank"
            rel="kmong"
            href="https://kmong.com/gig/358946"
          >
            Kmong
          </a>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Link href="/portfolio">
            <a className="text-gray-500 hover:text-gray-600 transition">
              포토폴리오
            </a>
          </Link>
          <Link href="/skill">
            <a className="text-gray-500 hover:text-gray-600 transition">스킬</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
