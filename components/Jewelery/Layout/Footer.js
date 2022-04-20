import Insta from '../../../public/instagram-logo1.png'
import Fb from '../../../public/bTyxx8znc.png'
import LinkedIn from '../../../public/img_219961.png'
import Behance from '../../../public/e6d0be0e834a26508e0696af13a63428.jpg'
import Image from 'next/image'
import classes from './Footer.module.css'


function Footer() {
    return (
        <>
            <div className={classes.Footer}>
                <div className={classes.Nahhh}>
                    <div className={classes.First}>
                        <h3>Logo</h3>
                        <p>Sophisticated simplicity is for the <br /> independent mind</p>
                        <div>
                            <a  href="https://www.instagram.com">
                                <Image src={Insta} width={20} height={20} />
                            </a>

                            <a  href="https://www.facebbook.com">
                                <Image src={Fb} width={20} height={20} />
                            </a>

                            <a  href="https://www.linkedin.com">
                                <Image src={LinkedIn} width={20} height={20} />
                            </a>

                            <a  href="https://www.behance.net">
                                <Image src={Behance} width={20} height={20} />
                            </a>
                        </div>
                    </div>

                    <div className={classes.Second}>
                        <p>Help & Information</p>
                        <hr width= '30px' />
                        <p>Pagination</p>
                        <p>Terms & Condition</p>
                        <p>Contact</p>
                        <p>Home Page</p>
                        <p>Terms of Use</p>
                    </div>

                    <div className={classes.Third}>
                        <p>Categories</p>
                        <hr width='30px' />
                        <p>Pagination</p>
                        <p>Terms & Condition</p>
                        <p>Contact</p>
                        <p>Home Page</p>
                        <p>Terms of Use</p>
                    </div>

                    <div className={classes.Third}>
                        <p>Categories</p>
                        <hr width='30px' />
                        <p>Pagination</p>
                        <p>Terms & Condition</p>
                        <p>Contact</p>
                        <p>Home Page</p>
                        <p>Terms of Use</p>
                    </div>
                </div>

                <div className={classes.copyright}>
                    <p>&copy; Copyright 2022 | Shopify by Abdul-Qudus</p>
                </div>
            </div>
        </>
    )
}

export default Footer;