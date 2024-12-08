import Link from 'next/link'
import { MdDone } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa6";
import React from 'react'


function Navbar() {
  return (
    <header>
      <div className="container bg-[#272343] w-full max-w-[1920px] h-[45px]">
        <div className="banner flex p-[14px] items-center justify-around gap-2 text-[13px] text-white">
          <div className="tleft flex items-center">
          <MdDone className='max-w-[16px] max-h-[16px] text-white'/> Free shipping on all orders over $50
          </div>

          <div className="tright flex gap-6">
            <Link href="#" className='flex items-center gap-1'>Eng<FaAngleDown className='text-[13px]'/></Link>
            <Link href="#">Faq</Link>
            <Link href="#">Need Help</Link>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar