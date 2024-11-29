import Image from 'next/image'
import React from 'react'
import LogoImage from '@/public/images/Logo.png'

const Logo = () => {
  return (
    <Image
        alt=''
        src={LogoImage}
        width={150}
        height={25}
     />
  )
}

export default Logo