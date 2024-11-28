import React from 'react'
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import HeroOrbit from '@/components/HeroOrbit'
//  eslint-disable react/no-unescaped-entities 

const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0' style={{
        maskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
      }}
      >
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className='size-[580px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        {/* {shouldOrbit = false, orbitDuration, shouldSpin = false, spinDuration } */}
        <HeroOrbit size={390} rotation={89} shouldOrbit orbitDuration='30s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-5 text-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={410} rotation={-24} shouldOrbit orbitDuration='32s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-8 text-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
          <div className='size-2 rounded-full bg-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={-4} shouldOrbit orbitDuration='36s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-12 text-emerald-200' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration='38s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-10 text-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={110} shouldOrbit orbitDuration='40s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-8 text-emerald-200' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
          <div className='size-2 rounded-full bg-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={150} shouldOrbit orbitDuration='44s' shouldSpin spinDuration='6s'>
          <SparkleIcon className='size-14 text-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={100} shouldOrbit orbitDuration='46s'>
          <div className='size-3 rounded-full bg-emerald-200/20' />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s' shouldSpin spinDuration='6s'>
          <StarIcon className='size-28 text-emerald-200' />
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className='size-[100px]' alt="Person peeking from behind laptop" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
              <div className='absolute bg-green-500 inset-0 animate-ping-large rounded-full'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-4 tracking-wide'>Building Exceptional User Experiences</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming design into functional,high-performing web applications.Let's discuss your next project.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold '>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection