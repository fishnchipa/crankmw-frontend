import Image from "next/image";

export default function VideoMain() {
  

  return (
    <div 
      className="flex justify-center items-center 
      w-full h-[calc(100vh-101px)]"
      
      >
      <div className="w-full h-full p-[36px] absolute top-0 overflow-hidden">
        <div className="relative w-full h-full animate-grow-in">
          <Image 
            src="/mclaren.webp"
            alt="mclaren video"
            className="object-cover rounded-[10px]"
            fill
          />
        </div>      
      </div>
    </div> 
  )
}

