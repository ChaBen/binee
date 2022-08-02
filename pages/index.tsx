import Layout from '@/components/common/layout'
import Detail from '@/components/Me/Detail'
import History from '@/components/Personal/History'
import Portfolio from '@/components/Portfolio'
import { LoadHistory } from '@/lib/loadHistory'
import { PersonalHistory } from '@/types/PersonalHistory'

export default function Index({
  personalHistory,
}: {
  personalHistory: PersonalHistory[]
}) {
  return (
    <Layout>
      <Detail />
      <Portfolio />
      <History data={personalHistory} />
    </Layout>
  )
}

export async function getStaticProps() {
  const personalHistory = await LoadHistory()

  return {
    props: {
      personalHistory,
    },
  }
}
