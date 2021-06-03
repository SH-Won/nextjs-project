import Document, { Html, Head, Main, NextScript } from 'next/document'
// 서버에서만 렌더링됨
class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument