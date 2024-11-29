import Image from 'next/image'
import React from 'react'
import LogosImage from '@/public/images/Logos.png'

const Logos = () => {
  return (
    <Image
        alt=''
        src={LogosImage}
        width={1200}
        height={100}
        className='logos'
     />
  )
}

export default Logos