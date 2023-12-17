import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS} from '@/constants';


const Footer = () => {
  return (
    <footer>

      <div className="border bg-gray-20">
        <p className="regular-14 w-full text-center text-gray-50">2024 HelpTheFellow | All rights reserved</p>
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