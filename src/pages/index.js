import Head from 'next/head';
import TerminalWrapper from '../components/TerminalWrapper'
import styles from '@/styles/Home.module.css'
import 'xterm/css/xterm.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>michaelestrada.net</title>
        <meta name="description" content="DevOps engineer living and working in San Francisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <TerminalWrapper />
      </main>
    </>
  )
}
