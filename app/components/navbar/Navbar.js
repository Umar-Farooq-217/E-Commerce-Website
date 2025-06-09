import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
        <div className="">
            <Image src='/icon.svg' width={20} height={20} alt='nav icon' />
            <h1>NFT MarketPlace</h1>
        </div>
        <div className="">
            <li><Link  href="/" >Marketplace </Link></li>
            <li><Link  href="/" >Rankings </Link></li>
            <li><Link  href="/" >Connect a Wallet </Link></li>
            <li><Link  href="/" >Marketplace </Link></li>
           
        </div>
      
    </nav>
  )
}
