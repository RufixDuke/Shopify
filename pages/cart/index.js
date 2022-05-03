import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { delItem, minusPrice, addPrice } from '../../components/redux/action/index'
import MainNav from '../../components/Jewelery/Layout/MainNav';
import Link from 'next/link';
import classes from '../../styles/checkout.module.css'

function Cart() {
    const state = useSelector((state) => state.handleCarts)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    // const handleAdd = (item) => {
    //     dispatch(addPrice(item))
    // }
    // const handleDel = (item) => {
    //     dispatch(minusPrice(item))
    // }

    const cartItems = (cartItem) => {
        return (
            <div key={cartItem.id} className={classes.pad}>
                <button className={classes.button} onClick={() => handleClose(cartItem)}>X</button>
                <div className={classes.bgs}>
                    <div>
                        <Image className={classes.cancel} src={cartItem.image} alt={cartItem.title} width='100%' height='200px' />
                    </div>
                    
                    <div className={classes.push}>
                        <h3>{cartItem.title}</h3>
                        <p>${cartItem.price}</p>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className={classes.bgs}>
                <h3>Your Cart is Empty</h3>
            </div>
        )
    }

    const button = () => {
        return (
            <div>
                <div>
                    <Link href='/cart/checkout'>
                        <a className='link'>Proceed To Checkout</a>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <>
            <MainNav />
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            <div className={classes.pro}>
                {state.length !== 0 && button()}
            </div>
            
        </>
    )
}

export default Cart;