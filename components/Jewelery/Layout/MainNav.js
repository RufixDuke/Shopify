import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../../public/—Pngtree—business logo design free logo_915991.png"
import classes from './MainNav.module.css';
// import { useSelector } from 'react-redux'

function MainNav() {
    
    // const state = useSelector((state) => state.handleCart)
    
    return (
        <>
            <header className={classes.header}>
                <div>
                    <Link href='/' passHref>
                        <Image src={Logo} className={classes.img} alt="Logo" width="47%" height="45px" />
                    </Link>
                </div>

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
                    <nav className={classes.links}>
                        <Link href='/cart'>
                            <a className={classes.subnav}> Cart </a>
                        </Link>
                        <Link href='/auth'>
                            <a className={classes.subnav}>Login | Sign Up</a>
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default MainNav