'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

// components
import Button from './../button/Button'



export default function Navbar() {
  const [open , setOpen] = useState(false)
 
  return (
    <nav className='block lg:flex justify-between items-center z-30  py-[20px] bg-[#2b2b2b]'>
        <div className="flex justify-start items-center pl-[50px]">
            <Image src='/icon.svg' width={32} height={32} alt='nav icon' />
            <h1 className='text-2xl font-semibold font-mono pl-3'>NFT Marketplace</h1>
        </div>
         <div className="block lg:hidden absolute right-8 top-5 " onClick={()=>setOpen(!open)}>
          {
            open ? <VscChromeClose className="text-white w-10 h-10"/> :   <IoMenu className="text-white w-10 h-10" />
          }
      
      </div>
        <ul className={`block w-full lg:w-auto text-center  lg:flex justify-center items-center list-none text-md gap-12 font-[600] mx-0 lg:mx-[50px]  bg-[#2b2b2b]  
          absolute lg:static  transition-all ease-out duration-700 z-40  ${open ? 'top-[70px] ': 'top-[-700px]' }  `}>
            <li className='py-10 lg:py-0   pt-10 lg:pt-0    '><Link className=''  href="/" >Marketplace </Link></li>
            <li className='py-10 lg:py-0   '><Link  href="/" >Rankings </Link></li>
            <li className='py-10 lg:py-0     '><Link  href="/" >Connect a Wallet </Link></li>
            <li className='py-10 lg:py-0     '><Link  href="/" ><Button title='Sign Up'/> </Link></li>
           
        </ul>
      
    </nav>
  )
}
