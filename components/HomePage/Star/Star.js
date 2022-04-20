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
        document.querySelector(`.${rat} .starsInner`).style.width = starPercentageRounded;
    }
    return (
        <>
            {/* <div className={classes.starsInner}> */}
            <FontAwesomeIcon
                icon={faStar}
                className={classes.starsInner}
                // style={{
                //     fontSize: 50,
                //     marginLeft: 5,
                //     color: 'yellow',
                //     // position: 'absolute',
                //     top: 0,
                //     left: 0,
                //     whiteSpace: 'nowrap',
                //     overflow: 'hidden',
                //     width: 12
                // }}
            />
            {/* </div> */}

            <div className={classes.starsInner}>
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        fontSize: 50,
                        marginLeft: 5,
                        color: 'yellow',
                        // position: 'absolute',
                        top: 0,
                        left: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: 12
                    }}
                />
            </div>

            <div className={classes.starsInner}>
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        fontSize: 50,
                        marginLeft: 5,
                        color: 'yellow',
                        // position: 'absolute',
                        top: 0,
                        left: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: 12
                    }}
                />
            </div>

            <div className={classes.starsInner}>
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        fontSize: 50,
                        marginLeft: 5,
                        color: 'yellow',
                        // position: 'absolute',
                        top: 0,
                        left: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: 12
                    }}
                />
            </div>

            <div className={classes.starsInner}>
                <FontAwesomeIcon
                    icon={faStar}
                    style={{
                        fontSize: 50,
                        marginLeft: 5,
                        color: 'yellow',
                        // position: 'absolute',
                        top: 0,
                        left: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        width: 12
                    }}
                />
            </div>
        </>
    )
}

export default Star;