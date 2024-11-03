import Image from 'next/image'
import React from 'react'
import Pana from '@/public/images/pana.png'
import Button from '../ui/Button'

const Teach = () => {
  return (
    <div className='teach'>
        {/* Image */}
        <div>
            <Image
                src={Pana}
                alt=''
                height={400}
                width={400}
             />
        </div>
        {/* Text */}
        <div className='teach-textarea'>
            <div className='teach-heading'>How to design your site footer like we did</div>
            <div className='teach-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur hic quae, molestias dolorem dolorum. Qui omnis architecto corporis, libero eveniet exercitationem explicabo, dolores expedita ex fugit commodi ipsam nulla nobis error. Totam, atque ducimus officiis voluptates nemo consequuntur a?</div>
            <div className='teach-button'>
                <Button
                    text='Learn More'
                 />
            </div>
        </div>
    </div>
  )
}

export default Teach