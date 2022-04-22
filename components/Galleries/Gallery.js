import { PictureObject } from "../Hero/PictureObject";
import Galleries from './Galleries'

import classes from './Gallery.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";


function Gallery() {
    return (
        <>
            <div className={classes.head}>
                <h2 className={classes.header}>Visit Our Gallery</h2>
                <div className={classes.pic}>
                    <Swiper
                        slidesPerView={5}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        spaceBetween={10}
                        loop={true}
                        modules={[Autoplay]}
                        className={classes.mySwiper}
                    >
                        {PictureObject.map((Picture) =>
                            <SwiperSlide key={Picture.id}>
                                <Galleries Picture={Picture} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Gallery;