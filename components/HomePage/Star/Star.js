import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {useRef} from 'react'
import classes from './Star.module.css'


function Star({rating}) {
    const starTotal = 5;

    for (let rat = 0; rat < rating.length; rat++) {
        
        const starPercentage = (rating / starTotal) * 100;
        
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        
        document.querySelector(`.${rating} .star`).style.width = starPercentageRounded;
        
    }
    console.log(typeof rating)

    return (
        <>
            <div className={classes.starsInner}>
                <span className={classes.star}>&#9734;</span>

                <span className={classes.star}>&#9734;</span>

                <span className={classes.star}>&#9734;</span>
            
                <span className={classes.star}>&#9734;</span>
            
                <span className={classes.star}>&#9734;</span>
            </div>
        </>
    )
}

export default Star;