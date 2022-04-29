import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { delItem, minusPrice, addPrice } from '../../components/redux/action/index'
import MainNav from '../../components/Jewelery/Layout/MainNav';
import Link from 'next/link';

function Cart() {
    const state = useSelector((state) => state.handleCarts)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const handleAdd = (item) => {
        dispatch(addPrice(item))
    }
    const handleDel = (item) => {
        dispatch(minusPrice(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div key={cartItem.id}>
                <div>
                    <button onClick={() => handleClose(cartItem)}>X</button>
                    <div className='row'>
                        <div className='column'>
                            <Image src={cartItem.image} alt={cartItem.title} width='180px' height='200px' />
                        </div>
                        <div>
                            <h3>{cartItem.title}</h3>
                            <p>${cartItem.price}</p>
                        </div>

                        <p className="lead fw-bold">
                            {cartItem.qty} X ${cartItem.price} = ${cartItem.qty * cartItem.price}
                        </p>
                        <div>
                            <button className="btn" onClick={() => handleDel(cartItem)}> - </button>
                            <button className="btn" onClick={() => handleAdd(cartItem)}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div>
                <div>
                    <div className='row'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
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
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart;