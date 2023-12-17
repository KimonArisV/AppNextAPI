import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS} from '@/constants';


const Footer = () => {
  return (
    <footer className='flexCenter mb-24 flex-col'>

      {/* div for everything expect the rights reserved */}
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        {/* this div gets the saem components as the above */}
        <div className="flex flex-col items-start justify-center gap-[10%] mb-16 md:flex-row">
          <Link href="/" className='mb-10' >
            <Image src="HelpTheFellow2.svg" alt="logo" width={74} height={29} />
          </Link>
        
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns)=> (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link)=>
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                  )}
                </ul>
              </FooterColumn>
            ))}
          </div>

          <div className="flex flex-col gap-5 max-md:mt-5 ">
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link)=>
                  <Link href="/" key={link.label} className='flex gap-4 flex-col'>
                    <p className='whitespace-nowrap'>
                      {link.label}
                    </p>
                    <p className='medium-14 whitespace-nowrap'>
                      {link.value}
                    </p>
                  </Link>
                )}
            </FooterColumn>
          </div>

          <div className="flex flex-col gap-5 max-md:mt-5">
            <FooterColumn title={SOCIALS.title} >
              <ul className='regular-14 flex gap-4 text-gray-30'>
                {SOCIALS.links.map(link=>(
                  <Link href="/" key={link}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>

        </div>
      </div>

      <div className="border bg-gray-500 w-full">
        <p className="regular-14 w-full text-center text-white">2024 HelpTheFellow | All rights reserved</p>
      </div>

    </footer>
  )
}


//this is used in typescript to make sure the types are processed right
//in the fucntion below
//React.ReactNode allows any valid React Node
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

// if you need a component that will only be used in one component, 
//then you can created inside the same file
const FooterColumn = ({title,children}:FooterColumnProps)=>{
  return(
    <div className="flex flex-col gap-5">
      {/* the whitespace-nowrap will cause horizontal scrolling if it exceeds the limit */}
      <h4 className="bold-18 whitespace-nowrap">   
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer