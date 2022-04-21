import Image from 'next/image';


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
                    <Image src={feedback.image} alt={feedback.name} width='300px' height='100px' />
                </div>
            </div>


        </>
    )
}

export default Feedback;