import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function index() {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-6">
        <div className="title">추천 게시물</div>
        <Link href="/portfolio">
          <a className=" text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all →
          </a>
        </Link>
      </div>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-3">
        <div className="max-w-sm">
          <div>
            <Image
              alt="makers"
              height={576}
              width={384}
              sizes="50vw"
              src="/static/images/makers.jpeg"
              priority
              className="rounded-lg"
            />
          </div>
          <div className="font-bold text-sm md:text-base tracking-tight my-2 text-black dark:text-white">
            카카오 메이커스
          </div>
        </div>
        <div className="max-w-sm">
          <div>
            <Image
              alt="makers"
              height={576}
              width={384}
              sizes="50vw"
              src="/static/images/makers.jpeg"
              priority
              className="max-w-sm rounded-lg"
            />
          </div>
          <div className="font-bold text-sm md:text-base tracking-tight my-2 text-black dark:text-white">
            title
          </div>
        </div>
        <div className="max-w-sm">
          <div>
            <Image
              alt="makers"
              height={576}
              width={384}
              sizes="50vw"
              src="/static/images/makers.jpeg"
              priority
              className="max-w-sm rounded-lg"
            />
          </div>
          <div className="font-bold text-sm md:text-base tracking-tight my-2 text-black dark:text-white">
            title
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
