import MainNav from "../../../components/Jewelery/Layout/MainNav";

function Checkout() {
    return (
        <>
            <MainNav />
            <div className="container">
                <div className="billing">
                    <h3>Billing Address</h3>
                    <div className="name">
                        <div>
                            <label>First Name</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type="text" required />
                        </div>
                    </div>

                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="Username" />
                    </div>

                    <div>
                        <label>Email <span>(Optional)</span></label>
                        <input type="email" placeholder="you@example.com" />
                    </div>

                    <div>
                        <label>Address</label>
                        <input type="text" placeholder="1234 Main St" required />
                    </div>

                    <div>
                        <label>Address 2 <span>(Optional)</span></label>
                        <input type="text" placeholder="Apartment or suite" />
                    </div>

                    <div className="row">
                        <div>
                            <label>Country</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label>State</label>
                            <input type="text" required />
                        </div>

                        <div>
                            <label>ZIP</label>
                            <input type="number" maxLength={5} required />
                        </div>
                    </div>
                </div>

                <div className="checkout">
                    <div>
                        <h3>Your Cart</h3>
                        <p>3</p>
                    </div>

                    <div>
                        <div className="border">
                            <div className="flex">
                                <div>
                                    <h3>Product Name</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className="flex">
                                <div>
                                    <h3>Second Item</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className="flex">
                                <div>
                                    <h3>Third Item</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className="flex">
                                <div>
                                    <p>Total (USD)</p>
                                </div>
                                <p>$12</p>
                            </div>
                        </div>

                        <div className="payment">
                            <h3>Card Details</h3>
                            <p>Card type</p>
                            <form>
                                <input type="radio" />
                                <label>Credit Card</label>

                                <input type="radio" />
                                <label>Debit Card</label>

                                <input type="radio" />
                                <label>PayPal</label>

                                <label>Name on Card</label>
                                <input type="text" required />

                                <label>Card Number</label>
                                <input type="number" required />
                                <div>
                                    <div>
                                        <label>Expiration Date</label>
                                        <input type="date" required />
                                    </div>

                                    <div>
                                        <label>CVV</label>
                                        <input type="number" required />
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <div className="summary">
                                <p>Subtotal</p>
                                <p>$&60.00</p>
                            </div>

                            <div className="summary">
                                <p>Subtotal</p>
                                <p>$&60.00</p>
                            </div>

                            <div className="summary">
                                <p>Subtotal</p>
                                <p>$&60.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;