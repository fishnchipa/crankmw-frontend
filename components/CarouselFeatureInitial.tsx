"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Feature } from "@/lib/types";

type CarouselFeatureSlideProps ={
  item: Feature
}

export default function CarouselFeatureInitial({ item }: CarouselFeatureSlideProps) {
  

  return (
    <section className="flex flex-row justify-between items-center p-5">
      <motion.div 
        initial={{ y: "-100%", opacity: 0}}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 1,
            type: "spring",
            bounce: 0.4,
            duration: 1.5
          }
        }}
        viewport={{ once: true }}
        className="flex flex-col basis-1/3"
      >
        <h1 className="text-[2em] font-bold">{item.title}</h1>
        <p className="font-light">{item.description}</p>
        <Link 
          href={item.link}
          className="mt-[90px]"
        >
          <button 
            className="text-[0.9em] px-10 py-2 bg-west-orange rounded-md 
            font-semibold"
          >
            View Product
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: "100%", opacity: 0}}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 1,
            type: "spring",
            bounce: 0.4,
            duration: 1.5
          }
        }}
        viewport={{ once: true }}
      >
        <div 
          className="relative w-[350px] h-[350px] bg-white rounded-lg shadow-land overflow-hidden"
        >
          <Image 
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}
