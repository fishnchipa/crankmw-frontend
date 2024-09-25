import { Menu, X } from "lucide-react";
import { useState } from "react"

const items = [
  "Home", "Products", "Tuning", "Contact"
]

type MenuHamburgerProps = {
  clear: boolean
}

export default function MenuHamburger({ clear }: MenuHamburgerProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={`${clear ? "text-white" : "text-dark-midnight"}`}>
      <button onClick={() => setActive(true)} className="flex justify-center items-center">
        <Menu />
      </button>
      <div 
        className={`w-screen h-screen top-0 left-0 z-10 
        ${active ? "fixed " : "hidden"}`}
      >
        <div 
          className="h-[45px] w-full flex flex-row items-center px-[10px] 
          bg-green-500"
        >
          <button onClick={() => setActive(false)}>
            <X size={25}/> 
          </button>
        </div>
        <div 
          className="w-full p-[20px] flex flex-col font-semibold text-[15px] 
          gap-y-[15px]"
        >
          {items.map((item, key) => {
            return (
              <h1 key={key}>{item}</h1>
            )
          })}
        </div>
      </div>
    </div>
  )
}
