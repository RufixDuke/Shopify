import Link from 'next/link'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from "@fortawesome/free-solid-svg-icons";
import classes from './Footer.module.css'


import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function Footer() {
    return (
        <>
            <div className={classes.Footer}>
                <div className={classes.First}>
                    <h3>Logo</h3>
                    <p>Sophisticated simplicity is for the independent mind</p>
                    <div className={classes.Links}>
                    <a href="https://www.instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer