"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const property = [
  {
    title: "Reliable",
    src:"/Protect.svg",
    alt:"protect",
    delay: 0.5
  },
  {
    title: "Fast",
    src:"/Running.svg",
    alt:"fast",
    delay: 0.6
  },
  {
    title: "Cheap",
    src:"/Money.svg",
    alt:"Cheap",
    delay: 0.7
  },

]

export default function SectionTuning() {

  return (
    <div 
      className="flex justify-center items-center w-full overflow-hidden
      mt-[100px] md:mt-[250px]"
    >
      <div 
        className="flex flex-col relative text-[2.5em] font-bold w-full lg:w-[1280px]  
        justify-center items-center lg:justify-normal lg:items-start px-5">
        <motion.div
          initial={{ y: "-100%", opacity: 0}}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              type: "spring",
              bounce: 0.4,
              duration: 1
            }
          }}
          viewport={{ once: true }}
          className="w-full xmd:w-[700px]"

        >
          <h1 className="w-[350px] leading-[1.2em] mr-5 mb-5 mt-5">
            Make Installations Seamless With Our <span 
              className="bg-gradient-to-r from-golden to-sweet-orange text-transparent 
              inline-block bg-clip-text">
              Expertise
            </span>
          </h1>
        </motion.div>
        <motion.div 
          className="top-0 right-0 lg:absolute w-full xmd:w-[700px] xmd:h-[450px] rounded-2xl 
          bg-gradient-to-b from-golden to-sweet-orange p-10 flex flex-row"
          initial={{ x: "100%", opacity: 0}}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              type: "just",
              bounce: 0.4,
              duration: 0.7
            }
          }}
          viewport={{ once: true }}
        >
          <div className="font-light text-[0.4em] basis-1/2">
            <p>We offer top of the line assistance with tune ups 
            and refurbishment of auto mobiles that come into our store.</p>
            <br />
            <p>With the range of offers that we provide. We will 
            ensure you that your needs are meet by our experts.</p>
          </div>
          <div className="flex flex-col basis-1/2 gap-y-5 xmd:justify-between items-center">
            <div>
              <div className="flex flex-col text-[0.6em] w-full gap-y-5">
                {property.map((item, key) => {
                  return (
                    <motion.div 
                      key={key}
                      className="flex flex-row gap-x-3 items-center"
                      initial={{ x: "100%", opacity: 0}}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: item.delay,
                          type: "just",
                          bounce: 0.4,
                          duration: 0.7
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <Image 
                        src={item.src}
                        alt={item.alt}
                        width={45}
                        height={45}
                      />
                      <h2>{item.title}</h2>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <Link href="/" className="">
              <button 
                className="px-8 py-1 border-[3px] border-white text-white text-[0.5em] rounded-lg bg-transparent"
              >
                View Offer
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="relative w-full aspect-video xmd:w-[700px] xmd:h-[450px] rounded-2xl bg-orange-200 overflow-hidden
          shadow-land"
          initial={{ x: "-100%", opacity: 0}}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              type: "just",
              bounce: 0.4,
              duration: 0.7
            }
          }}
          viewport={{ once: true }}
        >
          <Image 
            src="/tune.jpeg"
            alt="tune"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}
