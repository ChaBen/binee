import Layout from '@/components/common/layout'
import Detail from '@/components/Me/Detail'
import History from '@/components/Personal/History'
import Portfolio from '@/components/Portfolio'

export default function Index() {
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)

  return (
    <Layout>
      <Detail />
      <Portfolio all />
      <History />
    </Layout>
  )
}

// export async function getStaticProps() {
//   const personalHistory = await LoadHistory()

//   console.log(personalHistory)

//   return {
//     revalidate: 60 * 60 * 24 * 7,
//     props: {
//       personalHistory: personalHistory || [],
//     },
//   }
// }
