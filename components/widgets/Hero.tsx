import Image from 'next/image'
import React from 'react'
import HeroImage from "@/public/images/Hero.png"
import Button from '@/components/ui/Button'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <div className='hero-text-heading'>Lessons and Insights from eight years</div>
            <div className='hero-text-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, corporis debitis illum similique quasi laudantium mollitia rem fugit consectetur animi.</div>
            <div>
                <Button
                    text='Register'
                 />
            </div>
        </div>
        <div>
            <Image
                src={HeroImage}
                alt=''
                height={300}
                width={320}
             />
        </div>
    </div>
  )
}

export default Hero