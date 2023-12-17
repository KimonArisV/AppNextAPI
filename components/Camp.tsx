import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({backgroundImage,title,subtitle,peopleJoined}:CampProps) =>{
  return(
    <div>

    </div>
  )
}
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto
                      lg:h-[400px] xl:h-[640px]">
          < CampSite 
              backgroundImage: "bg-img-1"
              title: "Preschool Coders" 
              subtitle: "Coder Level 1"
              peopleJoined: "30+ Joined" />
          < CampSite 
              backgroundImage: "bg-img-2"
              title: "Become a Math Genius" 
              subtitle: "Math Level 1"
              peopleJoined: "40+ Joined" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="btn_gray p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl 
        xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24">
            <strong>Feeling overwhelmed</strong> with no time for teaching math and coding to your 
            preschooler?
          </h2>
          <p className="regular-14">
          What if there was an effortless solution to give your child a head start 
          without the stress? Transform your child's preschool years into a powerhouse
          of learning with our hassle-free app. No time or expertise needed – we make 
          math and coding education a breeze for busy parents, ensuring your little one 
          thrives from the very start. No distractions, no supervision necessery and no 
          ads.
          </p>
          <Image className="camp-quote"
            />
        </div>
      </div>

    </section>
  )
}

export default Camp