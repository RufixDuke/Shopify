import styles from '../../styles/display.module.css';
import Head from 'next/head'
import OneJewelery from '../../components/Jewelery/Jewelery';
import Footer from '../../components/Jewelery/Layout/Footer';
import MainNav from '../../components/Jewelery/Layout/MainNav';


function Jewelery({ jeweleries }) {
    return (
        <>
            <Head>
                <title>Shopify || Jewelery</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainNav />

            <h2 className={styles.head}>Welcome to the Jewelery Section</h2>
            <div className={styles.cards}>
                {jeweleries.map((jewelery) => (
                    <OneJewelery key={jewelery.id} jewelery={jewelery} />
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export async function getStaticProps() {
    const data = await fetch('https://fakestoreapi.com/products/category/jewelery').then(data => data.json())
    return {
        props: {
            jeweleries: data,
        }
    }
}


export default Jewelery;