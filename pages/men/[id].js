import Image from 'next/image'
import MainNav from '../../components/Jewelery/Layout/MainNav'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../components/redux/action/index'

function OneMan({ men }) {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    let a = Number(men.price)
    let b = a * 0.85

    const dispatch = useDispatch()

    const handleCart = (men) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(men))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(men))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div>
                <MainNav />
                <div className={styles.checkout}>
                    <div className={styles.card}>
                        <div><Image src={men.image} width={75} height={67} alt="image" /></div>
                        <div key={men.id}>
                            <h3>{men.title}</h3>
                            <p>Category: {men.category}</p>
                            <div>
                                <p>${b.toFixed(2)}</p>
                                <p><strike>${men.price}</strike></p>
                            </div>
                            <button
                                onClick={() => handleCart(men)}
                                className={styles.cart}>{cartBtn}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then(res => res.json())
        .then(data => data.map(men => ({
            params: {
                id: men.id.toString()
            }
        }
        )))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }) {
    const data = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then(res => res.json())
        .then(res => res.filter(item => (item.id == id))[0])

    return {
        props: {
            men: data,
        }
    }
}

export default OneMan;