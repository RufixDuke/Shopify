import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.nav}>
          {/* <img src="" alt="logo" /> */}
          <Image src={'/../../../../Downloads/cdc-Vqt9v7v6g44-unsplash.jpg'}
            alt="Logo"
            width={100}
            height={100} />
        </div>

        <div>
          <nav className={styles.links}>
            <Link href="/electronics">
              <a className={styles.subnav}>Electronics</a>
            </Link>
            <Link href="/jewelery">
              <a className={styles.subnav}>Jewelery</a>
            </Link>
            <Link href='/men'>
              <a className={styles.subnav}>For Men</a>
            </Link>
            <Link href='/women'>
              <a className={styles.subnav}>For Women</a>
            </Link>
          </nav>
        </div>

        <div>
          Contact Us
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <h2>DUKE WEB SHOP</h2>
          </div>

          <div>
            <p>Start learning web development right now</p>
            <Link href='/contact'>
              <a className={styles.contact}>Read More</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
