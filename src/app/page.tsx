import React from 'react'
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Featured from '@/components/Featured';
import Categories from '@/components/Categories';


export default function Home() {
  return (
    <div>
      <Hero/>
      <Logos/>
      <Featured/>
      <Categories/>
    </div>
  );
}
