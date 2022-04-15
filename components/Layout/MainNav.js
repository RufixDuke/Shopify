import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/Free-Logo-Design-Template-for-Online-Store-PNG-transparent.png"
import classes from './MainNav.module.css';

function MainNav() {
    return (
        <>
            <header className={classes.header}>
                <Image src={Logo} alt="Logo" width="100px" height="100px" />

                <div>
                    <nav className={classes.links}>
                        <Link href="/electronics">
                            <a className={classes.subnav}>Electronics</a>
                        </Link>
                        <Link href="/jeweleries">
                            <a className={classes.subnav}>Jewelery</a>
                        </Link>
                        <Link href='/men'>
                            <a className={classes.subnav}>For Men</a>
                        </Link>
                        <Link href='/women'>
                            <a className={classes.subnav}>For Women</a>
                        </Link>
                    </nav>
                </div>

                <div>
                    Contact Us
                </div>
            </header>
        </>
    )
}

export default MainNav