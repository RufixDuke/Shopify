import Image from 'next/image'
import Link from 'next/link'

import styles from './HomePage.module.css'

function HomePage({ product }) {
    let a = product.price
    let b = Number(a)
    let c = b * 0.85

    return (
        <>
            <Link href={`/${product.category}/${product.id}`} passHref>
                <div className={styles.card}>
                    <Image className={styles.img} src={product.image} alt={product.title} width='100%' height= '150px' />
                    <div className={styles.container}>
                        <p>{product.title.length > 20 ? `${product.title.slice(0, 17)}...` : product.title}</p>
                        <div className={styles.price}>
                            <p className={styles.gray}>${product.price}</p>
                            <p className={styles.green}>${c.toFixed(2)}</p>
                        </div>
                        {/* <p>{product.description.length > 20 ? `${product.description.slice(0, 20)}...` : product.description}</p> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default HomePage;