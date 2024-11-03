import Image from 'next/image'
import React from 'react'
import LogoImage from "@/public/images/Icon.png"

const Logo = () => {
  return (
    <div className="logo">
        <div>
            <Image
                src={LogoImage}
                alt=''
                height={16}
                width={20}
            />
        </div>
        <div className='header-logo-text'>Nexcent</div>
    </div>
  )
}

export default Logo