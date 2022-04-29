import MainNav from "../../../components/Jewelery/Layout/MainNav";
import classes from '../../../styles/checkout.module.css'
import { useSelector } from 'react-redux'


function Checkout() {
    const state = useSelector((state) => state.handleCarts)

    var shipping = 60;
    var total = 0;
    const itemList = (item) => {
        total = total + item.price
        let sliced = item.title.slice(0, 50)
        return (
            <div className={classes.flex}>
                <div>
                    <h3>{sliced}</h3>
                    {/* <p>Brief Description</p> */}
                </div>
                <p>${item.price}</p>
            </div>
        )
    }
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
                        <p className={classes.blue}>Your Cart</p>
                        <p className={classes.bg}>{state.length}</p>
                    </div>

                    <div>
                        <div className={classes.border}>
                            {state.map(itemList)}
                        </div>

                        <div className={classes.payment}>
                            <h3 className={classes.yesss}>Card Details</h3>
                            <p className={classes.yess}>Card type</p>

                            <form>
                                <div className={classes.type}>
                                    <div>
                                        <input type="radio" />
                                        <label>Credit Card</label>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <label>Debit Card</label>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <label>PayPal</label>
                                    </div>
                                </div>

                                <div className={classes.det}>
                                    <div className={classes.yes}>
                                        <p>Name on Card</p>
                                        <input type="text" required />
                                    </div>

                                    <div className={classes.yes}>
                                        <p>Card Number</p>
                                        <input type="number" required />
                                    </div>
                                </div>

                                <div>
                                    <div className={classes.card}>
                                        <div>
                                            <p className={classes.yess}>Expiration Date</p>
                                            <input type="date" required />
                                        </div>

                                        <div>
                                            <p className={classes.yess}>CVV</p>
                                            <input type="number" required />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <hr />

                            <div className={classes.summary}>
                                <p className={classes.yesss}>Subtotal</p>
                                <p className={classes.yesss}>${Number(total)}</p>
                            </div>

                            <div className={classes.summary}>
                                <p className={classes.yesss}>Shipping</p>
                                <p className={classes.yesss}>${shipping}</p>
                            </div>

                            <div className={classes.summary}>
                                <p className={classes.yesss}>Total(Tax Incl.)</p>
                                <p className={classes.yesss}>${total + shipping}</p>
                            </div>
                        </div>

                        <div className={classes.btn}>
                            <button className={classes.checkoutBtn}>
                                <p>${total + shipping}</p>
                                <p>Checkout &rarr;</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;