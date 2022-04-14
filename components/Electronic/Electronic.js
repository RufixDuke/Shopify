import Image from 'next/image'
import Link from 'next/link'
import styles from './Electronic.module.css'

function Electronic({ electronic }) {
    return (
        <>
        
            <Link href={`/electronics/${electronic.id}`} passHref>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <Image src={electronic.image} alt="Image" width={100} height={200} />
                    </div>
                    <div className={styles.details}>
                        <h3>{electronic.title}</h3>
                        <p>${electronic.price}</p>
                        {/* <p>{electronic.category}</p>
                                <p>{electronic.description}</p> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Electronic
