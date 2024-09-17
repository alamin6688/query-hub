// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgImg01 from "../../../assets/blogPostImages/Manage Product Queries.jpg";
import bgImg02 from "../../../assets/blogPostImages/Comparing Products.jpg";

export default function Carousel() {
  return (
    <>
      <div className="mb-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
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
              text="Manage Your Product Queries and Recommendations"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgImg02}
              text="Compare Products and Find the Best Alternatives"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgImg01}
              text="Discover Alternatives for Your Favorite Products"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgImg02}
              text="Join the Community and Share Your Product Insights"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
