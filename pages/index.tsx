import Layout from '@/components/common/layout'
import History from '@/components/Personal/History'
import { supabase } from '@/lib/supabaseClient'
import { PersonalHistory } from '@/types/PersonalHistory'

export default function Index({
  personalHistory,
}: {
  personalHistory: PersonalHistory[]
}) {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <History data={personalHistory} />
      </div>
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
