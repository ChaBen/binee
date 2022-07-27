import { Prisma, PrismaClient } from '@prisma/client'

const data = [
  {
    title: '현대홈쇼핑',
    description: '모바일웹 쇼핑몰 서비스, 반응형 웹사이트 세대',
    startDate: '2012.09',
    endDate: '',
    tags: ['Javascript', 'jQuery'],
  },
  {
    title: '일산병원',
    description: '병원 홈페이지 접근성 리뉴얼',
    startDate: '2014.05',
    endDate: '',
    tags: ['Javascript'],
  },
  {
    title: 'KB인베스트먼트',
    description: '국민은행 모바일 사이트 제작',
    startDate: '2014.05',
    endDate: '',
    tags: ['Javascript'],
  },
  {
    title: '농협은행',
    description: '농협은행(스마트금융센터)',
    startDate: '2014.05',
    endDate: '',
    tags: ['Javascript'],
  },
  {
    title: 'Sk 주식회사 C&C',
    description: '클라우드 서비스 사이트',
    startDate: '2016.03',
    endDate: '',
    tags: ['Frontend', 'Javascript'],
  },
  {
    title: '시시브랜드',
    description: '중국상표출원과 해외상표출원 서비스',
    startDate: '2017.01',
    endDate: '',
    tags: ['Frontend', 'Angular'],
  },
  {
    title: '빗썸(대한민국 1등 가상화페 거래소)',
    description: '비트코인 결제 서비스',
    startDate: '2017.07',
    endDate: '',
    tags: ['Frontend', 'PHP', 'Javascript'],
  },
  {
    title: 'FNG SYSTEM',
    description: '주변 주유소 정보제공 서비스',
    startDate: '2018.07',
    endDate: '',
    tags: ['Frontend', 'Framework7', 'Vue'],
  },
]

const prisma = new PrismaClient()

async function main() {
  // data.map(async (item) => {
  const personalHistory = await prisma.personalHistory.update({
    where: { id: 'cl63u1jzu00012vwgcczpw4jk' },
    data: {
      startDate: '2015.06',
    },
  })
  console.log(personalHistory)
  // })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
