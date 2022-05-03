import Image from 'next/image'
import MainNav from '../../components/Jewelery/Layout/MainNav'
import styles from '../../styles/Home.module.css'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../components/redux/action/index'

function JeweleryOne({ jewelery }) {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    let a = Number(jewelery.price)
    let b = a * 0.85

    const dispatch = useDispatch()

    const handleCart = (jewelery) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(jewelery))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(jewelery))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
            <div>
                <MainNav />
                <div className={styles.checkout}>
                    <div className={styles.card}>
                        <div><Image src={jewelery.image} width={75} height={67} alt="image" /></div>
                        <div key={jewelery.id}>
                            <h3>{jewelery.title}</h3>
                            <p>Category: {jewelery.category}</p>
                            <div>
                                <p>${b.toFixed(2)}</p>
                                <p><strike>${jewelery.price}</strike></p>
                            </div>
                            <button
                                onClick={() => handleCart(jewelery)}
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
    const paths = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res => res.json())
        .then(data => data.map(jewelery => ({
            params: {
                id: jewelery.id.toString()
            }
        }
        )))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }) {
    const data = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(res => res.json())
        .then(res => res.filter(item => (item.id == id))[0])

    return {
        props: {
            jewelery: data,
        }
    }
}

export default JeweleryOne;