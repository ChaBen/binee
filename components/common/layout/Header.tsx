import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="toggle-theme"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5 h-5 text-gray-800 dark:text-gray-200"
        >
          {resolvedTheme === 'dark' ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      )}
    </button>
  )
}

export default function Header() {
  return (
    <header className="px-8">
      <Head>
        <title>Binee – Developer</title>
      </Head>
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">홈</a>
        </Link>
        <Link href="/">
          <a className="nav-link">소개</a>
        </Link>
        <Link href="/portfolio">
          <a className="nav-link">포트폴리오</a>
        </Link>
        <Link href="/skill">
          <a className="nav-link">스킬</a>
        </Link>
        <ToggleTheme />
      </nav>
    </header>
  )
}
