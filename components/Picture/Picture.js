import Image from "next/image"
import styles from '../../styles/Home.module.css'

function Picture({picture}) {
    return(
        <>
            <Image
                className={styles.image}
                src={picture.image}
                alt="Just Phone"
                width='100px'
                height='100px'
            />
        </>
    )
}

export default Picture;