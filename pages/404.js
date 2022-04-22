import Link from 'next/link'
import MainNav from '../components/Jewelery/Layout/MainNav'
import Image from 'next/image'
import Search from '../public/photo-1558420034-e98aa2ce8cac.jpeg'

import styles from '../styles/Home.module.css'

function PageNotFound() {
    return <>
        <div className={styles.PageNot}>
            <MainNav />
            <div className={styles.PageNotFound}>
                <div>
                    <p>404 error</p>
                    <p>Oops!!!</p>
                    <h2>Page could not be found...</h2>
                    <p>Sorry, the page you are looking fro does not exist or has been moved.
                        Try searching out site, or go back.</p>

                    <Link href='/'>
                        <button className={styles.btns}>Take me Home</button>
                    </Link>
                </div>

                <div>
                    <Image src={Search} alt="Page Not Found" width='750px' height='550px' />
                </div>
            </div>

        </div>

    </>

}

export default PageNotFound