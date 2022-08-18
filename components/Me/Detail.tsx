import Image from 'next/image'

function Detail() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Binee(차빈)
          </h1>
          <h2 className="text-lg text-gray-700 dark:text-gray-200 mb-4">
            퍼블리셔 & 프론트앤드 개발자(프리렌서)
          </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">
            웹개발 12년차 HTML, CSS, JavaScript, TypeScript, Vite, React, Vue,
            Next, Nuxt, Node, Git 다양한 스킬 바탕으로 웹 개발을 하고 있습니다.
          </p>
          <div className="mb-16">
            현재
            <div className="inline-flex gap-2 mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              <a
                href="https://astro.build/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Astro,
              </a>
              <a
                href="https://bun.sh/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Bun
              </a>
            </div>
            등 프로젝트에 관심 같고 있습니다.
          </div>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          <Image
            alt="Binee"
            height={176}
            width={176}
            src="/static/images/avatar.png"
            sizes="30vw"
            priority
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Detail
