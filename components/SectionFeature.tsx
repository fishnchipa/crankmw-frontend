"use client"
import { motion } from "framer-motion";
import CarouselFeature from "./CarouselFeature";
import Image from "next/image";

export default function SectionFeature() {


  return (
    <div className="flex flex-col justify-center items-center mt-[10px]">
      <div className="flex flex-col justify-center item-center gap-y-4">
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
          viewport={{ once: true, amount: 1 }}

        >
          <h1 className="text-[2.5em] font-extrabold">
            A New Way To <span 
              className="text-west-orange h-full "> 
            Envision</span> Productivity
          </h1> 
        </motion.div>
        <motion.div
          className="flex flex-col gap-y-4"
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1,
            transition: {
              delay: 0.6,
              type: "spring",
              bounce: 0.4,
              duration: 1.5
            }
          }}
          viewport={{ once: true }}
        >
          <hr className="h-[1px] border-0 bg-black mx-10"/>
          <hr className="h-[1px] border-0 bg-black mx-[150px] mt-3"/>
        </motion.div>
      </div>
      <div className="w-full h-[35vw] relative flex items-center">
        <div className="w-full px-[300px]">
          <CarouselFeature />
        </div>
        <div className="absolute w-[65vw] h-[40vw] right-0 top-0">
          <Image 
            src="/particle.svg"
            alt="partilce"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
