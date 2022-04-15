import Image from 'next/image'
import Link from 'next/link'
import styles from './Jewelery.module.css'

function OneJewelery({ jewelery }) {
    return (
        <>
            <Link href={`/jeweleries/${jewelery.id}`} passHref>
                <div className={styles.container}>
                    <div>
                        <div className={styles.card}>
                            <div className={styles.image}>
                                <Image src={jewelery.image} alt="Image" width="100%" height="200px" />
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
            </Link>
        </>
    )
}

export default OneJewelery