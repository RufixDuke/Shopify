import Image from 'next/link'

import classes from './Gallery.module.css'

function Galleries({Picture}) {
    return(
        <>
            <div className={classes.pic}>
                <div>
                    <Image src={Picture.image} alt="Just Picture" width={100} height={100} />
                </div>
            </div>
        </>
    )
}

export default Galleries;