import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioData = [
  {
    img: 'makers.jpeg',
    title: '카카오 메이커스',
  },
  {
    img: 'huayou.jpeg',
    title: '花友直播',
  },
  {
    img: 'nonghyup.jpeg',
    title: '농협은행',
  },
]

export function PortfolioList() {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
      {PortfolioData.map((item, index) => (
        <div className="max-w-sm">
          <div>
            <Image
              alt={item.title}
              width={220}
              height={360}
              sizes="50vw"
              src={`/static/images/${item.img}`}
              priority
              className="rounded-lg"
            />
          </div>
          <div className="font-bold text-sm md:text-base tracking-tight my-2 text-black dark:text-white">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Portfolio({ all }: { all?: boolean }) {
  return (
    <div className="mb-16">
      <div className="flex items-center mb-6">
        <div className="title">포트폴리오</div>
        {all && (
          <Link href="/portfolio">
            <a className=" text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read all →
            </a>
          </Link>
        )}
      </div>
      <PortfolioList />
    </div>
  )
}
