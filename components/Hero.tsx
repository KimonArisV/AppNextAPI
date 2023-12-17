import Image from "next/image";
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 
                        md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map ">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image src="public/HelpTheFellowShortIco.svg" width={50} height={50} alt="logo" />
        </div>
      </div> */}
      <div className="flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-1">
          {Array(5).fill(1).map((_,index)=>(
            <Image 
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
              />
          ))}
        </div>
        <div>
          <p className=" regular-12 lg:regular-20 ml-1">Excellent Reviews</p>
        </div>
      </div>

      <div className="flex gap-5">
        <Button type="button" title="Explore App" variant="btn_gray" />
        <Button type="button" title="How we work" variant="btn_white_text" />
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-gray-500 px-7 py-8">
          <div className="flex flex-row items-center justify-between">
            <p className="regular-16 text-white">English:</p>
            <p className="bold-20 text-white">A+</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="regular-16 text-white">Math:</p>
            <p className="bold-20 text-white">A+</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="regular-16 text-white">Coding:</p>
            <p className="bold-20 text-white">A+</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero