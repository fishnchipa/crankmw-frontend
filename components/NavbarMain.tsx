"use client"
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import MenuHamburger from "./MenuHamburger";
import { cn } from "@/lib/utils";

const items = [
  "Home", "Products", "Tuning", "Contact"
]

type NavbarProps = {
  clear: boolean
  className: string
}

export default function NavbarMain({ clear, className }: NavbarProps) {
  return (
    <nav className={cn("flex items-center",className)}>
      <ul 
        className={`hidden sm:flex flex-row gap-x-10 font-semibold text-[1.1em] 
        ${clear ? "text-white" : "text-dark-midnight"}` } 
      >
        {items.map((item, key) => {
          return (
            <li key={key}>
              <Link
                href="/"
                className="flex flex-row gap-x-1 justify-center items-center"
              >
                {item}
                <ChevronDown size={14}/>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden h-full">
        <MenuHamburger clear={clear}/>
      </div>
    </nav>
  )
}
