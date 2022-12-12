export interface PersonalHistory {
  title: string
  description: string
  link: null | string
  startDate: string
  endDate: string
  tags: string[]
}

export const loadHistory: PersonalHistory[] = [
  {
    title: '에이블애널리틱스',
    description: '병원 관리자 페이지 개발',
    link: 'https://broccoli365.vercel.app/',
    startDate: '2022.10',
    endDate: '2022.12',
    tags: ['HTML', 'CSS', 'Vue', 'Element Plus', 'Tailwind'],
  },
  {
    title: '위쿱(똑똑한 개발자)',
    description: '프리랜서 마켓플레이스',
    link: 'https://wecoop.link/',
    startDate: '2022.08',
    endDate: '2022.10',
    tags: ['HTML', 'CSS', 'React', 'Next', 'ChakraUI', 'Tailwind'],
  },
  {
    title: '블루로고',
    description: '탄소 상쇄 플랫폼(탄소를 구매, 판매하는 플랫폼)',
    link: 'https://business-site-app.vercel.app',
    startDate: '2022.01',
    endDate: '2022.08',
    tags: ['HTML', 'CSS', 'React', 'Next', 'Antd', 'Tailwind'],
  },
  {
    title: '花友直播(중국)',
    description: '1:1 라이브 채팅, 영상, 음성 통화 시스템',
    link: null,
    startDate: '2020.01',
    endDate: '',
    tags: ['Nest', 'Prisma', 'React', 'Next', 'Antd', 'Tailwind'],
  },
  {
    title: '카카오 메이커스',
    description:
      '카카오톡 - 더보기 - 메이커스(웹뷰) 결제, 로그인, 상품상세 & 관리자 페이지 프론트앤드개발',
    link: null,
    startDate: '2019.04',
    endDate: '',
    tags: ['Frontend', 'Vue2', 'Nuxt'],
  },
  {
    title: 'FNG SYSTEM',
    description: '주변 주유소 정보제공 앱서비스',
    link: null,
    startDate: '2018.07',
    endDate: '2019.03',
    tags: ['Frontend', 'Framework7', 'Vue'],
  },
  {
    title: '빗썸(대한민국 1등 가상화페 거래소)',
    description: '비트코인 웹결제 서비스',
    link: null,
    startDate: '2017.07',
    endDate: '',
    tags: ['Frontend', 'PHP', 'Javascript'],
  },
  {
    title: '시시브랜드',
    description: '중국상표출원과 해외상표출원 서비스',
    link: null,
    startDate: '2017.01',
    endDate: '',
    tags: ['Frontend', 'Angular', 'PHP'],
  },
  {
    title: 'SK 주식회사 C&C',
    description: '클라우드 서비스 사이트',
    link: null,
    startDate: '2016.03',
    endDate: '',
    tags: ['Frontend', 'Javascript'],
  },
  {
    title: 'KB인베스트먼트',
    description: '국민은행 모바일 웹사이트 제작',
    link: null,
    startDate: '2015.06',
    endDate: '2015.09',
    tags: ['Javascript'],
  },
  {
    title: '일산병원',
    description: '병원 홈페이지 접근성 리뉴얼',
    link: null,
    startDate: '2014.05',
    endDate: '',
    tags: ['Javascript'],
  },
  {
    title: '현대홈쇼핑',
    description: '모바일웹 쇼핑몰 서비스,첫 반응형 웹사이트 세대',
    link: null,
    startDate: '2012.09',
    endDate: '',
    tags: ['Javascript', 'jQuery'],
  },
  {
    title: '아사달',
    description: '아사몰 2.0 PHP 개발 & Explorer 6 크로스 브라우징 Table 코딩',
    link: null,
    startDate: '2009.08',
    endDate: '',
    tags: ['PHP', 'Javascript', 'Explorer 6'],
  },
]
