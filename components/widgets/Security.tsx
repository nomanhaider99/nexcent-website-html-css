import React from 'react'
import Pricing from '@/public/images/Pricing.png'
import Image from 'next/image'

const Security = () => {
  return (
    <div className='security'>
        <div className='security-left'> 
            <div className='security-left-upper'>
                <div className='security-left-uper-heading'>Better Security To Better Protection An Experience Of Strength.</div>
                <div className='security-left-uper-para'>Class aptent taciti sociosqu ad litora torquent conubia nostrama inceptos himenaeos. Donec tristique nibh ipsum dignissim.</div>
            </div>
            <div className='security-left-line'></div>
            <div className='security-left-lower'>
                <div className='security-card'>
                    <div className='security-card-title'>Well Organized User Interface</div>
                    <div className='security-card-desc'>Etiam id euismod odio. Ut euismod sem a lacus fringilla.</div>
                </div>
                <div className='security-card'>
                    <div className='security-card-title'>Well Organized User Interface</div>
                    <div className='security-card-desc'>Etiam id euismod odio. Ut euismod sem a lacus fringilla.</div>
                </div>
            </div>
        </div>
        <div className='security-right'>
            <Image
                alt=''
                src={Pricing}
                width={300}
                height={400}
             />
        </div>
    </div>
  )
}

export default Security