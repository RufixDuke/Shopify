function Checkout() {
    return (
        <>
            <div className="container">
                <div>
                    <div>
                        <h4>
                            <span>Your Cart</span>
                            <span>3</span>
                        </h4>

                        <ul>
                            <li>
                                <div>
                                    <h6>Product Name</h6>
                                    <small>Brief Description</small>
                                </div>
                                <span>$12</span>
                            </li>
                            <li>
                                <div>
                                    <h6>Second Poduct</h6>
                                    <small>Brief Description</small>
                                </div>
                                <span>$8</span>
                            </li>
                            <li>
                                <div>
                                    <h6>Third Product</h6>
                                    <small>Brief Description</small>
                                </div>
                                <span>$5</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;