import classes from './Star.module.css'


function Star() {
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