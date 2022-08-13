import Document, { Head, Html, Main, NextScript } from 'next/document'
const meta = {
  description:
    '웹개발 12년차 HTML, CSS, JavaScript, TypeScript, Vite, React, Vue, Next, Nuxt, Node, Git 다양한 스킬 바탕으로 웹 개발을 하고 있습니다.',
}

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta content={meta.description} name="description" />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
