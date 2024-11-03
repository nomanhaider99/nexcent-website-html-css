import Image from 'next/image'
import React from 'react'
import ClientImage from '@/public/images/clientlogos.png'

const Clients = () => {
  return (
    <div className='clients'>
        {/* Text Area */}
        <div className='client-text'>
            <div className='client-text-heading'>Our Clients</div>
            <div className='client-text-para'>We are working with these Fortune 500+ clients</div>
        </div>
        {/* Image Area */}
        <div className='client-image'>
            <Image
                src={ClientImage}
                alt=''
                height={100}
                width={900}
             />
        </div>
    </div>
  )
}

export default Clients