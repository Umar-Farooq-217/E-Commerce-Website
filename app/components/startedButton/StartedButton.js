import React from 'react'
import Image from 'next/image'
export default function StartedButton(props) {
  return (
    
      <button className='flex mx-auto justify-center items-center bg-[#A259FF] w-[170px] h-[60px]  rounded-3xl gap-3'>
              <Image src="/smallicon.svg" width={20} height={20} alt='icon' />
              <p> {props.title}</p>
      
           
          </button>
   
  )
}
