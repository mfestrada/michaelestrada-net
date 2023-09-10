import Head from 'next/head';
import TerminalWrapper from '../components/TerminalWrapper';
import styles from '@/styles/Home.module.css';
import 'xterm/css/xterm.css';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>michaelestrada.net</title>
        <meta name="description" content="Software engineer living and working in San Francisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <TerminalWrapper />
      </main>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-P3FDEX3XMJ'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P3FDEX3XMJ');
        `}
      </Script>
      <Script id='scrapers' strategy='afterInteractive'>
        {`
          const size = {
            width: window.innerWidth || document.body.clientWidth,
            height: window.innerHeight || document.body.clientHeight
          }
          if ((size.width === 800 && size.height === 600)
            || navigator.webdriver) window.location = 'https://eff.org/'
        `}
      </Script>
    </>
  )
}
