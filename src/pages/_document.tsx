import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
        <body style={{ overflowX: 'hidden' }}>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}