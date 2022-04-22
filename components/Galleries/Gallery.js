import { PictureObject } from "../Hero/PictureObject";
import Galleries from './Galleries'

function Gallery() {
    return (
        <>
            {PictureObject.map((Picture) => 
                <Galleries key={Picture.id} Picture={Picture} />
            )}
        </>
    )
}

export default Gallery;