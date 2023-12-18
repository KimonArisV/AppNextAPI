import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[50px]">
     <div className="padding-container max-container w-full pb-14 ">
        <div className="flex flex-wrap justify-between  lg:gap-10 btn_gray xl:rounded-5xl 
                        xl:px-16 xl:py-20 w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 ">
            <strong>Start</strong> Your toddler's learning journey <strong>now</strong>!
          </h2>
          <p className="regular-14 mt-3">
            Available on any device. Mobile responsive.
          </p>
         </div>
      </div>
    </section>
  )
}

export default GetApp