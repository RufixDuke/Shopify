import Image from 'next/image'
import Link from 'next/link'

import styles from './HomePage.module.css'
import Star from './Star/Star'

function HomePage({ product }) {
    // let rating = [product.rating]
    let a = product.price
    let b = Number(a)
    let c = b * 0.15

    return (
        <>
            <Link href={`/${product.category}/${product.id}`} passHref>
                <div className={styles.card}>
                    <img className={styles.img} src={product.image} alt={product.title} width='100%' />
                    <div className={styles.container}>
                        <p>{product.title}</p>
                        <div className={styles.price}>
                            <p className={styles.gray}>${product.price}</p>
                            <p className={styles.green}>${c.toFixed(2)}</p>
                        </div>
                        <div className={styles.starsOuter}>
                            <Star rating={product.rating.rate} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomePage;