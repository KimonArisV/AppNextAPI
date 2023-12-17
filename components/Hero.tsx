import Image from "next/image";
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 
                        md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image src="public/HelpTheFellowShortIco.svg" width={50} height={50} alt="logo" />
        </div>
      </div>

    </section>
  )
}

export default Hero