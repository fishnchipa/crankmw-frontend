"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import CarouselFeatureSlide from "./CarouselFeatureSlide";
import CarouselFeatureInitial from "./CarouselFeatureInitial";

const features = [
  {
    title: "More cars than ever",
    description: "Accurate measurements of all things include within the pack of the system. The whole system comes with the included bonus of fast car and overall good experience.",
    src: "/event.webp",
    alt: "alt",
    link: "/cart"
  },
  {
    title: "More cars than ever",
    description: "Accurate measurements of all things include within the pack of the system. The whole system comes with the included bonus of fast car and overall good experience.",
    src: "/event.webp",
    alt: "alt",
    link: "/cart"
  }
]

export default function CarouselFeature() {

  return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        <SwiperSlide>
          <CarouselFeatureInitial item={features[0]}/>
        </SwiperSlide>
        {features.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <CarouselFeatureSlide item={item} />
            </SwiperSlide>
          )
        })} 
      </Swiper>
  )
}
