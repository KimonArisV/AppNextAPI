import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CourseProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CourseSite = ({backgroundImage,title,subtitle,peopleJoined}:CourseProps) =>{
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat 
                    lg:rounded-5xl 2xl:rounded-5xl`}>
    
    {/* below is the div that keeps the whole image container */}
    <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10" >

    {/* below is the div that keeps the icon,title, and subtitle */}
    <div className="flexCenter gap-4">
      {/* <div className=""> */}
        <Image 
          src="/HelpTheFellowShortIco.svg"
          alt="logo with without the name"
          width={68}
          height={68}
          className="rounded-full"
          />
      {/* </div> */}
      <div className="flex flex-col gap-1">
        <h4 className="bold-18 text-white">{title}</h4>
        <p className="regular-14 text-white">{subtitle}</p>
      </div>
    </div>
    <div className="flexCenter gap-6">
      <span className="flex -space-x-4 overflow-hidden">
        {PEOPLE_URL.map((url)=>(
          <Image
            className="inline-block h-10 w-10 rounded-full"
            src={url}
            key={url}
            alt="portrait of people joined the course"
            width={52}
            height={52}
          />
        ))}
      </span>
      <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
    </div>
    </div>
    </div>
  )
}
const Courses = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto
                      lg:h-[400px] xl:h-[640px]">
          < CourseSite 
              backgroundImage= "bg-bg-img-1"
              title= "Preschool Coders" 
              subtitle= "Coder Level 1"
              peopleJoined= "30+ Joined" />
          < CourseSite 
              backgroundImage= "bg-bg-img-2"
              title= "Become a Math Genius" 
              subtitle= "Math Level 1"
              peopleJoined= "40+ Joined" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="btn_gray p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl 
        xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24">
            <strong>Feeling overwhelmed</strong> with no time for teaching math and coding to your 
            preschooler?
          </h2>
          <p className="regular-14 mt-3">
          {/* What if there was an effortless solution to give your child a head start 
          without the stress? Transform your child's preschool years into a powerhouse
          of learning with our hassle-free app. No time or expertise needed – we make 
          math and coding education a breeze for busy parents, ensuring your little one 
          thrives from the very start.  */}
          No distractions, no supervision necessery and no ads.
          </p>
          <Image 
            src="quote.svg"
            alt="large quotes on the background"
            width={186}
            height={219}
            className="course-quote"
            />
        </div>
      </div>

    </section>
  )
}

export default Courses