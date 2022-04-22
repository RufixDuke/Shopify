import Image from 'next/image'

import classes from './Gallery.module.css'

function Galleries({ Picture }) {
    return (
        <>
            <div>
                <Image className={classes.img} src={Picture.image} alt="Just Picture" width={150} height={150} />
            </div>
        </>
    )
}

export default Galleries;