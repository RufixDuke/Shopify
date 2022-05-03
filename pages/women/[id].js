import Image from 'next/image'
import MainNav from '../../components/Jewelery/Layout/MainNav'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../components/redux/action/index'

function OneWoman({ woman }) {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    let a = Number(woman.price)
    let b = a * 0.85

    const dispatch = useDispatch()

    const handleCart = (woman) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(woman))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(woman))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div>
                <MainNav />
                <div className={styles.checkout}>
                    <div className={styles.card}>
                        <div><Image src={woman.image} width={75} height={67} alt="image" /></div>
                        <div key={woman.id}>
                            <h3>{woman.title}</h3>
                            <p>Category: {woman.category}</p>
                            <div>
                                <p>${b.toFixed(2)}</p>
                                <p><strike>${woman.price}</strike></p>
                            </div>
                            <button
                                onClick={() => handleCart(woman)}
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
    const paths = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
        .then(res => res.json())
        .then(data => data.map(woman => ({
            params: {
                id: woman.id.toString()
            }
        }
        )))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }) {
    const data = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
        .then(res => res.json())
        .then(res => res.filter(item => (item.id == id))[0])

    return {
        props: {
            woman: data,
        }
    }
}

export default OneWoman