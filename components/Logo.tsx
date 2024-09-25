import { cn } from "@/lib/utils";
import Image from "next/image";


type LogoProps = {
  className: string
}

export default function Logo({ className }: LogoProps) {
  
  return (
    <div className={cn("relative", className)}>
      <Image 
        src="/logo.webp"
        alt="crank motor werkes logo"
        fill
        className="object-cover"
      />
    </div>
  )
}
