import { PictureObject } from "../Hero/PictureObject";
import Galleries from './Galleries'

import classes from './Gallery.module.css'

function Gallery() {
    return (
        <>
            <div className={classes.head}>
                <h2 className={classes.header}>Visit Our Gallery</h2>
                <div>
                    <div className={classes.pic}>
                        {PictureObject.map((Picture) =>
                            <Galleries key={Picture.id} Picture={Picture} />
                        )}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Gallery;