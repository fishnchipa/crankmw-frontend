import CarouselMedia from "./CarouselMedia";


export default function MediaInstagram() {
  
  return (

    <div className="w-full flex flex-col items-center gap-y-[75px]">
      <div className="flex flex-col items-center">
        <h2 className="text-[15px] font-light">OUR INSTAGRAM</h2>
        <h1 className="text-[25px]">CRANK IN MOTION</h1>
      </div> 
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-[15px] text-soft-black font-extralight">Crank Motor Werkes</h2>
        <CarouselMedia />
      </div>
    </div>

  )

}
