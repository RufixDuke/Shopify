import { FeedbackObject } from '../Feedback/feedbacksObject';
import Feedback from './Feedback/Feedback';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/effect-fade';

import classes from './Feedback/Feedback.module.css'

function Feedbacks() {
    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={classes.mySwiper}
            >
                {FeedbackObject.map((feedback) =>
                    <SwiperSlide key={feedback.id}>
                        <Feedback feedback={feedback} />
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}

export default Feedbacks;