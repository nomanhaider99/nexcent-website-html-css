import Image from 'next/image'
import React from 'react'
import LogoImage from '@/public/images/Icon.png'

const FooterLogo = () => {
  return (
    <div className="footer-logo">
        <div>
            <Image
                src={LogoImage}
                alt=''
                height={16}
                width={20}
            />
        </div>
        <div>Nexcent</div>
    </div>
  )
}

export default FooterLogo