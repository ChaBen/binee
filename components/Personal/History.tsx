import { PersonalHistory } from '@/types/PersonalHistory'

function ListItem({ item }: { item: PersonalHistory }) {
  return (
    <li className="mb-10 ml-4">
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
      <div className="flex items-center gap-2">
        {item.tags.map((tag, key) => (
          <span
            key={key}
            className="bg-gray-400 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </li>
  )
}

export default function History({ data }: { data: PersonalHistory[] }) {
  return (
    <div className="py-10">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data.map((item: any) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ol>
    </div>
  )
}
