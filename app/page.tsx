
import Banner from "@/components/Banner";
import CarouselEvent from "@/components/CarouselEvent";
import CarouselLogo from "@/components/CarouselLogo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MediaInstagram from "@/components/MediaInstagram";
import SectionFeature from "@/components/SectionFeature";
import SectionTuning from "@/components/SectionTuning";
import SectionWave from "@/components/SectionWave";

export default function Home() {


  return (
    <>
      <Banner content="Alexandria Shop Open"/> 
      <Header />
      <CarouselLogo />
      <SectionFeature />
      <SectionWave />
      <SectionTuning />
      <CarouselEvent />
      <MediaInstagram />
      <Footer />
    </>
  );
}
