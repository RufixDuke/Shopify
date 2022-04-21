import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faRetweet, faMicrophone, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import Link from 'next/link'
import Service from '../../public/pexels-christina-morillo-1181622.jpg'

import classes from './Services.module.css'

function Services() {
    return (
        <>
            <h2 className={classes.header}>Our Services & Benefits</h2>
            <div className={classes.flexs}>
                <div className={classes.blocks}>
                    <div className={classes.One}>
                        {/* <FontAwesomeIcon icon={faCar} style={{ fontSize: 1 }} /> */}
                        Icon
                        <p className={classes.bolden}>Fast & Free  Shipping</p>
                        <p className={classes.small}>Sign up to premier delivery in Nigeria for unlimited free shipping from USA</p>
                    </div>

                    <div className={classes.Two}>
                        <div>
                            {/* <FontAwesomeIcon icon={faRetweet} style={{ fontSize: 10, color: 'red' }} /> */}
                            Icon
                        </div>
                        <p className={classes.bolden}>Hassle Free  Returns</p>
                        <p className={classes.small}>Sign up to premier delivery in Nigeria for unlimited free shipping from USA</p>
                    </div>
                </div>

                <div className={classes.block}>
                    <div className={classes.One}>
                        {/* <FontAwesomeIcon
                            icon={faMicrophone}
                        // style={{ fontSize: 1 }}
                        /> */}
                        Icon
                        <p className={classes.bolden}>24/7 Support</p>
                        <p className={classes.small}>Sign up to premier delivery in Nigeria for unlimited free shipping from USA</p>
                    </div>

                    <div className={classes.Two}>
                        {/* <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: 1 }} /> */}
                        Icon
                        <p className={classes.bolden}>Best Price Matching</p>
                        <p className={classes.small}>Sign up to premier delivery in Nigeria for unlimited free shipping from USA</p>
                    </div>
                </div>

                <div>
                    <Image src={Service} className={classes.img} alt="Services" width='380px' height='280px' />
                </div>
            </div>

            <Link href='/contact' passHref>
                <button className={classes.btn}>
                    Know More
                </button>
            </Link>
        </>
    )
}

export default Services;