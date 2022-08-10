import HeroSection from '../public/src/components/HeroSection'
import Header from '../public/src/components/Header'
import HeroContent from '../public/src/components/HeroContent'
import MainSection from '../public/src/components/MainSection'
import AboutSection from '../public/src/components/AboutSection'
import ContactSection from '../public/src/components/ContactSection'
import Footer from '../public/src/components/Footer'
import SliderCarousel from '../public/src/components/SliderCarousel'
import hero from '../public/src/assets/hero.jpg'
import Image from 'next/image'




export default function Home() {

  return (
  <div className="relative overflow-x-hidden"> 
      <div className="absolute opacity-25 transform scale-150 z-0 min-w-full">
          <Image src={hero}
          className=""
            width={1200}
            height={600}
            layout="fixed"
            objectFit="cover"
            /> 
      </div>
      <Header/>
        <HeroSection /> 
        <MainSection />
        <AboutSection />
        <ContactSection />
        <SliderCarousel  />
      <Footer />
   </div>
  )
}
 