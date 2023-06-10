import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Slider = () => {
  const customPagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={customPagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/03/15/74337df8-9dd9-4802-9fdf-3ee7dceecaed/red-bull-salzburg-academy"
            alt=""
            className="full-width-image full-height-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-07/rsz_ap_5281.jpg?itok=VntDO0CV"
            alt=""
            className="full-width-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/03/15/74337df8-9dd9-4802-9fdf-3ee7dceecaed/red-bull-salzburg-academy"
            alt=""
            className="full-width-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-07/rsz_ap_5281.jpg?itok=VntDO0CV"
            alt=""
            className="full-width-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/03/15/74337df8-9dd9-4802-9fdf-3ee7dceecaed/red-bull-salzburg-academy"
            alt=""
            className="full-width-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.imgacademy.com/sites/default/files/styles/scale_2500w/public/2020-07/rsz_ap_5281.jpg?itok=VntDO0CV"
            alt=""
            className="full-width-image"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
