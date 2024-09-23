"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import Image from "next/image"
import 'swiper/css';
import 'swiper/css/autoplay';
import '@/styles/carousel.css'

const logos = [
  {
    src: "/11562_300x300.webp",
    alt: "logo eventuri"
  },
  {
    src:"/apr_logo_2018_rgb_red_300x300.png",
    alt: "logo apr"
  },
  {
    src: "/BC_FORG_300x300.png",
    alt: "bc forg logo"
  },
  {
    src: "/Untitled_design_6_300x300.png",
    alt: "logo design"
  }

]

export default function CarouselLogo() {
  return (
    <div className="h-fit w-full flex flex-row justify-center bg-gray-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        freeMode={true}
        loop={true}
        modules={[Autoplay]}
        speed={5000}
        className="carousel-swiper h-[292px] flex flex-row items-center"
        autoplay={{
          delay: 0,
        }}
      >
        {logos.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="w-full h-full flex justify-center items-center">
                <Image alt={item.src} src={item.src} width={300} height={300}/>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}


