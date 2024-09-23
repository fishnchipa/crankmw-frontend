import { cn } from "@/lib/utils"
import { Search, ShoppingCart } from "lucide-react"
import Link from "next/link"


type NavbarProps = {
  clear: boolean
  className: string
}

export default function NavbarMinor({ clear, className }: NavbarProps) {
  
  return (
    <nav 
      className={cn(`flex flex-row justify-end items-center gap-x-4
      ${clear ? "text-white" : "text-dark-midnight"}`,className)}
    >
      <button>
        <Search />
      </button>    
      <Link href={"/cart"}>
        <ShoppingCart />
      </Link>
    </nav>
  )
}
