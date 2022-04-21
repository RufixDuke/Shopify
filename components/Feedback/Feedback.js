import Image from 'next/image';

function Feedback() {
    return (
        <>
            <div className={classes.container}>
                <div className={classes.note}>
                    <h2 className={classes.head}>Our Customer Say</h2>
                    <p className={classes.say}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam ex praesentium quidem necessitatibus. Aliquam neque
                        laboriosam ad saepe error illum earum, ipsam dicta reprehenderit
                        expedita explicabo, veritatis laudantium quasi repudiandae quae
                        nesciunt id sint. Atque soluta cupiditate eius numquam ipsa impedit
                        culpa incidunt magni et odit sunt optio molestias obcaecati vel necessitatibus
                        error consequatur rerum tenetur est, consectetur ratione ullam! Earum eum similique,
                        nulla beatae quas repellat ratione veritatis reprehenderit!
                    </p>
                    
                </div>
                <div>
                    <Image src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Feedback;