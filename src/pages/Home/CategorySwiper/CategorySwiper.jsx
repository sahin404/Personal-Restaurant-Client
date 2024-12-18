import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import i1 from '../../../assets/home/slide1.jpg'
import i2 from '../../../assets/home/slide2.jpg'
import i3 from '../../../assets/home/slide3.jpg'
import i4 from '../../../assets/home/slide4.jpg'
import i5 from '../../../assets/home/slide5.jpg'
import Title from '../../../sharedComponents/CategoryTitle/Title';


const CategorySwiper = () => {
    return (
        <div className='my-5 p-10'>
            <Title
            h1 = "---From 11:00am to 10:00pm---"
            h2 = "ORDER ONLINE"
            ></Title>
            <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide >
                <img src={i1} alt="" className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={i2} alt="" className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={i3} alt="" className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={i4} alt="" className='rounded-lg' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={i5} alt="" className='rounded-lg' />
            </SwiperSlide>

        </Swiper></div>
    )
}

export default CategorySwiper