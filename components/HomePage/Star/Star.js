import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import classes from './Star.module.css'


function Star({rating}) {
    const starTotal = 5;

    for (const rat in rating) {
        // 2
        const starPercentage = (rating[rat] / starTotal) * 100;
        // 3
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        // 4
        document.querySelector(`.${rat} .star`).style.width = starPercentageRounded;
    }

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