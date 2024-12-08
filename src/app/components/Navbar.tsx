import Link from 'next/link'
import { MdDone } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { FaCircle } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import React from 'react'
import Image from 'next/image';


function Navbar() {
  return (
    <header>
      <div className="container bg-[#272343] w-full max-w-[1920px] h-[45px]">
        <div className="banner flex p-[12px] items-center justify-around gap-2 text-[13px] text-white">
          <div className="tleft gap-2 flex items-center">
            <MdDone className='max-w-[16px] max-h-[16px] text-white' /> Free shipping on all orders over $50
          </div>

          <div className="tright flex gap-6">
            <Link href="#" className='flex items-center gap-1'>Eng <FaAngleDown className='text-[13px]' /></Link>
            <Link href="#">Faq </Link>
            <Link href="#" className='flex items-center gap-1'><HiOutlineExclamationCircle />Need Help </Link>
          </div>
        </div>

        <div className="topbar bg-[#F0F2F3] h-[84px]">
          <div className="logo flex items-center justify-around p-[22px]">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={166}
              height={40}
            />

            <div className="cart flex text-[#272343] items-center pl-4 bg-white w-[120px] h-[44px] rounded-lg gap-2"><FiShoppingCart /> Cart <div className="relative"> <FaCircle className='text-[#007580] text-[20px]' /></div></div>
          </div>
        </div>

        <nav className="navbar bg-[#ffffff] text-[#636270] h-[74px]">
          <div className="logo flex items-center justify-around p-[25px]">

            <div className="links flex items-center justify-center p-[4px] gap-6">
            <Link href="/" className='flex items-center gap-1 text-[14px] text-[#007580] font-medium hover:text-[#007580] active:text-[#007580]'>Home</Link>

            <Link href="/shop" className='flex items-center gap-1 text-[14px] font-medium hover:text-[#007580]'>Shop</Link>

            <Link href="/product" className='flex items-center gap-1 text-[14px] font-medium hover:text-[#007580]'>Product</Link>

            <Link href="/pages" className='flex items-center gap-1 text-[14px] font-medium hover:text-[#007580]'>Pages</Link>

            <Link href="/about" className='flex items-center gap-1 text-[14px] font-medium hover:text-[#007580]'>About</Link>
            </div>

            <div className="cta text-[#636270]">Contact: <span className='font-bold text-[#272343] text-[14px]'>(808) 555-0111</span></div>
            
          </div>
        </nav>

      </div>
    </header>
  )
}

export default Navbar