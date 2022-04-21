import Image from "next/image"
import styles from '../../../styles/Home.module.css'
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
// import styles from '../../styles/Home.module.css'

function Picture({ picture }) {
    return (
        <>
            <div className={styles.mmm}>
                <h2 className={styles.texts}>Discover <span className={styles.yellow}>The Best</span> Accessories For <span className={styles.bolden}>Your Interior</span></h2>
                <p className={styles.small}>we sell accessories that perfectly gap between beauty and functionality</p>

                <Link href='/electronics' passHref>
                    <button className={styles.btn}>
                        Shop Now
                        <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            style={{ fontSize: 50, marginLeft: 10, color: 'yellow' }}
                        />
                    </button>
                </Link>
            </div>

            <div>
                <Image
                    className={styles.image}
                    src={picture.image}
                    alt="Just Phone"
                    width='100px'
                    height='100px'
                />
            </div>

        </>
    )
}

export default Picture;