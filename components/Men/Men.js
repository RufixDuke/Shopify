import Image from 'next/image'
import Link from 'next/link'
import styles from './men.module.css'

function Men({ men }) {

    let a = electronic.price
    let b = Number(a)
    let c = b * 0.85

    return (
        <>

            <Link href={`/men/${men.id}`} passHref>
                <div className={styles.card}>
                    <Image src={men.image} alt="Image" width='100%' height='150px' />
                    <div className={styles.details}>
                        <p>{men.title.length > 20 ? `${men.title.slice(0, 20)}...` : men.title}</p>
                        <div className={styles.price}>
                            <p className={styles.gray}>${men.price}</p>
                            <p className={styles.green}>${c.toFixed(2)}</p>
                        </div>
                        {/* <p>{men.category}</p>
                                <p>{men.description}</p> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Men;
