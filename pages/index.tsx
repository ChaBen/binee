// import prisma from '@/lib/prisma'
import Head from 'next/head'
import { useEffect } from 'react'
import { PrismaClient } from '@prisma/client'
import prisma from '@/lib/prisma'

export default function Index() {
  async function test() {
    const prisma = new PrismaClient()
    const personalHistory = await prisma.personalHistory.findMany()
    console.log(personalHistory)
  }
  useEffect(() => {
    test()
  })
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-24">
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
        <div className="p-10 bg-black">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2019.04 ~ 2019.10
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                카카오 메이커스
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                카카오톡 - 더보기 - 메이커스 개발(웹뷰) 결제, 로그인,
                상품상세... & 관리자 페이지 개발
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #Frontend
                </span>
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #Vue2
                </span>
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #Nuxt
                </span>
              </div>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2018.04 ~ 2018.08
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                FNG SYSTEM
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2018.04 ~ 2018.08
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                OK저축은행
                <a href="http://www.oksavingsbank.com">www.oksavingsbank.com</a>
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2009.08 ~ 2010.10
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="http://www.asadal.com/">아사달</a>{' '}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                아사몰 2.0 PHP 개발 & explorer 6 크로스 브라우징 Table 코딩
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #Php
                </span>
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #Javascript
                </span>
                <span className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  #explorer 6
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const personalHistory = await prisma.personalHistory.findMany()

  // console.log(process.env.SUPABASE_SERVICE_ROLE_KEY)

  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  //   process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  // )
  // const response = await supabase.from('images').select('*').order('id')
  // console.log(response)

  return {
    props: {}
  }
}
