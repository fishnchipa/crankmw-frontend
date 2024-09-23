"use client"

import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavbarMain from "./NavbarMain";
import NavbarMinor from "./NavbarMinor";

export default function Header() {
  const [clear, setClear] = useState(true);


  useEffect(() => {
    window.addEventListener("scroll", () => setClear(window.scrollY <= 40))
    return () => {
      window.addEventListener("scroll", () => setClear(window.scrollY <= 40))
    }
  }, [])

  return (
    <header 
      className={`flex flex-row sticky top-0 z-20 px-[80px] py-3
      transition ease-in-out duration-500 animate-slide-down origin-bottom
      ${clear ? "bg-transparent" : "bg-white"}`}
      onMouseEnter={() => setClear(false)}
      onMouseLeave={() => setClear(window.scrollY <= 40)}
    >
      <NavbarMain clear={clear} className="basis-1/2"/>
      <Logo className="w-[160px] h-[41px]"/>
      <NavbarMinor clear={clear} className="basis-1/2"/>
    </header>
  )
}
