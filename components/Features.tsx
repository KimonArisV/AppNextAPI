import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-12 ">
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map(feature=>(
              <FeatureItem
                key = {feature.title}
                title = {feature.title}
                icon = {feature.icon}
                description = {feature.description}
                />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItems={
  title:string;
  icon:string;
  description:string;
}

const FeatureItem = ({title, icon, description}:FeatureItems)=>{
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className="">
        <Image  
          src={icon} 
          alt="logo symbol of HelpTheFellow" 
          height={40} 
          width={40} 
          className="rounded-full"/>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features