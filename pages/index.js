import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage/HomePage'
import Services from '../components/Services/Services'
import Feedbacks from '../components/Feedback/Feedbacks'
import Hero from '../components/Hero/Hero'
import Sponsors from '../components/Sponsors/Sponsors'
import Gallery from '../components/Galleries/Gallery'
import MainNav from '../components/Jewelery/Layout/MainNav'
import Footer from '../components/Jewelery/Layout/Footer'

import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Home() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false)
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products');

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json())
        setLoading(false)
      }

      return () => {
        componentMounted = false;
      }
    }

    getProducts();
  }, [])


  const Loading = () => {
    return (
      <>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
      </>
    )
  }

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className={styles.buttons}>
          <button className={styles.btn2} onClick={() => setFilter(data)}>All</button>
          <button className={styles.btn2} onClick={() => filterProduct("electronics")}>Electronics</button>
          <button className={styles.btn2} onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className={styles.btn2} onClick={() => filterProduct("men's clothing")}>Mens Clothing</button>
          <button className={styles.btn2} onClick={() => filterProduct("women's clothing")}>Women Clothing</button>
        </div>
        <div className={styles.cards}>
          {filter.map((product) => {
            return (
              <>
                <HomePage key={product.id} product={product} />
              </>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shopify</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNav />

      <main className={styles.main}>
        <Hero />
        <div className={styles.display}>
          <div>
            <h3 className={styles.head}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque corrupti explicabo quas quisquam cupiditate quaerat necessitatibus eius voluptates
              provident voluptatum.</h3>
            <p className={styles.texts}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, nisi!</p>
          </div>
          <h2 className={styles.texts}>Our Products at a Glance</h2>
          {loading ? <Loading /> : <ShowProducts />}
        </div>

        <div className={styles.containers}>
          <Services />
        </div>

        <div>
          <Feedbacks />
        </div>

        <div>
          <Sponsors />
        </div>

        <div>
          <Gallery />
        </div>
      </main>

      <Footer />
    </div>
  )
}