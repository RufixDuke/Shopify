import styles from '../styles/display.module.css';
import Head from 'next/head'
import OneJewelery from '../../components/Jewelery/Jewelery';


function Jewelery({ jeweleries }) {
    return (
        <>
            <Head>
                <title>Shopify</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2>Welcome to the Jewelery Section</h2>
            <div className={styles.cards}>
                {
                    jeweleries.map((jewelery) => {
                        <OneJewelery key={jewelery.id} jewelery={jewelery} />
                    }
                    )
                }
            </div>

        </>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
    const data = await response.json()

    return {
        props: {
            jeweleries: data,
        }
    }
}


export default Jewelery;