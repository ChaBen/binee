import Layout from '@/components/common/layout'
import Detail from '@/components/Me/Detail'
import History from '@/components/Personal/History'
import { PortfolioList } from '@/components/Portfolio'
import { LoadHistory } from '@/lib/loadHistory'
import { PersonalHistory } from '@/types/PersonalHistory'
import Link from 'next/link'

export default function Index({
  personalHistory,
}: {
  personalHistory: PersonalHistory[]
}) {
  return (
    <Layout>
      <Detail />
      <div className="flex items-center mb-6">
        <div className="title">추천 게시물</div>
        <Link href="/portfolio">
          <a className=" text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read all →
          </a>
        </Link>
      </div>
      <PortfolioList />
      <History data={personalHistory} />
    </Layout>
  )
}

export async function getStaticProps() {
  const personalHistory = await LoadHistory()

  return {
    props: {
      personalHistory: personalHistory || [],
    },
  }
}
