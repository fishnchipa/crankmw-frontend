"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import '@/styles/event-carousel.css'

const events = [
  {
    src: "/mclaren.webp",
    alt: "mclaren"
  },
  {
    src: "/mclaren.webp",
    alt: "mclaren"
  },
  {
    src: "/mclaren.webp",
    alt: "mclaren"
  },
]

export default function CarouselEvent() {

  return (
    <Swiper className="event-swiper w-full h-[500px] mt-[200px]"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={1000}
      autoplay={{
        delay: 2500,
      }}
    >
      {events.map((event, key) => {
        return (
          <SwiperSlide key={key}>
            <Image
              src={event.src}
              alt={event.alt}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        )
      })}


    </Swiper>
  )
}
