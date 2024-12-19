import Title from "../../../sharedComponents/CategoryTitle/Title";
import { Rating } from '@smastrom/react-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className="flex justify-center items-center mb-10">
            <div className="w-full max-w-5xl text-center">
                <Title
                    h1="---What Our Clients Say---"
                    h2="TESTIMONIALS"
                ></Title>
                <div className="flex justify-center">
                    <Rating style={{ maxWidth: 250 }} value={3} />
                </div>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        {
                            reviews.map(review => <div
                                key={review._id}

                            >
                                <SwiperSlide>
                                    <h1 className="
                                    max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto my-3">{review.details}</h1>
                                    <h1 className="font-semibold text-lg">{review.name}</h1>
                                </SwiperSlide>


                            </div>)
                        }
                    </Swiper>
                </div>


            </div>
        </div>
    );
};

export default Review;
