import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../../styles/Home.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper";

import Picture from "./Picture/Picture";
import { PictureObject } from "./PictureObject";

function Hero() {
    return(
        <>
            <Swiper
                effect={"fade"}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                modules={[Autoplay, EffectFade]}
                className={styles.mySwiper}
            >

                {PictureObject.map((picture) =>
                    <SwiperSlide key={picture.id}>
                        <Picture picture={picture} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default Hero;