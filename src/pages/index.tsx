import HeroSection from '../components/HeroSection'
import Header from '../components/Header'
import HeroContent from '../components/HeroContent'
import MainSection from '../components/MainSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import SliderCarousel from '../components/SliderCarousel'
import hero from '../assets/hero.jpg'
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
 