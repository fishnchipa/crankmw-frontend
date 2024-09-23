
import Banner from "@/components/Banner";
import CarouselEvent from "@/components/CarouselEvent";
import CarouselLogo from "@/components/CarouselLogo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MediaInstagram from "@/components/MediaInstagram";
import SectionFeature from "@/components/SectionFeature";
import SectionTuning from "@/components/SectionTuning";
import SectionWave from "@/components/SectionWave";
import VideoMain from "@/components/VideoMain";

export default function Home() {


  return (
    <>
      <div className="h-[3000px]">
        <Banner content="Alexandria Shop Open"/> 
        <Header />
        <div className="flex flex-col gap-y-[100px]">
          <VideoMain />
          <CarouselLogo />
          <SectionWave />
          <SectionFeature />
          <CarouselEvent />
          <SectionTuning />
          <hr />
          <MediaInstagram />
        </div>

        <Footer />
      </div>
    </>
  );
}
