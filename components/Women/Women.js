import Image from 'next/image'
import Link from 'next/link'
import styles from './Women.module.css'

function OneWoman({ women }) {

    let a = women.price
    let b = Number(a)
    let c = b * 0.85

    return (
        <>

            <Link href={`/women/${women.id}`} passHref>
                <div className={styles.card}>
                    <Image src={women.image} alt="Image" width='100%' height='150px' />
                    <div className={styles.details}>
                        <p>{women.title.length > 20 ? `${women.title.slice(0, 20)}...` : women.title}</p>
                        <div className={styles.price}>
                            <p className={styles.gray}>${women.price}</p>
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

export default OneWoman
