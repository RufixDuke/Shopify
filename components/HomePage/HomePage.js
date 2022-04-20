import Image from 'next/image'
import Link from 'next/link'

import styles from './HomePage.module.css'

function HomePage({ product }) {
    let a = product.price
    let b = Number(a)
    let c = b * 0.15

    return (
        <>
            <Link href={`/${product.category}/${product.id}`} passHref>
                <div className={styles.card}>
                    <img src={product.image} alt={product.title} width='100%'/>
                    <div className={styles.container}>
                        <p>{product.title}</p>
                        <p>{c}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomePage;