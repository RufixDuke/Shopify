import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classes from './Star.module.css'


function Star({rating}) {
    const starTotal = 5;

    for (let rat=0; rat < rating.length; rat++) {
        
        const starPercentage = (rating[rat] / starTotal) * 100;
        
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        
        document.querySelector(`.${rat} .star`).style.width = starPercentageRounded;
        
    }
    console.log(rating)

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