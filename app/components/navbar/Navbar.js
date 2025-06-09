import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";

// components
import Button from './../button/Button'



export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-[100px] px-[50px] py-[20px]'>
        <div className="flex justify-center items-center">
            <Image src='/icon.svg' width={32} height={32} alt='nav icon' />
            <h1 className='text-2xl font-semibold font-mono pl-3'>NFT Marketplace</h1>
        </div>
         <div className="block lg:hidden absolute right-8 top-8 ">
        <IoMenu className="text-white w-10 h-10" />
      </div>
        <div className="hidden lg:flex justify-center items-center list-none text-md gap-12 font-[600]   ">
            <li><Link  href="/" >Marketplace </Link></li>
            <li><Link  href="/" >Rankings </Link></li>
            <li><Link  href="/" >Connect a Wallet </Link></li>
            <li><Link  href="/" ><Button title='Sign Up'/> </Link></li>
           
        </div>
      
    </nav>
  )
}
