import Layout from '@/components/common/layout'
import React from 'react'

export default function About() {
  return (
    <Layout>
      <div className="title">소개</div>
      <ul className="list-disc ml-6 mt-6">
        <li>
          Email:{' '}
          <a
            href="mailto:ckqlss@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline transition"
          >
            ckqlss@gmail.com
          </a>
        </li>
        <li>
          Website:{' '}
          <a
            href="https://binee.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline transition"
          >
            https://binee.io
          </a>
        </li>
      </ul>
      <div className="sub-title mt-10">나</div>
      <ul className="list-disc ml-6 mt-2">
        <li>읽기 쉬운 코드에 대한욕심 </li>
        <li>증상을 고치는 데 만족하지 않고 원인을 찾아낸다</li>
        <li>
          고객 및 동료의 관심사에 대해 관심을 보일 때 빛나는 효과적인 긍정적
          태도
        </li>
        <li>매일 자신을 도전하고 번성하는 긍정적인 마음</li>
        <li>프로다운 마인드</li>
      </ul>
      <div className="sub-title mt-6">취미</div>
      <ul className="list-disc ml-6 mt-2">
        <li>새로운 스크립트 라이브러리 및 프레임워크 이해</li>
        <li>ES6 및 그 이상이 이해</li>
      </ul>
      <div className="sub-title mt-6">자신있는 분야</div>
      <ul className="list-disc ml-6 mt-2">
        <li>스크립트에 대한 모든 기술 각종 라이브러리 및 프레임워크</li>
        <li>브라우저에대한 API이해</li>
        <li>탁월한 분석 및 기술 능력</li>
        <li>깔끔한 소스, 빠른코딩</li>
      </ul>
    </Layout>
  )
}
