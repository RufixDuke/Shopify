import { PictureObject } from "../Hero/PictureObject";
import Galleries from './Galleries'

function Gallery() {
    return (
        <>
            <div>
                {PictureObject.map((Picture) =>
                    <Galleries key={Picture.id} Picture={Picture} />
                )}
            </div>
        </>
    )
}

export default Gallery;