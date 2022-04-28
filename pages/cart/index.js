import Image from 'next/image';
import {useSelector} from 'react-redux'

function Cart() {
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