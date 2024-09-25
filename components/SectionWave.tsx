"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionWave() {
  return (
    <div className="w-full h-[700px] relative flex justify-center -mt-[100px]">
      <Image 
        src="/wave.svg"
        alt="wave"
        fill
        className="object-cover"
      />
      <div 
        className="w-[1280px] flex flex-col-reverse sm:flex-row items-center sm:justify-between
        sm:pt-[80px] z-10 gap-y-10"
      >
        <div 
          className="relative w-1/2 h-[40%] sm:w-full sm:h-[500px] lg:w-[500px] 
          lg:h-[750px] 2xl:w-[650px] 2xl:h-[800px] sm:mt-[150px]"
        >
          <Image 
            src="/computer.png"
            alt="computer"
            fill
            className="object-contain"
          />
        </div>
        <motion.div
          className="z-10 sm:mt-[200px] sm:w-[500px]"
          initial={{ y: "100%", opacity: 0}}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
              duration: 1.5
            }
          }}
          viewport={{ once: true }}
        >
          <section className="z-10 px-5">
            <h2 className="font-bold text-[1.2em] sm:text-[2em]">Real Time Power Efficiency</h2>
            <p className="font-light text-[0.8em] sm:text-[1em]">Accurate measurements of all things include within the pack of the system. The whole system comes with the included bonus of fast car and overall good experience.</p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
