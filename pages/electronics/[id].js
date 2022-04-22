import Image from 'next/image'
import MainNav from '../../components/Jewelery/Layout/MainNav'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function OneElectronic({ electronic }) {
    let a = Number(electronic.price)
    let b = a * 0.85
    return (
        <>
            <div>
                <MainNav />
                <div className={styles.checkout}>
                    <div><Image src={electronic.image} width={75} height={67} alt="image" /></div>
                    <div key={electronic.id}>
                        <h3>{electronic.title}</h3>
                        <p>Category: {electronic.category}</p>
                        <div>
                            <p>${b}</p>
                            <p>${electronic.price}</p>
                        </div>
                        <Link href='/cart' passHref>
                            <button className={styles.cart}>Add To Cart</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export async function getStaticPaths() {
    const paths = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res => res.json())
        .then(data => data.map(electronic => ({
            params: {
                id: electronic.id.toString()
            }
        }
        )))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }) {
    const data = await fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(res => res.json())
        .then(res => res.filter(item => (item.id == id))[0])

    return {
        props: {
            electronic: data,
        }
    }
}

export default OneElectronic