// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg01 from "../../../assets/blogPostImages/Product Recommendations in 2024.jpg";
import bgImg02 from "../../../assets/blogPostImages/Manage Product Queries.jpg";
import bgImg03 from "../../../assets/blogPostImages/Comparing Products.jpg";

export default function Carousel() {
  return (
    <>
      <div className="relative pt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide
              image={bgImg01}
              text="Join Our Community and Share Your Product Insights"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgImg02}
              text="Manage Your Product Queries and Recommendations"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgImg03}
              text="Compare Products and Find the Best Alternatives"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image="https://i.postimg.cc/X7YzJVGh/adult-male-illustrator-working-tablet-device.jpg"
              text="Connect, Collaborate, and Elevate Your Product Knowledge!"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
