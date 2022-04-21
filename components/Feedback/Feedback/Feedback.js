import Image from 'next/image';
import classes from './Feedback.module.css'

import Phone from '../../../public/pexels-pixabay-459654.jpg'


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
                    src={Phone} 
                    alt="Phone" 
                    width='600px' 
                    height='500px' />
                </div>
            </div>


        </>
    )
}

export default Feedback;