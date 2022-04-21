import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../../styles/Home.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import Picture from "./Picture/Picture";
import { PictureObject } from "./PictureObject";

function Hero() {
    return(
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
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