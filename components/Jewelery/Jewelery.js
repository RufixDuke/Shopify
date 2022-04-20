import Image from 'next/image'
import Link from 'next/link'
import styles from './Jewelery.module.css'

function OneJewelery({ jewelery }) {

    let a = jewelery.price
    let b = Number(a)
    let c = b * 0.85

    return (
        <>
            <Link href={`/jeweleries/${jewelery.id}`} passHref>
                <div className={styles.container}>
                    <div>
                        <div className={styles.card}>
                            <Image src={jewelery.image} alt="Image" width='100%' height='150px' />
                            <div className={styles.details}>
                                <p>{jewelery.title.length > 20 ? `${jewelery.title.slice(0, 20)}...` : jewelery.title}</p>
                                <div className={styles.price}>
                                    <p className={styles.gray}>${jewelery.price}</p>
                                    <p className={styles.green}>${c.toFixed(2)}</p>
                                </div>
                                {/* <p>{jewelery.category}</p>
                                <p>{jewelery.description}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default OneJewelery