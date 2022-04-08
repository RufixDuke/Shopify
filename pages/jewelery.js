import styles from '../styles/display.module.css';
import classes from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


function Jewelery({ jeweleries }) {
    return (
        <>

            <header className={classes.header}>
                <div className={classes.nav}>
                    {/* <img src="" alt="logo" /> */}
                    <Image
                        src={'/../../../../Downloads/cdc-Vqt9v7v6g44-unsplash.jpg'}
                        alt="Logo"
                        width={100}
                        height={100} />
                </div>

                <div>
                    <nav className={classes.links}>
                        <Link href="/electronics">
                            <a className={classes.subnav}>Electronics</a>
                        </Link>
                        <Link href="/jewelery">
                            <a className={classes.subnav}>Jewelery</a>
                        </Link>
                        <Link href='/men'>
                            <a className={classes.subnav}>For Men</a>
                        </Link>
                        <Link href='/women'>
                            <a className={classes.subnav}>For Women</a>
                        </Link>
                    </nav>
                </div>

                <div>
                    Contact Us
                </div>
            </header>
            <h2>Welcome to the Jewelery Section</h2>
            <div className={styles.cards}>
                {
                    jeweleries.map((jewelery) => {
                        return (
                            <div key={jewelery.id} className={styles.container}>
                                <div>
                                    <div className={styles.card}>
                                        <div className={styles.image}>
                                            <img src={jewelery.image} alt="Image" width="100%" height="200px" />
                                        </div>
                                        <div className={styles.details}>
                                            <h3>{jewelery.title}</h3>
                                            <p>${jewelery.price}</p>
                                            {/* <p>{jewelery.category}</p>
                                <p>{jewelery.description}</p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
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