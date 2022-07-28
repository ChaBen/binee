import { Prisma, PrismaClient } from '@prisma/client'

const data = [
  {
    title: '湖北微果',
    description: '고객센터 1:1 라이브 채팅, 영상, 음성 통화 시스템',
    startDate: '2020.01',
    endDate: '',
    tags: ['React', 'Next', 'Antd', 'Tailwind'],
  },
]

const prisma = new PrismaClient()

async function main() {
  data.map(async (item) => {
    const personalHistory = await prisma.personalHistory.create({
      data: item,
    })
    console.log(personalHistory)
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
