import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { delItem } from '../../components/redux/action/index'
import MainNav from '../../components/Jewelery/Layout/MainNav';

function Cart() {
    const state = useSelector((state) => state.handleCarts)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return (
            <div key={cartItem.id}>
                <div>
                    <button></button>
                    <div className='row'>
                        <div className='column'>
                            <Image src={cartItem.image} alt={cartItem.title} width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        <MainNav />
            {state.length !== 0 && state.map(cartItems)}
        </>
    )
}

export default Cart;