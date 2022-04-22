import MainNav from './MainNav';
import classes from './Layout.module.css'
import Footer from './Footer';


function Layout(props) {
    return (
        <div>
            {/* <MainNav /> */}
            <main className={classes.Layout}>{props.children}</main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;