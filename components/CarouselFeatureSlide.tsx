"use client"

import Link from "next/link";
import Image from "next/image";
import { Feature } from "@/lib/types";

type CarouselFeatureSlideProps ={
  item: Feature
}

export default function CarouselFeatureSlide({ item }: CarouselFeatureSlideProps) {
  

  return (
    <section className="flex flex-row justify-between items-center p-5">
      <div 
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
      </div>
      <div className="relative w-[350px] h-[350px] bg-white rounded-lg shadow-land overflow-hidden">
        <Image 
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
        />

      </div>
    </section>
  )
}
