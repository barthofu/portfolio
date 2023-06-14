import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
        <body style={{ overflowX: 'hidden' }}>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}