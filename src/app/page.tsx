import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <div>
      <main className='bg-[#F0F2F3] w-[1321px] h-[850px] text-[#272343] rounded-b-[48px] items-center flex flex-col lg:flex-row  justify-center mt-[45px] py-36 px-[70px] max-w-[1500px] justify-self-center'>
        <article className='flex flex-col gap-[49px] '>
          <div className='flex flex-col gap-4' >
            <p className='text-[14px] uppercase'>Welcome to chairy</p>
            <h1 className='text-4xl lg:text-[60px] font-bold  lg:w-[557px] leading-[110%]'>Best Furniture
              Collection For Your
              Interior.</h1>
          </div>
          <button className='py-[14px] px-[24px] bg-[#029FAE] flex items-center w-[170px] text-white rounded-lg gap-4'>Show Now <span className='text-[24px]'> &#8594;</span></button>
        </article>
        <Image
          alt='chair'
          src="/chair.png"
          width={434}
          height={584}
          className='hidden lg:block mt-[60px]'>
        </Image>
      </main>
    </div>
  );
}
