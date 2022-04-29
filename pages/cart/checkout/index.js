import MainNav from "../../../components/Jewelery/Layout/MainNav";
import classes from '../../../styles/checkout.module.css'

function Checkout() {
    return (
        <>
            <MainNav />
            <div className={classes.container}>
                <div className={classes.billing}>
                    <h3>Billing Address</h3>
                    <div className={classes.name}>
                        <div>
                            <label>First Name</label>
                            <input type="text" required className={classes.input1} />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input type="text" required className={classes.input2} />
                        </div>
                    </div>

                    <div className={classes.block}>
                        <label>Username</label>
                        <input type="text" placeholder="Username" className={classes.input3} />
                    </div>

                    <div className={classes.block}>
                        <label>Email <span>(Optional)</span></label>
                        <input type="email" placeholder="you@example.com" className={classes.input3} />
                    </div>

                    <div className={classes.block}>
                        <label>Address</label>
                        <input type="text" placeholder="1234 Main St" required className={classes.input3} />
                    </div>

                    <div className={classes.block}>
                        <label>Address 2 <span>(Optional)</span></label>
                        <input type="text" placeholder="Apartment or suite" className={classes.input3} />
                    </div>

                    <div className={classes.row}>
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

                <div className={classes.checkout}>
                    <div className={classes.rows}>
                        <p>Your Cart</p>
                        <p className={classes.bg}>3</p>
                    </div>

                    <div>
                        <div className={classes.border}>
                            <div className={classes.flex}>
                                <div>
                                    <h3>Product Name</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className={classes.flex}>
                                <div>
                                    <h3>Second Item</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className={classes.flex}>
                                <div>
                                    <h3>Third Item</h3>
                                    <p>Brief Description</p>
                                </div>
                                <p>$12</p>
                            </div>

                            <div className={classes.flex}>
                                <div>
                                    <p>Total (USD)</p>
                                </div>
                                <p>$12</p>
                            </div>
                        </div>

                        <div className={classes.payment}>
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
                            <div className={classes.summary}>
                                <p>Subtotal</p>
                                <p>$60.00</p>
                            </div>

                            <div className={classes.summary}>
                                <p>Subtotal</p>
                                <p>$60.00</p>
                            </div>

                            <div className={classes.summary}>
                                <p>Subtotal</p>
                                <p>$60.00</p>
                            </div>
                        </div>

                        <button className={classes.checkoutBtn}>
                            <p>$850</p>
                            <p>Checkout</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;