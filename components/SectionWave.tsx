"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionWave() {
  return (
    <div className="w-full h-[40vw] relative">
      <Image 
        src="/wave.svg"
        alt="wave"
        fill
        className="object-contain"
      />

      <div className="flex flex-row items-center justify-between px-[300px] gap-x-[100px] pt-[80px] z-10">
        <div className="relative w-[30vw] h-[45vw]">
          <Image 
            src="/computer.png"
            alt="computer"
            fill
            className="object-contain"
          />
        </div>
        <motion.div
          className="z-10 w-[500px]"
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
          <section className="z-10 w-[500px]">
            <h2 className="text-[2em] font-bold">Real Time Power Efficiency</h2>
            <p className="font-light">Accurate measurements of all things include within the pack of the system. The whole system comes with the included bonus of fast car and overall good experience.</p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
