import Anchor from "../Anchor";
import Button from "../Button";
import Product from "./Product";

type ProductLandingProps = {
  title: string
}
export default function ProductLanding({title}: ProductLandingProps) {


  return (
    <div className="flex flex-col gap-y-3 px-10 lg:px-[200px] mt-16">
      <Anchor href="/" className="w-fit hover:underline text-moody-gray font-semibold decoration-[3px]" >
        <h1 className="text-[#4A4A4A] text-[25px] sm:text-[30px] xl:text-[34px]">{title}</h1>
      </Anchor>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full sm:gap-x-5 gap-y-10">
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
        <Product title='5" CMW B58 Catless Downpipe' price={13} sale={{discount: 40}}/>
      </div>
      <div className="w-full flex justify-center items-center">
      <Button 
        className="w-28 h-12 relative group overflow-hidden border-2 border-black hover:text-white mt-10"
      >
        <span className="absolute inset-0 bg-black transform -translate-x-[calc(100%+1px)] group-hover:translate-x-0 transition-transform duration-400 ease-in-out"></span>
        <span className="relative">VIEW ALL</span>
      </Button>

      </div>
    </div>
  )
}
