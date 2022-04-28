import Image from 'next/image';
import {useSelector, useDispatch} from 'react-redux'
import {delItem} from '../../components/redux/action/index'

function Cart() {
    const state = useSelector((state) => state.handleCarts)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return (
            <>
                <div>
                    <div>
                        <button></button>
                        <div className='row'>
                            <div>
                                <h3></h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <div>
                <div>
                    <Image src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.qty} X ${product.price} = ${product.qty * product.price}</p>
                    <button onClick={() => handleButton(product)}>-</button>
                    <button onClick={() => handleButton(product)}>+</button>
                </div>
            </div>
        </>
    )
}

export default Cart;