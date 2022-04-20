import Image from 'next/image'
import Link from 'next/link'
import styles from './Electronic.module.css'

function Electronic({ electronic }) {
    
    let a = electronic.price
    let b = Number(a)
    let c = b * 0.85

    return (
        <>

            <Link href={`/electronics/${electronic.id}`} passHref>
                <div className={styles.card}>
                    <Image src={electronic.image} alt="Image" width='100%' height='150px' />
                    <div className={styles.details}>
                        <p>{electronic.title.length > 20 ? `${electronic.title.slice(0, 20)}...` : electronic.title}</p>
                        <div className={styles.price}>
                            <p className={styles.gray}>${electronic.price}</p>
                            <p className={styles.green}>${c.toFixed(2)}</p>
                        </div>
                        {/* <p>{electronic.category}</p>
                                <p>{electronic.description}</p> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Electronic
