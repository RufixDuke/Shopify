import MainNav from './MainNav';
import classes from './Layout.module.css'


function Layout(props) {
    return (
        <>
            <MainNav />
            <main className={classes.Layout}>{props.children}</main>
        </>
    )
}

export default Layout;