import Image from 'next/image'
import MainNav from '../../components/Jewelery/Layout/MainNav'
import styles from '../../styles/Home.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../../components/redux/action/index'

function OneElectronic({ electronic }) {
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    let a = Number(electronic.price)
    let b = a * 0.85

    const dispatch = useDispatch()

    const handleCart = (electronic) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(electronic))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(electronic))
            setCartBtn("Add to Cart")
        }
    }
    
    return (
        <>
            <div>
                <MainNav />
                <div className={styles.checkout}>
                    <div className={styles.card}>
                        <div><Image src={electronic.image} width={75} height={67} alt="image" /></div>
                        <div key={electronic.id}>
                            <h3>{electronic.title}</h3>
                            <p>Category: {electronic.category}</p>
                            <div>
                                <p>${b.toFixed(2)}</p>
                                <p><strike>${electronic.price}</strike></p>
                            </div>
                            <button
                                onClick={() => handleCart(electronic)}
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