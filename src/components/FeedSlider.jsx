// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

function FeedSlider({images}) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                images &&
                images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className='w-full'>
                            <img className='w-full' src={image} alt="" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}
export default FeedSlider;