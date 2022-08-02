import Layout from '@/components/common/layout'
import Detail from '@/components/Me/Detail'
import History from '@/components/Personal/History'
import Portfolio from '@/components/Portfolio'
import { supabase } from '@/lib/supabaseClient'
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

export async function getServerSideProps() {
  const { data: personalHistory } = await supabase
    .from<PersonalHistory>('PersonalHistory')
    .select('*')
    .order('startDate', {
      ascending: false,
    })

  return {
    props: {
      personalHistory,
    },
  }
}
