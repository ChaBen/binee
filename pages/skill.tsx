import Layout from '@/components/common/layout'
import React from 'react'

type ItemProps = {
  key: string
  type: string
  name: string
  proficiency: number
}

const frontend: ItemProps[] = [
  {
    key: '1',
    name: 'HTML',
    type: 'Frontend',
    proficiency: 98,
  },
  {
    key: '10',
    type: 'Frontend',
    name: 'CSS',
    proficiency: 98,
  },
  {
    key: '3',
    type: 'Frontend',
    name: 'Javascript',
    proficiency: 95,
  },
  {
    key: '4',
    type: 'Frontend',
    name: 'Vue',
    proficiency: 93,
  },
  {
    key: '5',
    type: 'Frontend',
    name: 'React',
    proficiency: 90,
  },
  {
    key: '6',
    type: 'Frontend',
    name: 'Nuxt',
    proficiency: 85,
  },
  {
    key: '7',
    type: 'Frontend',
    name: 'Next',
    proficiency: 83,
  },
  {
    key: '8',
    type: 'Frontend',
    name: 'Typescript',
    proficiency: 80,
  },
  {
    key: '9',
    type: 'Frontend',
    name: 'Svelte',
    proficiency: 70,
  },
]
const backend: ItemProps[] = [
  {
    key: '10',
    type: 'Backend',
    name: 'Node',
    proficiency: 90,
  },
  {
    key: '11',
    type: 'Backend',
    name: 'Express',
    proficiency: 80,
  },
  {
    key: '12',
    type: 'Backend',
    name: 'Nest',
    proficiency: 75,
  },
  {
    key: '13',
    type: 'Backend',
    name: 'Fastify',
    proficiency: 70,
  },
  {
    key: '14',
    type: 'Backend',
    name: 'PHP',
    proficiency: 50,
  },
  {
    key: '15',
    type: 'Backend',
    name: 'PostgreSQL',
    proficiency: 42,
  },
  {
    key: '16',
    type: 'Backend',
    name: 'MySQL',
    proficiency: 40,
  },
  {
    key: '17',
    type: 'Backend',
    name: 'Mariadb',
    proficiency: 40,
  },
  {
    key: '18',
    type: 'Backend',
    name: 'Prisma',
    proficiency: 30,
  },
]

function SkillItem({ data }: { data: ItemProps }) {
  return (
    <div className="flex items-center h-10 group cursor-pointer" key={data.key}>
      <div className="flex-none w-[90px] mr-4 text-right group-hover:font-bold transition-all">
        {data.name}
      </div>
      <div className="flex gap-2 items-center flex-1">
        <div
          className={`bar h-2 rounded-full transition-all group-hover:h-[10px] ${data.type}-bar`}
          style={{ width: data.proficiency + '%' }}
        ></div>
        <div
          className={`text-black/70 dark:text-white/80 text-sm transition ${data.type}-val`}
        >
          {data.proficiency}
        </div>
      </div>
    </div>
  )
}

export default function Skill() {
  return (
    <Layout>
      <div className="title">Frontend</div>
      <div className="mr-10 mt-6">
        {frontend.map((item) => (
          <SkillItem data={item}></SkillItem>
        ))}
      </div>
      <div className="title mt-12">Backend</div>
      <div className="mr-10 mt-6">
        {backend.map((item) => (
          <SkillItem data={item}></SkillItem>
        ))}
      </div>
      {/* <div className="relative h-2 bg-gradient-to-r from-blue-300 to-blue-500 w-full rounded-full mt-10 after:absolute after:right-0 after:h-2 after:left-[70%] after:bg-gray-900 after:rounded-full">
        <div className=""></div>
      </div> */}
    </Layout>
  )
}
