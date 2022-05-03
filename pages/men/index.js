import styles from '../../styles/display.module.css';
import Head from 'next/head'
import Men from '../../components/Men/Men'
import Footer from '../../components/Jewelery/Layout/Footer';
import MainNav from '../../components/Jewelery/Layout/MainNav';


function DisplayProducts({ men }) {
    return (
        <>
            <Head>
                <title>Shopify || Men</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainNav />

            <h1 className={styles.head}>These are the available Electronic gadgets</h1>
            <div className={styles.cards}>
                {men.map((men) => (
                    <Men key={men.id} men={men} />
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}


export async function getStaticProps() {
    const data = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`).then(data => data.json())
    return {
        props: {
            men: data,
        }
    }
}

export default DisplayProducts;