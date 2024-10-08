"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/autoplay';
import '@/styles/carousel.css'
import { Autoplay } from "swiper/modules";

const media = [
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {

    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
  {
    src: "/McLaren_11_1800x.webp",
    alt: "logo",
    link: "/cart"
  },
]


export default function CarouselMedia() {


  return (
    <div className="w-full px-[15vw] py-[1vw]">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        speed={2500}
        freeMode={true}
        loop
        autoplay={{
          delay:0 
        }}
        breakpoints={
          {
            1536: {
              slidesPerView: 4
            },
            1280: {
              slidesPerView: 3
            },
            640: {
              slidesPerView: 2
            },
            400: {
              slidesPerView: 1
            }
          }
        }
        className="event-swiper w-full h-[200px] lg:h-[250px] 2xl:h-[292px] 
        bg-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]"
      >
        {media.map((post, key) => {
          return (
            <SwiperSlide key={key}>
              <Link href={post.link}>
                <Image 
                  src={post.src}
                  alt={post.alt}
                  fill
                  className="object-cover p-[1vw]"
                />
              </Link>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}
