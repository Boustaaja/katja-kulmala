import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ProjectCarouselStyles.module.css";

function ProjectCarousel({ media }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      centerInsufficientSlides={true}
      loop={media.length > 1}
      spaceBetween={20}
      className={styles.carouselContainer}
      breakpoints={{
        700: {
          slidesPerView: 2, // Tablet 2
        },
        1000: {
          slidesPerView: 3, // Desktop 3
        },
      }}
    >
      {/* Map through the media array */}
      {media.map((item, index) => (
        <SwiperSlide key={index} className={styles.carouselSlide}>
          {item.type === "image" && (
            <img src={item.src} alt="" className={styles.carouselMedia} />
          )}
          {item.type === "video" && (
            <video controls src={item.src} className={styles.carouselMedia} />
          )}
          {item.type === "youtube" && (
            <iframe
              src={item.src}
              title="YouTube video"
              className={styles.youtubeMedia}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectCarousel;
