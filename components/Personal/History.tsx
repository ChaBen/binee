import { PersonalHistory } from '@/types/PersonalHistory'
import { cn } from '@/utility/classname'
import { useState } from 'react'

function ListItem({ item }: { item: PersonalHistory }) {
  return (
    <li className="ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {item.startDate} ~ {item.endDate}
      </time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {item.title}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {item.description}
      </p>
      <div className="flex items-center flex-wrap gap-2">
        {item.tags.map((tag, key) => (
          <span
            key={key}
            className="bg-gray-400 text-white text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </li>
  )
}
function ShowAll({ setState }: { setState: (is: boolean) => void }) {
  return (
    <div className="text-center">
      <button
        type="button"
        className="inline-flex items-center pr-6 pl-5 py-2.5 rounded-full bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => setState(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="12"
          height="12"
          stroke="currentColor"
          fill="currentColor"
          className="mr-1"
        >
          <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
        </svg>
        더보기
      </button>
    </div>
  )
}

export default function History({ data }: { data: PersonalHistory[] }) {
  const [isShowAll, setisShowAll] = useState<boolean>(false)

  return (
    <div className="history-root">
      <div
        className={cn(
          'history',
          !isShowAll ? 'h-[520px] overflow-hidden mask' : ''
        )}
      >
        <div className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          이력
        </div>
        <ol className="flex flex-col gap-y-10 relative border-l border-gray-200 dark:border-gray-700">
          {data.map((item: any) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ol>
      </div>
      {!isShowAll && <ShowAll setState={setisShowAll} />}
    </div>
  )
}
