import Image from 'next/image';
import classes from './Feedback.module.css'

import Phone from '../../../public/rishabh-malhotra-83ypHTv6J2M-unsplash.jpg'


function Feedback({ feedback }) {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.note}>
                    <h2 className={classes.head}>Our Customer Say</h2>
                    <p className={classes.say}>{feedback.message}</p>
                    <p>{feedback.star} star</p>
                    <h3 className={classes.name}>{feedback.name}</h3>
                    <p>{feedback.job}</p>
                </div>
                <div>
                    <Image src={Phone} alt="Phone" width='100px' height='100%' />
                </div>
            </div>


        </>
    )
}

export default Feedback;