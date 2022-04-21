import Image from 'next/image';
import classes from './Feedback.module.css'


function Feedback({ feedback }) {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.note}>
                    <h2 className={classes.head}>Our Customer Say</h2>
                    <p className={classes.say}>{feedback.message}</p>
                    <p>{feedback.star} &#11088;</p>
                    <h3 className={classes.name}>{feedback.name}</h3>
                    <p>{feedback.job}</p>
                </div>
                
                <div>
                    <Image
                        className={classes.img}
                        src={feedback.image}
                        alt="Phone"
                        width='400px'
                        height='300px'
                    />
                </div>
            </div>

            
        </>
    )
}

export default Feedback;