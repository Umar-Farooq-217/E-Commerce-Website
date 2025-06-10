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
    <nav className='block lg:flex justify-between items-center  px-[50px] py-[20px] bg-[rgba(0,0,0,0.8)]'>
        <div className="flex justify-start items-center">
            <Image src='/icon.svg' width={32} height={32} alt='nav icon' />
            <h1 className='text-2xl font-semibold font-mono pl-3'>NFT Marketplace</h1>
        </div>
         <div className="block lg:hidden absolute right-8 top-5 " onClick={()=>setOpen(!open)}>
          {
            open ? <VscChromeClose className="text-white w-10 h-10"/> :   <IoMenu className="text-white w-10 h-10" />
          }
      
      </div>
        <div className="block lg:flex justify-center items-center list-none text-md gap-12 font-[600] my-9 lg:my-0   ">
            <li className='py-10 lg:py-0 flex justify-center items-center  '><Link className=''  href="/" >Marketplace </Link></li>
            <li className='py-10 lg:py-0 flex justify-center items-center  '><Link  href="/" >Rankings </Link></li>
            <li className='py-10 lg:py-0 flex justify-center items-center  '><Link  href="/" >Connect a Wallet </Link></li>
            <li className='py-10 lg:py-0 flex justify-center items-center  '><Link  href="/" ><Button title='Sign Up'/> </Link></li>
           
        </div>
      
    </nav>
  )
}
