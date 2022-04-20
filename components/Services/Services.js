import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faRetweet, faMicrophone, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import classes from './Services.module.css'

function Services() {
    return (
        <>
            <p>Our Services & Benefts</p>
            <div className={classes.flexs}>
                <div className={classes.blocks}>
                    <div className={classes.One}>
                        <FontAwesomeIcon icon={faCar} style={{ fontSize: 1 }} />
                        <p>Fast & Free Shipping</p>
                        <p>Sign up to premier delivery in Nigeria for unlimited free shipping from USAsssss</p>
                    </div>

                    <div className={classes.One}>
                        <div>
                            <FontAwesomeIcon icon={faRetweet} style={{ fontSize: '10px', color: 'red' }} />

                        </div>
                        <p>Fast & Free Shipping</p>
                        <p>Sign up to premier delivery in Nigeria for unlimited free shipping from USAsssss</p>
                    </div>
                </div>

                <div className={classes.block}>
                    <div className={classes.One}>
                        <FontAwesomeIcon
                            icon={faMicrophone}
                        // style={{ fontSize: 1 }}
                        />
                        <p>Fast & Free Shipping</p>
                        <p>Sign up to premier delivery in Nigeria for unlimited free shipping from USAsssss</p>
                    </div>

                    <div className={classes.One}>
                        <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: 1 }} />
                        <p>Fast & Free Shipping</p>
                        <p>Sign up to premier delivery in Nigeria for unlimited free shipping from USAsssss</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;