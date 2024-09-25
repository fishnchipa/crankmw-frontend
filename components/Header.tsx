"use client"

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavbarMain from "./NavbarMain";
import NavbarMinor from "./NavbarMinor";

export default function Header() {
  const [clear, setClear] = useState(true);


  useEffect(() => {
    setClear(window.scrollY <= 40);

    window.addEventListener("scroll", () => setClear(window.scrollY <= 40))
    return () => {
      window.addEventListener("scroll", () => setClear(window.scrollY <= 40))
    }
  }, [])

  return (
    <header 
      className={`px-5 flex flex-row sm:flex-col-reverse sm:gap-y-3 items-center 
      xl:flex-row sticky top-0 z-20 sm:px-[80px] py-3 transition ease-in-out
      duration-500 animate-slide-down origin-bottom
      ${clear ? "bg-transparent" : "bg-white"}`}
      onMouseEnter={() => setClear(false)}
      onMouseLeave={() => setClear(window.scrollY <= 40)}
    >
      <NavbarMain clear={clear} className="sm:basis-[calc(100%-275px)]"/>
      <div 
        className="justify-between flex flex-row sm:grid sm:grid-cols-3 xl:flex xl:flex-row sm:w-full 
        xl:justify-between w-full ml-10 sm:ml-0"
      >
        <div 
          className="flex-1 sm:flex-none flex sm:w-full xl:w-fit col-start-1 
          sm:col-start-2 justify-center items-center"
        >
          <Logo className="w-[160px] h-[41px]"/>
        </div>
        <NavbarMinor clear={clear} className="col-start-3"/>
      </div>
    </header>
  )
}
