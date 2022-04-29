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

                    <label>Address 2 <span>(Optional)</span></label>
                </div>
            </div>
        </>
    )
}

export default Checkout;