import Image from 'next/image'
import React from 'react'
import Vector from '@/public/images/Vector.png'
import Button from '@/components/ui/Button'
import Card1 from '@/public/images/Card1.png'
import Card2 from '@/public/images/Card2.png'
import Card3 from '@/public/images/Card3.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-textarea'>
        <div className='vector'>
          <Image
            alt=''
            src={Vector}
            height={50}
            width={50}
           />
        </div>
        <div className='hero-heading'>Smart-Thinking & Innovative Solution.</div>
        <div className='hero-para'>Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.</div>
        <div className='hero-buttons'>
          <Button
            text='Discover More'
           />
          <Button
            text='Explore Services'
            outline
           />
        </div>
      </div>
      {/* right */}
      <div className='hero-right'>
        <div className='hero-upper'>
          <Image
            alt=''
            src={Card1}
            width={250}
            height={250}
           />
          <Image
            alt=''
            src={Card2}
            width={250}
            height={250}
           />
        </div>
        <div className='hero-lower'>
          <Image
            alt=''
            src={Card3}
            width={250}
            height={250}
           />
        </div>
      </div>
    </div>
  )
}

export default Hero